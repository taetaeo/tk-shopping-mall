import fs from "fs";
import { resolve } from "path";

export enum DBField {
  EVENT = "events",
  PRODUCTS = "products",
}

const basePath = resolve(); // __dirname

const fileNames = {
  [DBField.EVENT]: resolve(basePath, "./src/db/events.json"),
  [DBField.PRODUCTS]: resolve(basePath, "./src/db/products.json"),
};

export const readDB = (target: DBField) => {
  try {
    return JSON.parse(
      fs.readFileSync(fileNames[target], { encoding: "utf-8" })
    );
  } catch (err) {
    console.log(err);
  }
};

export const writeDB = (target: DBField, data: any) => {
  try {
    fs.writeFileSync(fileNames[target], JSON.stringify(data, null, "  "));
  } catch (err) {
    console.log(err);
  }
};
