import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "tsup";

export default defineConfig(() => ({
  sourcemap: "production", // source map is only available in prod

  clean: true, // clean dist before build
  dts: true, // generate dts file for main module
  format: ["cjs", "esm"], // generate cjs and esm files
  minify: true,
  bundle: true,
  watch: false,
  target: "es2020",
  entry: ["src/index.ts"],
}));
