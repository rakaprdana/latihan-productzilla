import * as crypto from "node:crypto";
import { Buffer } from "node:buffer";

function encrypt(text: string, password: string): string {
  const algorithm = "aes-192-cbc";
  const key = crypto.scryptSync(password, "salt", 24);
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return iv.toString("hex") + ":" + encrypted;
}

function decrypt(encryptedText: string, password: string) {
  const algorithm = "aes-192-cbc";
  const key = crypto.scryptSync(password, "salt", 24);

  const parts = encryptedText.split(":");
  const iv = Buffer.from(parts.shift()!, "hex");
  const encrypted = parts.join(":");

  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, "hex", "utf8");
}
