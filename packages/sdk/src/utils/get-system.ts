import path from "path";
import { createRequire } from "node:module";
import fs from "fs";
import { type System } from "../types/system";
import { pathToFileURL } from "node:url"; // Import the required function

const require = createRequire(import.meta.url);

export const getSystemPackage = async (packageName: string) => {
  return path.dirname(require.resolve(packageName, { paths: [process.cwd()] }));
  // return import.meta.resolve(packageName);
};

export const getSystemLocal = async (packageName: string) => {};

export const getSystems = async (systemNames: string[]) => {
  let systems: System[] = [];

  for (let systemName of systemNames) {
    let systemPath = await getSystemPackage(systemName);
    console.log("systemPath", systemPath);

    let system = await import(
      pathToFileURL(path.join(systemPath, "index.js")).href
    );
    systems.push(system);
  }
  // fs.readdir("./systems", async (err, files) => {
  //   if (err) {
  //     console.error("Error reading systems directory", err);
  //     return;
  //   }

  //   //if file is a directory
  //   for (let file of files) {
  //     let filePath = path.resolve(process.cwd(), "systems", file);

  //     if (fs.lstatSync(path.resolve(filePath)).isDirectory()) {
  //       // import the index.ts file in it
  //       let system = await import(
  //         pathToFileURL(path.resolve(filePath, "system.js")).href
  //       );
  //       systems.push(system);
  //     }
  //   }
  // });
  return systems;
};
