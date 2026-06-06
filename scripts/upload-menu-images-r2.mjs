import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const sourceDir = path.join(root, "images");

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  for (const line of fs.readFileSync(filePath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile(path.join(root, ".env.local"));
loadEnvFile(path.join(root, ".env"));

const {
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_ACCOUNT_ID,
  R2_ENDPOINT,
  R2_BUCKET_NAME,
} = process.env;

const endpointFromAccount = R2_ACCOUNT_ID
  ? `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`
  : undefined;

const endpoint =
  R2_ENDPOINT && !R2_ENDPOINT.includes("YOUR_ACCOUNT_ID")
    ? R2_ENDPOINT
    : endpointFromAccount;

const missing = [
  ["R2_ACCESS_KEY_ID", R2_ACCESS_KEY_ID],
  ["R2_SECRET_ACCESS_KEY", R2_SECRET_ACCESS_KEY],
  ["R2_BUCKET_NAME", R2_BUCKET_NAME],
  ["R2_ENDPOINT or R2_ACCOUNT_ID", endpoint],
].filter(([, value]) => !value);

if (missing.length) {
  console.error("Missing required env vars in .env.local:");
  missing.forEach(([key]) => console.error(`  - ${key}`));
  process.exit(1);
}

const client = new S3Client({
  region: "auto",
  endpoint,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

const imageFiles = fs
  .readdirSync(sourceDir)
  .filter((file) => file.toLowerCase().endsWith(".webp"));

if (!imageFiles.length) {
  console.error(`No .webp files found in ${sourceDir}`);
  process.exit(1);
}

console.log(`Uploading ${imageFiles.length} images to R2 bucket "${R2_BUCKET_NAME}"...`);

let uploaded = 0;

for (const file of imageFiles) {
  const body = fs.readFileSync(path.join(sourceDir, file));
  const key = `menu/${file}`;

  await client.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
      Body: body,
      ContentType: "image/webp",
    }),
  );

  uploaded += 1;
  console.log(`  [${uploaded}/${imageFiles.length}] ${key}`);
}

console.log(`\nDone. ${uploaded} images uploaded to s3://${R2_BUCKET_NAME}/menu/`);
