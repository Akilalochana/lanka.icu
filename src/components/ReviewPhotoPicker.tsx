"use client";
import { useState } from 'react';
import { Camera, X, ImagePlus } from 'lucide-react';
export interface SelectedPhoto { file: File; preview: string }
export default function ReviewPhotoPicker({ photos, onChange, disabled, onBusy }: { photos: SelectedPhoto[]; onChange: (photos: SelectedPhoto[]) => void; disabled: boolean; onBusy: (busy: boolean) => void }) {
  const [error,setError] = useState('');
  const [busy,setBusy] = useState(false);
  async function select(files: File[]) {
    setError('');
    if(files.length + photos.length > 3) { setError('You can add up to 3 photos. Remove one to choose another.'); return; }
    setBusy(true); onBusy(true);
    try {
      const added: SelectedPhoto[] = [];
      for(const file of files) {
        if(!['image/jpeg','image/png','image/webp'].includes(file.type) || file.size > 10 * 1024 * 1024) throw new Error('Please choose JPG, PNG or WebP photos up to 10 MB each.');
        const bitmap = await createImageBitmap(file);
        try {
          const scale = Math.min(1, 1280 / Math.max(bitmap.width,bitmap.height));
          const canvas = document.createElement('canvas'); canvas.width = Math.max(1,Math.round(bitmap.width*scale)); canvas.height = Math.max(1,Math.round(bitmap.height*scale));
          const context = canvas.getContext('2d'); if(!context) throw new Error('Photo previews are unavailable in this browser.');
          context.fillStyle = '#fff'; context.fillRect(0,0,canvas.width,canvas.height); context.drawImage(bitmap,0,0,canvas.width,canvas.height);
          const preview = canvas.toDataURL('image/jpeg',0.78);
          const blob = await (await fetch(preview)).blob();
          if(blob.size > 1048576) throw new Error('This photo is too detailed. Please choose a smaller version.');
          added.push({file:new File([blob],'travel-memory.jpg',{type:'image/jpeg'}),preview});
        } finally { bitmap.close(); }
      }
      onChange([...photos,...added]);
    } catch(error) { setError(error instanceof Error ? error.message : 'Unable to read this photo. Please try another image.'); }
    finally { setBusy(false); onBusy(false); }
  }
  return <div className="mb-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 sm:p-5">
    <div className="flex items-center gap-3 mb-2"><span className="p-2 rounded-xl bg-white text-primary"><Camera size={22}/></span><div><h3 className="font-semibold">Your journey in pictures</h3><p className="text-xs text-neutral-500">Optional · {photos.length}/3 memories added</p></div></div>
    <p id="photo-help" className="text-sm text-neutral-600 mb-4">A beautiful view, a happy moment, a memory to keep. Share up to 3 photos with your review.</p>
    <label className={`flex flex-col items-center gap-2 rounded-xl border-2 border-dashed border-primary/30 bg-white px-4 py-6 text-center ${disabled || busy || photos.length === 3 ? 'opacity-50' : 'cursor-pointer hover:bg-primary/5'} focus-within:ring-2 focus-within:ring-primary`}>
      <ImagePlus className="text-primary" size={26}/><span className="font-medium text-sm">{busy ? 'Preparing your photos...' : 'Choose travel photos'}</span><span className="text-xs text-neutral-500">JPG, PNG or WebP · up to 10 MB each</span>
      <input type="file" multiple accept="image/jpeg,image/png,image/webp" aria-label="Choose travel photos" aria-describedby="photo-help" disabled={disabled || busy || photos.length === 3} className="sr-only" onChange={event => { const files = Array.from(event.target.files ?? []); event.target.value = ''; void select(files); }}/>
    </label>
    {error && <p role="alert" className="text-sm text-error mt-3">{error}</p>}
    {photos.length > 0 && <div className="grid grid-cols-3 gap-3 mt-4">{photos.map((photo,index) => <div key={index} className="relative"><img src={photo.preview} alt={`Selected travel photo ${index+1}`} className="w-full aspect-square object-cover rounded-xl"/><button type="button" disabled={disabled || busy} onClick={() => onChange(photos.filter((_,i) => i !== index))} aria-label={`Remove photo ${index+1}`} className="absolute top-1 right-1 rounded-full p-1.5 bg-white shadow text-neutral-800"><X size={16}/></button></div>)}</div>}
    <p className="text-xs text-neutral-500 mt-3">Your photos will be visible publicly alongside your review.</p>
  </div>;
}
