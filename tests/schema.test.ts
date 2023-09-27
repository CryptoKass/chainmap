import { describe, expect, test } from "bun:test";
import { Validator } from "jsonschema";
import fs from "fs";

describe("JSON specs are valid", async () => {
  // load json schema
  const schema = await Bun.file("./schema.json").json();

  // read all json files in the data folder
  const files = fs
    .readdirSync("./data")
    .filter((file) => file.endsWith(".json"))
    .map((file) => Bun.file(`./data/${file}`));

  // validate each file
  for (let file of files) {
    const name = (file.name || "").replace(".json", "").replace("./data/", "");
    const data = await file.json();
    const v = new Validator();

    test(`${file.name} matches schema`, async () => {
      const result = v.validate(data, schema);
      expect(result.valid).toBe(true);
    });
  }
});
