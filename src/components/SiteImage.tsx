import type { ImgHTMLAttributes } from 'react';
import manifest from '../data/image-manifest.json';

const sources = Object.fromEntries(Object.entries(manifest).flatMap(([source, entry]) => [
  [source, entry.variants], [entry.variants[entry.variants.length - 1].src, entry.variants],
]));

/** Prebuilt responsive assets avoid large originals and first-request resizing. */
export default function SiteImage({ src, sizes = '(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 420px', loading = 'lazy', decoding = 'async', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const variants = (typeof src === 'string' ? sources[src] : undefined)?.filter((image, index, all) => all.findIndex(other => other.width === image.width) === index);
  return <img {...props} src={variants ? variants[variants.length - 1].src : src}
    srcSet={variants && variants.length > 1 ? variants.map(image => `${image.src} ${image.width}w`).join(', ') : undefined}
    sizes={variants && variants.length > 1 ? sizes : undefined} loading={loading} decoding={decoding} />;
}
