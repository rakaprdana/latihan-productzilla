import * as fs from "node:fs";
import { Buffer } from "node:buffer";
import path from "path";

const data = new Uint8Array(Buffer.from("Halo, saya dibuat dengan buffer"));
fs.writeFileSync("message.pdf", data);
console.log("sukses");

const fileData = fs.readFileSync("message.pdf", { encoding: "utf8" });
console.log("file content: ", fileData);

const pathObj = path.parse("message.pdf");
console.log("path object:", pathObj);

const relativePath = "message.pdf";
console.log("relative path: ", relativePath);

const absPath = path.resolve(relativePath);
console.log("Absolute path: ", absPath);

const checkAbs = path.isAbsolute(
  "D:/Productzilla Academy/Latihan-Typescript/message.pdf"
);
console.log(checkAbs);
