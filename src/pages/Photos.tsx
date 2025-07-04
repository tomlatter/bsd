import { useEffect, useState, useRef, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const TOTAL_IMAGES = 260;
const BATCH_SIZE = 20;

const imageFilenames = Array.from({ length: TOTAL_IMAGES }, (_, i) => `${i + 1}.jpg`);
const imageUrls = imageFilenames.map((name) => `/photos/${name}`);

function loadImageDimensions(src: string): Promise<{ src: string; width: number; height: number }> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () =>
      resolve({ src, width: img.naturalWidth, height: img.naturalHeight });
  });
}

export default function MyGallery() {
  const [photos, setPhotos] = useState<{ src: string; width: number; height: number }[]>([]);
  const [index, setIndex] = useState<number>(-1);
  const [loadedCount, setLoadedCount] = useState(0);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadNextBatch = useCallback(async () => {
    const nextBatch = imageUrls.slice(loadedCount, loadedCount + BATCH_SIZE);
    const loaded = await Promise.all(nextBatch.map((src) => loadImageDimensions(src)));
    setPhotos((prev) => [...prev, ...loaded]);
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
