import {zipFunctions} from "@netlify/zip-it-and-ship-it";
import {fileURLToPath} from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
// Mirror netlify.toml so native dependencies and dynamic charge reads are
// exercised locally, without a Netlify account or a deployment.
const bundles = await zipFunctions(path.join(root, "netlify/functions"), path.join(root, ".netlify/functions-bundled"), {
  basePath: root,
  config: {
    "*": {nodeBundler: "zisi", nodeVersion: "24.x"},
    api: {includedFiles: ["public/charges/**"], externalNodeModules: ["@resvg/resvg-js"]}
  }
});
for (const bundle of bundles) console.log(`${bundle.name}: ${bundle.path}`);
