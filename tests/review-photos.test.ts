import { test } from 'node:test';
import assert from 'node:assert/strict';
import sharp from 'sharp';
import { prepareReviewPhotos } from '../src/lib/review-photos';
test('photos are resized, converted to JPEG and stripped of metadata', async () => {
  const image = await sharp({create:{width:1800,height:900,channels:3,background:'#225533'}}).png().withMetadata().toBuffer();
  const [photo] = await prepareReviewPhotos([new File([new Uint8Array(image)],'trip.png',{type:'image/png'})]);
  const metadata = await sharp(Buffer.from(photo.data,'base64')).metadata();
  assert.equal(metadata.format,'jpeg'); assert.equal(metadata.width,1280);
  assert.equal(metadata.exif,undefined); assert.equal(photo.position,0);
});
test('rejects corrupt, oversized, unsupported and excessive photos', async () => {
  const invalid = new File(['not an image'],'fake.jpg',{type:'image/jpeg'});
  await assert.rejects(prepareReviewPhotos([invalid]));
  await assert.rejects(prepareReviewPhotos([new File(['<svg/>'],'test.svg',{type:'image/svg+xml'})]));
  await assert.rejects(prepareReviewPhotos([new File([new Uint8Array(1048577)],'big.jpg',{type:'image/jpeg'})]));
  await assert.rejects(prepareReviewPhotos([invalid,invalid,invalid,invalid]));
  assert.deepEqual(await prepareReviewPhotos([]),[]);
});
