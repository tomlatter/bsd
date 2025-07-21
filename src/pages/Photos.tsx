import { useEffect, useState, useRef, useCallback, lazy, Suspense } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { ComponentType } from "react";
import { Helmet } from 'react-helmet-async';

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
  const [loading, setLoading] = useState(false);
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
          thumbnail: src,
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
    if (loading) return;
    setLoading(true);

    const nextBatch = imageUrls.slice(loadedCount, loadedCount + BATCH_SIZE);
    const loaded = await Promise.all(nextBatch.map(loadImageDimensions));
    const validPhotos = loaded.filter((p): p is GalleryImage => p !== null);

    setPhotos((prev) => [...prev, ...validPhotos]);
    setLoadedCount((prev) => prev + BATCH_SIZE);
    setLoading(false);
  }, [loadedCount, loading, loadImageDimensions]);

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
     <Helmet>
        <title>BSD Officiel | Photos</title>
        <meta name="description" content="Une discipline martiale combinant 
          Bâton de Combat et Self-Défense. Enseigné à Toulouse. Plus de 40 ans de souvenirs." />
      </Helmet>
      <Suspense fallback={<div>Chargement de la galerie…</div>}>
        <Gallery
          images={photos}
          enableImageSelection={false}
          margin={4}
          rowHeight={300}
          onClick={(index: number) => {
            setIndex(index);
          }}
        />
        {/* Placeholders */}
        {loading && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "10px" }}>
            {Array.from({ length: BATCH_SIZE }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: "calc(20% - 4px)",
                  height: "300px",
                  background: "#e0e0e0",
                  borderRadius: "4px",
                  animation: "pulse 1.5s infinite",
                }}
              />
            ))}
          </div>
        )}
        <div ref={loaderRef} style={{ height: 1 }} />
      </Suspense>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos.map(({ src }) => ({ src }))}
      />

      {/* Simple CSS for pulse animation */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </>
  );
}
