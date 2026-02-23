import { NextResponse } from "next/server";

let cached: { data: unknown; timestamp: number } | null = null;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

const REPO = "erictli/scratch";

function downsample(
  data: { date: string; count: number }[],
  maxPoints: number
): { date: string; count: number }[] {
  if (data.length <= maxPoints) return data;
  const step = Math.ceil((data.length - 2) / (maxPoints - 2));
  const result = [data[0]];
  for (let i = step; i < data.length - 1; i += step) {
    result.push(data[i]);
  }
  result.push(data[data.length - 1]);
  return result;
}

export async function GET() {
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return NextResponse.json(cached.data);
  }

  try {
    const ghHeaders = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "ericli.io",
    };

    // Fetch repo info, contributors, and releases in parallel
    const [repoRes, contribRes, releasesRes] = await Promise.all([
      fetch(`https://api.github.com/repos/${REPO}`, { headers: ghHeaders }),
      fetch(`https://api.github.com/repos/${REPO}/contributors?per_page=10`, {
        headers: ghHeaders,
      }),
      fetch(`https://api.github.com/repos/${REPO}/releases?per_page=100`, {
        headers: ghHeaders,
      }),
    ]);

    if (!repoRes.ok) throw new Error("repo fetch failed");
    const repo = await repoRes.json();

    const contributors: {
      login: string;
      contributions: number;
      avatar: string;
      url: string;
    }[] = [];
    if (contribRes.ok) {
      const raw = await contribRes.json();
      if (Array.isArray(raw)) {
        for (const c of raw) {
          contributors.push({
            login: c.login,
            contributions: c.contributions,
            avatar: c.avatar_url,
            url: c.html_url,
          });
        }
      }
    }

    // Fetch star history — paginate through all stargazers
    const starDates: string[] = [];
    for (let page = 1; page <= 60; page++) {
      const r = await fetch(
        `https://api.github.com/repos/${REPO}/stargazers?page=${page}&per_page=100`,
        {
          headers: {
            Accept: "application/vnd.github.v3.star+json",
            "User-Agent": "ericli.io",
          },
        }
      );
      if (!r.ok) break;
      const items: { starred_at: string }[] = await r.json();
      if (!Array.isArray(items) || items.length === 0) break;
      starDates.push(...items.map((item) => item.starred_at));
      if (items.length < 100) break;
    }

    // Group into daily cumulative counts (YYYY-MM-DD)
    const byDay: Record<string, number> = {};
    starDates.forEach((d, i) => {
      byDay[d.slice(0, 10)] = i + 1;
    });
    const rawHistory = Object.entries(byDay)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, count]) => ({ date, count }));

    // Downsample to at most 60 points for very active repos
    const starHistory = downsample(rawHistory, 60);

    let releaseCount = 0;
    if (releasesRes.ok) {
      const releases = await releasesRes.json();
      if (Array.isArray(releases)) releaseCount = releases.length;
    }

    const data = {
      stars: repo.stargazers_count as number,
      forks: repo.forks_count as number,
      openIssues: repo.open_issues_count as number,
      createdAt: (repo.created_at as string).slice(0, 10),
      releaseCount,
      starHistory,
      contributors,
      fetchedAt: new Date().toISOString(),
    };

    cached = { data, timestamp: Date.now() };
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch {
    if (cached) return NextResponse.json(cached.data);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 502 }
    );
  }
}
