import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

const outputDirectory = resolve("dist");

// GitHub Pages serves 404.html for direct requests to client-side routes.
// Using the built entry page as that fallback lets React Router render the URL.
copyFileSync(
  resolve(outputDirectory, "index.html"),
  resolve(outputDirectory, "404.html"),
);
