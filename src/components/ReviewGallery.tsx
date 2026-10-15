"use client";
import { useRef, useState } from 'react';
import { Camera, X } from 'lucide-react';
import type { ReviewPhoto } from '../lib/review-validation';
export default function ReviewGallery({ photos = [], name }: { photos?: ReviewPhoto[]; name: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  if (!photos.length) return null;
  return <div className="my-5">
    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3"><Camera size={14} /> Memories from the journey</p>
    <div className="flex gap-2">{photos.map((photo, index) => <button key={photo.id} type="button" onClick={() => { setSelected(index); dialog.current?.showModal(); }} aria-label={`View travel photo ${index + 1} by ${name}`} className="flex-1 min-w-0 max-w-28 aspect-square overflow-hidden rounded-xl border border-neutral-200 hover:ring-2 hover:ring-primary focus-visible:ring-2 focus-visible:ring-primary"><img src={photo.url} alt={`Travel memory ${index + 1} from ${name}`} loading="lazy" className="w-full h-full object-cover transition-transform hover:scale-105" /></button>)}</div>
    <dialog ref={dialog} aria-label={`Travel memories from ${name}`} className="m-auto w-[calc(100%_-_2rem)] max-w-3xl rounded-2xl p-4 bg-white backdrop:bg-black/80" onClick={event => { if(event.target === dialog.current) dialog.current?.close(); }}>
      <div className="flex justify-between items-center mb-3"><p className="font-semibold">{name}&apos;s travel memories</p><button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Close photo" className="p-2 rounded-full hover:bg-neutral-100"><X /></button></div>
      <img loading="lazy" decoding="async" src={photos[selected].url} alt={`Travel memory ${selected + 1} from ${name}`} className="w-full max-h-[70vh] object-contain rounded-lg bg-neutral-900" />
      <div className="flex justify-center gap-2 mt-3">{photos.map((photo,index) => <button type="button" key={photo.id} onClick={() => setSelected(index)} aria-label={`Show photo ${index + 1}`} aria-pressed={selected === index} className={`w-12 h-12 rounded-lg overflow-hidden ${selected === index ? 'ring-2 ring-primary' : ''}`}><img loading="lazy" decoding="async" src={photo.url} alt="" className="w-full h-full object-cover" /></button>)}</div>
    </dialog>
  </div>;
}
