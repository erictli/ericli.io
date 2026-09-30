import { WEATHER_TTL_S, fetchPierWeather } from "@/lib/water/open-meteo";

// The weather at the pier for the homepage's water, shared by every visitor:
// Open-Meteo is asked at most once per cache window, and the CDN serves the
// rest. A failure isn't cached, so the next request tries again.
export async function GET() {
  try {
    const weather = await fetchPierWeather();
    return Response.json(
      { weather },
      { headers: { "Cache-Control": `public, s-maxage=${WEATHER_TTL_S}, stale-while-revalidate=${WEATHER_TTL_S}` } },
    );
  } catch (err) {
    console.error(err);
    return Response.json({ weather: null }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
