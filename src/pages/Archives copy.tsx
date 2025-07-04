import Gallery from "react-photo-gallery";
import { useEffect, useState } from "react";

const imageFilenames = Array.from({ length: 260 }, (_, i) => `${i + 1}.jpg`);
const imageUrls = imageFilenames.map((name) => `/photos/${name}`);

function loadImageDimensions(src: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
  });
}

export default function MyGallery() {
  const [photos, setPhotos] = useState<{ src: string; width: number; height: number }[]>([]);

  useEffect(() => {
    async function preparePhotos() {
      const loadedPhotos = await Promise.all(
        imageUrls.map(async (src) => {
          const { width, height } = await loadImageDimensions(src);
          return { src, width, height };
        })
      );
      setPhotos(loadedPhotos);
    }
    preparePhotos();
  }, []);

  return (
    <Gallery
      photos={photos}
      direction="column" // 🧱 column layout
      margin={4}
    />
  );
}
