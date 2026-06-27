import { pdf } from 'pdf-to-img';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'public', 'images', 'certificates');

const pdfs = [
  {
    input: path.join(root, 'public', 'certificates', 'Government training.pdf'),
    output: path.join(outDir, 'government-training.jpeg'),
  },
  {
    input: path.join(root, 'public', 'certificates', 'VirtualTraining_MariaaAnayat.pdf'),
    output: path.join(outDir, 'virtual-sign-language-training.jpeg'),
  },
];

await mkdir(outDir, { recursive: true });

for (const item of pdfs) {
  const doc = await pdf(item.input, { scale: 2 });
  let pageIndex = 0;

  for await (const image of doc) {
    if (pageIndex === 0) {
      await writeFile(item.output, image);
      console.log(`Created ${path.relative(root, item.output)}`);
    }
    pageIndex += 1;
  }
}

console.log('PDF previews generated.');
