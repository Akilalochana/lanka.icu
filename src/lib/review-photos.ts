import sharp from "sharp";
export async function prepareReviewPhotos(files: File[]) {
  if (files.length > 3) throw new Error("Please select up to 3 photos.");
  const photos: { id: string; data: string; position: number }[] = [];
  for (const [position, file] of files.entries()) {
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size === 0 || file.size > 1048576) throw new Error("Use JPG, PNG or WebP photos under 1 MB after resizing.");
    try {
      const image = sharp(Buffer.from(await file.arrayBuffer()), { limitInputPixels: 25000000, animated: false });
      const metadata = await image.metadata();
      if (!['jpeg', 'png', 'webp'].includes(metadata.format ?? '') || (metadata.pages ?? 1) > 1) throw new Error();
      const output = await image.rotate().resize(1280, 1280, { fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 78 }).toBuffer();
      if (output.length > 1048576) throw new Error();
      photos.push({ id: crypto.randomUUID(), data: output.toString('base64'), position });
    } catch { throw new Error("One of your photos could not be read. Please choose a different JPG, PNG or WebP image."); }
  }
  return photos;
}
