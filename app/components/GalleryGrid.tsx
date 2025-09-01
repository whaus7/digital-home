"use client";

import { useState, useEffect, useCallback } from "react";
import { Image as LucideImage, Loader2, AlertCircle } from "lucide-react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

interface GalleryGridProps {
  category?: string;
  limit?: number;
  showLoadMore?: boolean;
}

export default function GalleryGrid({
  category,
  limit = 12,
  showLoadMore = false,
}: GalleryGridProps) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [hasMore, setHasMore] = useState(false);
  const [currentLimit, setCurrentLimit] = useState(limit);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchGalleryImages();
  }, [category, currentLimit]);

  // Reset limit when category changes
  useEffect(() => {
    setCurrentLimit(limit);
    setLoadedImages(new Set()); // Reset loaded images when category changes
  }, [category, limit]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNextImage();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPreviousImage();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, selectedImageIndex, images]);

  const fetchGalleryImages = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Use the new categorized API with category parameter
      const apiUrl =
        category && category !== "all"
          ? `/api/gallery/categorized?category=${category}`
          : "/api/gallery/categorized";

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.success) {
        // Apply limit
        const limitedImages = data.images.slice(0, currentLimit);
        setImages(limitedImages);
        setHasMore(data.images.length > currentLimit);
      } else {
        setError(data.error || "Failed to load gallery images");
      }
    } catch (err) {
      setError("Failed to fetch gallery images");
      console.error("Error fetching gallery images:", err);
    } finally {
      setLoading(false);
    }
  }, [category, currentLimit]);

  const handleImageClick = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedImageIndex(0);
  };

  const goToNextImage = useCallback(() => {
    const nextIndex = (selectedImageIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setSelectedImageIndex(nextIndex);
  }, [selectedImageIndex, images]);

  const goToPreviousImage = useCallback(() => {
    const prevIndex =
      selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1;
    setSelectedImage(images[prevIndex]);
    setSelectedImageIndex(prevIndex);
  }, [selectedImageIndex, images]);

  const loadMore = () => {
    setCurrentLimit((prev) => prev + limit);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center space-x-2">
          <Loader2 className="w-6 h-6 animate-spin text-purple-600" />
          <span className="text-gray-600">Loading gallery images...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchGalleryImages}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-12">
        <LucideImage className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">No images found for this category.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 auto-rows-fr">
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="group relative bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => handleImageClick(image, index)}
          >
            <div className="aspect-square bg-gray-100 relative overflow-hidden min-h-[200px]">
              <Image
                src={image.src}
                alt={image.alt || "Gallery image"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                onLoad={() => {
                  setLoadedImages((prev) => new Set(prev).add(image.src));
                }}
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.nextElementSibling?.classList.remove("hidden");
                }}
              />

              {/* Fallback placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 hidden">
                <div className="text-center">
                  <LucideImage className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-500 font-medium">
                    Image Preview
                  </span>
                  <p className="text-xs text-gray-400 mt-1">
                    {image.title || image.alt}
                  </p>
                </div>
              </div>

              {/* Error placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 hidden">
                <div className="text-center">
                  <LucideImage className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-500">
                    Image unavailable
                  </span>
                </div>
              </div>

              {/* Loading indicator */}
              {!loadedImages.has(image.src) && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-gray-300 border-t-purple-600 rounded-full animate-spin mx-auto mb-2"></div>
                    <span className="text-xs text-gray-500">Loading...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                {image.title || image.alt || "Project Image"}
              </h3>
              {image.category && (
                <span className="inline-block px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">
                  {image.category}
                </span>
              )}
            </div>

            {/* Hover overlay with view icon - positioned above image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white rounded-full p-2 shadow-lg">
                  <LucideImage className="w-5 h-5 text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {showLoadMore && hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            Load More Images
          </button>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPreviousImage}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={goToNextImage}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Main Image */}
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt || "Gallery image"}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-black bg-opacity-50 text-white p-2 sm:p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm sm:text-base">
                  {selectedImage.title || selectedImage.alt || "Project Image"}
                </h3>
                {images.length > 1 && (
                  <span className="text-xs sm:text-sm text-gray-300">
                    {selectedImageIndex + 1} of {images.length}
                  </span>
                )}
              </div>
              {selectedImage.category && (
                <span className="inline-block px-2 py-1 text-xs bg-purple-600 text-white rounded-full">
                  {selectedImage.category}
                </span>
              )}
            </div>

            {/* Navigation Hint */}
            {images.length > 1 && (
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black bg-opacity-50 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">
                <span className="hidden sm:inline">Use ← → keys or </span>Click
                arrows to navigate
              </div>
            )}

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="absolute bottom-16 sm:bottom-20 left-2 sm:left-4 right-2 sm:right-4 overflow-x-auto">
                <div className="flex space-x-2 pb-2">
                  {images.map((img, index) => (
                    <button
                      key={`thumb-${index}`}
                      onClick={() => {
                        setSelectedImage(img);
                        setSelectedImageIndex(index);
                      }}
                      className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === selectedImageIndex
                          ? "border-purple-500 ring-2 ring-purple-300"
                          : "border-gray-300 hover:border-purple-400"
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt || "Thumbnail"}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
