import { NextResponse } from "next/server";

let cached: { count: number; timestamp: number } | null = null;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export async function GET() {
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return NextResponse.json({ stars: cached.count });
  }

  try {
    const res = await fetch("https://api.github.com/repos/erictli/scratch", {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      if (cached) {
        return NextResponse.json({ stars: cached.count });
      }
      return NextResponse.json({ stars: null }, { status: 502 });
    }

    const data = await res.json();
    cached = { count: data.stargazers_count, timestamp: Date.now() };

    return NextResponse.json(
      { stars: data.stargazers_count },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch {
    if (cached) {
      return NextResponse.json({ stars: cached.count });
    }
    return NextResponse.json({ stars: null }, { status: 502 });
  }
}
