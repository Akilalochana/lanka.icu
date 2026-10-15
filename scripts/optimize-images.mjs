import { readdir, readFile, mkdir, writeFile, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('public');
await mkdir(path.join(root,'optimized'),{recursive:true});
const manifest = {};
for (const name of await readdir(root)) {
  if (!/\.(jpg|jpeg|png|avif|webp|svg)$/i.test(name)) continue;
  const source = path.join(root,name);
  const size = (await stat(source)).size;
  if(name.endsWith('.svg') && size < 1000000) continue;
  let input = await readFile(source);
  if(name.endsWith('.svg')) {
    // These source wrappers contain a single full-frame raster photo.
    const match = input.toString('utf8').match(/data:image\/[^;]+;base64,([^"']+)/);
    if(!match) throw new Error('Expected an embedded photo: '+name);
    input = Buffer.from(match[1],'base64');
  }
  // Preserve the original photo aspect ratio.
  const hero = /unsplash|airline|elephant/.test(name);
  const logo = /logo|favicon/.test(name);
  const widths = logo ? [128] : hero ? [640,1280,1920] : [640,1280];
  const variants=[];
  for (const width of widths) {
    const data=await sharp(input,{limitInputPixels:50000000}).rotate().resize({width,withoutEnlargement:true}).webp({quality:hero?78:76,effort:5}).toBuffer();
    const hash=createHash('sha256').update(data).digest('hex').slice(0,10);
    const filename=`${path.parse(name).name}-${width}-${hash}.webp`;
    await writeFile(path.join(root,'optimized',filename),data);
    const actual = await sharp(data).metadata();
    variants.push({src:`/optimized/${filename}`,width:actual.width,bytes:data.length});
  }
  manifest[`/${name}`]={originalBytes:size,variants};
  console.log(`${name}: ${(size/1024).toFixed(0)} KB -> ${(variants.at(-1).bytes/1024).toFixed(0)} KB`);
}
await mkdir('src/data',{recursive:true});
await writeFile('src/data/image-manifest.json',JSON.stringify(manifest,null,2)+'\n');
