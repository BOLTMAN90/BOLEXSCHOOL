import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = path.resolve(import.meta.dirname, "..");
const source = path.join(
  root,
  "assets",
  "logo-source.png"
);

// Fall back to the original uploaded logo if source is missing.
const fallback = path.join(
  root,
  "..",
  ".cursor",
  "projects",
  "c-Users-USER-Desktop-BOLEXSCHOOL",
  "assets",
  "c__Users_USER_AppData_Roaming_Cursor_User_workspaceStorage_c4d1ca232a3c20e3a179b62102e6d311_images_image-db52f0ce-8472-4b78-b49d-091599f05252.png"
);

const input = fs.existsSync(source) ? source : fs.existsSync(fallback) ? fallback : path.join(root, "src/app/icon.png");

async function resizePng(size) {
  return sharp(input)
    .resize(size, size, { fit: "cover", position: "centre" })
    .png({ compressionLevel: 9, palette: true })
    .toBuffer();
}

async function main() {
  const [icon16, icon32, icon48, apple180] = await Promise.all([
    resizePng(16),
    resizePng(32),
    resizePng(48),
    resizePng(180),
  ]);

  const ico = await pngToIco([icon16, icon32, icon48]);

  const appDir = path.join(root, "src/app");
  const publicDir = path.join(root, "public");

  fs.writeFileSync(path.join(appDir, "favicon.ico"), ico);
  fs.writeFileSync(path.join(appDir, "icon.png"), icon32);
  fs.writeFileSync(path.join(appDir, "apple-icon.png"), apple180);

  // Browsers often request /favicon.ico before parsing HTML.
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), ico);

  const faviconPng = path.join(publicDir, "favicon.png");
  if (fs.existsSync(faviconPng)) fs.unlinkSync(faviconPng);

  console.log("Generated favicons from:", input);
  console.log("  favicon.ico:", ico.length, "bytes");
  console.log("  icon.png:", icon32.length, "bytes");
  console.log("  apple-icon.png:", apple180.length, "bytes");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
