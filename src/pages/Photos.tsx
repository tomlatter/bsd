import { useEffect, useState, useRef, useCallback, lazy, Suspense } from "react";// 👇 force default import for CommonJS
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { ComponentType } from "react";

// 👇 dynamic import and extract .Gallery
const Gallery = lazy(() =>
  import("react-grid-gallery").then((mod) => ({
    default: mod.Gallery as ComponentType<any>,
  }))
);
const TOTAL_IMAGES = 260;
const BATCH_SIZE = 20;

const imageFilenames = Array.from({ length: TOTAL_IMAGES }, (_, i) => `${i + 1}.jpg`);
const imageUrls = imageFilenames.map((name) => `/photos/${name}`);

type GalleryImage = {
  src: string;
  width: number;
  height: number;
  caption?: string;
  isSelected?: boolean;
  thumbnail?: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
};

export default function MyGallery() {
  const [photos, setPhotos] = useState<GalleryImage[]>([]);
  const [index, setIndex] = useState<number>(-1);
  const [loadedCount, setLoadedCount] = useState(0);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadImageDimensions = useCallback((src: string): Promise<GalleryImage | null> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () =>
        resolve({
          src,
          thumbnail: src, // same for now
          width: img.naturalWidth,
          height: img.naturalHeight,
          thumbnailWidth: img.naturalWidth,
          thumbnailHeight: img.naturalHeight,
        });
      img.onerror = () => {
        console.warn("Could not load", src);
        resolve(null);
      };
    });
  }, []);

  const loadNextBatch = useCallback(async () => {
    const nextBatch = imageUrls.slice(loadedCount, loadedCount + BATCH_SIZE);
    const loaded = await Promise.all(nextBatch.map(loadImageDimensions));
    const validPhotos = loaded.filter((p): p is GalleryImage => p !== null);
    setPhotos((prev) => [...prev, ...validPhotos]);
    setLoadedCount((prev) => prev + BATCH_SIZE);
  }, [loadedCount, loadImageDimensions]);

  useEffect(() => {
    loadNextBatch();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && loadedCount < imageUrls.length) {
          loadNextBatch();
        }
      },
      { rootMargin: "300px" }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loadNextBatch, loadedCount]);

  return (
    <>
    <Suspense fallback={<div>Chargement de la galerie…</div>}>
      <Gallery
        images={photos}
        enableImageSelection={false}
        margin={4}
        rowHeight={300}
        onClick={(index: number, item: GalleryImage) => {
          console.log("Clicked index", index, item);
          setIndex(index);
        }}
       />
      <div ref={loaderRef} style={{ height: 1 }} />
    </Suspense><Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos.map(({ src }) => ({ src }))} />
        </>
  );
}
