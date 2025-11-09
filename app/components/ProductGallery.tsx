'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  video?: string;
  alt: string;
  selectedColor?: string;
  colorImageMap?: { [key: string]: string };
}

export default function ProductGallery({
  images,
  video,
  alt,
  selectedColor,
  colorImageMap
}: ProductGalleryProps) {
  // Combine video and images for the gallery
  const allMedia = video ? [video, ...images] : images;
  // Initialize with video (index 0) if it exists, otherwise start with first image
  const [selectedImage, setSelectedImage] = useState(video ? 0 : 0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const isVideoSelected = video && selectedImage === 0;
  const totalImageCount = video ? Math.max(0, allMedia.length - 1) : allMedia.length;
  const currentImagePosition = video ? Math.max(1, selectedImage) : selectedImage + 1;
  const [previousColor, setPreviousColor] = useState<string | undefined>(selectedColor);

  // Update selected image when color changes (but not on initial render)
  useEffect(() => {
    // Only switch image if color actually changed (not on initial mount)
    if (selectedColor && selectedColor !== previousColor && colorImageMap && colorImageMap[selectedColor]) {
      const colorImagePath = colorImageMap[selectedColor];
      const imageIndex = images.findIndex(img => img.includes(colorImagePath));
      if (imageIndex !== -1) {
        setSelectedImage(imageIndex + (video ? 1 : 0));
      }
      setPreviousColor(selectedColor);
    } else if (selectedColor && !previousColor) {
      // On initial mount, just set the previous color without changing image
      setPreviousColor(selectedColor);
    }
  }, [selectedColor, colorImageMap, images, video, previousColor]);

  const handleThumbnailClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Main Media Display */}
      <div className="flex-1">
        {/* Use consistent aspect-square for all media to prevent layout shift */}
        <div className="aspect-square rounded-xl overflow-hidden relative group">
          {isVideoSelected && video ? (
            <div className="relative w-full h-full">
              <video
                className="w-full h-full object-contain"
                controls={false}
                autoPlay
                muted
                loop
                playsInline
                poster={images[0]} // Use first image as poster
              >
                <source src={video} type="video/mp4" />
                <source src={video} type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="relative w-full h-full">
              {imageErrors.has(selectedImage - (video ? 1 : 0)) ? (
                // Fallback for unsupported formats
                <div className="w-full h-full flex items-center justify-center bg-gray-700" role="status" aria-live="polite">
                  <div className="text-center text-gray-400">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Image format not supported</p>
                    <p className="text-xs mt-1">Please convert HEIC to JPG/PNG</p>
                  </div>
                </div>
              ) : (
                <Image
                  src={images[selectedImage - (video ? 1 : 0)]}
                  alt={`${alt} - Image ${currentImagePosition} of ${totalImageCount}`}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={() => handleImageError(selectedImage - (video ? 1 : 0))}
                  unoptimized
                  key={images[selectedImage - (video ? 1 : 0)]}
                />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Gallery - Now below the main image */}
      <div className="grid grid-cols-4 gap-2 justify-items-center">
        {allMedia.map((media, index) => {
          const isVideo = video && index === 0;
          const isSelected = selectedImage === index;
          const imageIndex = index - (video ? 1 : 0);
          const hasError = imageErrors.has(imageIndex);
          const totalImages = video ? allMedia.length - 1 : allMedia.length;
          const imagePosition = video ? index : index + 1;

          return (
            <button
              key={index}
              type="button"
              onClick={() => handleThumbnailClick(index)}
              className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                isSelected
                  ? 'border-accent ring-2 ring-accent/50'
                  : 'border-gray-600 hover:border-gray-400'
              }`}
              aria-pressed={isSelected}
              aria-label={
                isVideo
                  ? `View product video for ${alt}`
                  : `View image ${imagePosition} of ${totalImages} for ${alt}`
              }
            >
              {isVideo ? (
                <div className="relative w-full h-full bg-gray-700 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              ) : hasError ? (
                <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              ) : (
                <Image
                  src={media}
                  alt={`${alt} thumbnail ${index}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                  onError={() => handleImageError(imageIndex)}
                  unoptimized
                  key={media}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}