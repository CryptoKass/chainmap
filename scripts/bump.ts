import * as semver from "semver";
import { writeFile } from "./utils";

const main = async () => {
  const pkg = Bun.file("package.json");
  const packageJson = await pkg.json();

  // bump the version
  const newVersion = semver.inc(packageJson.version, "patch");
  packageJson.version = newVersion;

  // write the new package.json
  await writeFile("package.json", JSON.stringify(packageJson, null, 2));
  console.log(`Bumped version to ${newVersion} ✔️`);
};

main().catch(console.error);
