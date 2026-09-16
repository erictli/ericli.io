import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "node_modules", "maplibre-gl", "dist");
const destination = path.join(root, "public", "nyc", "maplibre");

await mkdir(destination, { recursive: true });
await Promise.all(
  ["maplibre-gl-worker.mjs", "maplibre-gl-shared.mjs"].map(
    async (filename) => {
      const contents = await readFile(path.join(source, filename), "utf8");
      const withoutMissingSourceMap = contents.replace(
        /\n\/\/# sourceMappingURL=.*\s*$/,
        "\n",
      );
      await writeFile(
        path.join(destination, filename),
        withoutMissingSourceMap,
      );
    },
  ),
);

console.log("Copied NYC MapLibre worker assets");
