import { getAllArticles } from "@/lib/articles";
import { fetchPierWeather } from "@/lib/water/open-meteo";
import Home from "@/components/Home";

// Rebuilt at most every ten minutes (WEATHER_TTL_S; Next wants a literal
// here), with the weather at the pier baked in, so the water starts from the
// real thing.
export const revalidate = 600;

export default async function HomePage() {
  const articles = getAllArticles().slice(0, 5);
  const weather = await fetchPierWeather().catch(() => null);

  return <Home articles={articles} weather={weather} />;
}
