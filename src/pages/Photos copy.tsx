import { useEffect, useState, useRef, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const TOTAL_IMAGES = 260;
const BATCH_SIZE = 20;

const imageFilenames = Array.from({ length: TOTAL_IMAGES }, (_, i) => `${i + 1}.jpg`);
const imageUrls = imageFilenames.map((name) => `/photos/${name}`);

type Photo = { src: string; width: number; height: number };

function loadImageDimensions(src: string): Promise<Photo | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () =>
      resolve({ src, width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => {
      console.warn("Could not load", src);
      resolve(null); // don't reject to avoid stopping all loading
    };
  });
}

export default function MyGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [index, setIndex] = useState<number>(-1);
  const [loadedCount, setLoadedCount] = useState(0);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadNextBatch = useCallback(async () => {
    const nextBatch = imageUrls.slice(loadedCount, loadedCount + BATCH_SIZE);
    const loaded = await Promise.all(nextBatch.map(loadImageDimensions));
    const validPhotos = loaded.filter((p): p is Photo => p !== null);
    setPhotos((prev) => [...prev, ...validPhotos]);
    setLoadedCount((prev) => prev + BATCH_SIZE);
  }, [loadedCount]);

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
      <Gallery
        photos={photos}
        direction="column"
        margin={4}
        onClick={(_, { index }) => setIndex(index)}
      />
      <div ref={loaderRef} style={{ height: 1 }} />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
      />
    </>
  );
}
