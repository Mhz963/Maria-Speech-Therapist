import sharp from 'sharp';
import { readdir, rename, stat, unlink } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesRoot = path.join(__dirname, '..', 'public', 'images');
const MAX_WIDTH = 1400;
const QUALITY = 82;

async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectImages(fullPath)));
    } else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeImage(filePath) {
  const tempPath = `${filePath}.optimized.tmp`;
  const before = (await stat(filePath)).size;
  const meta = await sharp(filePath).metadata();

  let pipeline = sharp(filePath).rotate();
  if (meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
  }

  if (/\.png$/i.test(filePath)) {
    await pipeline.png({ compressionLevel: 9, palette: true }).toFile(tempPath);
  } else {
    await pipeline.jpeg({ quality: QUALITY, mozjpeg: true }).toFile(tempPath);
  }

  await unlink(filePath);
  await rename(tempPath, filePath);

  const after = (await stat(filePath)).size;
  const saved = before > 0 ? Math.round((1 - after / before) * 100) : 0;
  console.log(`Optimized ${path.relative(imagesRoot, filePath)} (${saved}% smaller)`);
}

const images = await collectImages(imagesRoot);
console.log(`Optimizing ${images.length} images...`);

for (const image of images) {
  await optimizeImage(image);
}

console.log('Done.');
