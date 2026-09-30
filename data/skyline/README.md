# Skyline data

`scripts/build-skyline.mjs` turns raw map data into `lib/vignettes/generated/skyline.ts`, the real horizon seen from Pier 1. The raw dumps live in `cache/` (gitignored, ~15 MB). To refresh them:

Buildings (OpenStreetMap via Overpass; the NYC import carries a `height` on nearly every building):

```bash
Q=https://overpass.kumi.systems/api/interpreter
curl -G $Q --data-urlencode 'data=[out:json][timeout:500];way["building"]["height"](around:2600,40.6937,-74.0009);out geom;' -o cache/near.json
curl -G $Q --data-urlencode 'data=[out:json][timeout:500];(way["building"]["height"~"^([3-9][0-9]|[1-9][0-9][0-9])"](around:4200,40.7150,-74.0400);relation["building"]["height"~"^([3-9][0-9]|[1-9][0-9][0-9])"](around:4200,40.7150,-74.0400););out geom;' -o cache/far-jersey.json
curl -G $Q --data-urlencode 'data=[out:json][timeout:500];(way["building"]["height"~"^([3-9][0-9]|[1-9][0-9][0-9])"](around:5000,40.6450,-74.0900);relation["building"]["height"~"^([3-9][0-9]|[1-9][0-9][0-9])"](around:5000,40.6450,-74.0900););out geom;' -o cache/far-south.json
curl -G $Q --data-urlencode 'data=[out:json][timeout:200];(relation["place"="island"]["name"="Governors Island"](around:6000,40.6937,-74.0009););out geom;' -o cache/islands.json
```

Terrain (`cache/terrain.json`, rows of `[bearingDeg, distanceM, elevationM]`): Open-Meteo's elevation API sampled every 1° of bearing from 185° to 370° and every 300 m from 2 to 16 km, 100 points per request.
