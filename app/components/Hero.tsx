"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  showCta?: boolean;
}

// Categorized hero images based on filename analysis
const categorizedImages = {
  residential: [
    "/images/bar-football.jpg",
    "/images/kitchen-FINAL-FOR-WEB-goldenne-ohel-long-grove-aug2013_J4.jpg",
    "/images/kitchen_FINAL-J4A4178-goldenne-sheehan-deerfield-nov-2015-copy.jpg",
    "/images/bedroom-FINAL-FOR-WEB-goldenne-ohel-long-grove-aug2013_J4A1.jpg",
    "/images/dht-pater-master-bedroom.jpg",
    "/images/dht-pater-kitchen-dining.jpg",
    "/images/dht-pater-family-room.jpg",
    "/images/Highland-Park-MasterBed.jpg",
    "/images/goldenne-shepp-kitcen-FINALP-webG_Palatine-60-copy.jpg",
    "/images/goldenne-nu-kitchen-for-web-perspective2-shep-palatine-copy-2.jpg",
    "/images/facade-final_MG_4335-goldenne-sheehan-deerfield-nov-2015.jpg",
    "/images/A-feast-for-the-eyes-and-ears-Kitchen.jpg",
    "/images/A-feast-for-the-eyes-and-ears-Bedroom.jpg",
    "/images/A-feast-for-the-eyes-and-ears-Living-Room-Bar.jpg",
    "/images/A-feast-for-the-eyes-ad-ears-Wine-Cellar.jpg",
  ],
  commercial: [
    "/images/confab-FINAL-NEUTRAL-INSET-_J4A4060-goldenne-The-Garlands-Barrington-2014-copy.jpg",
    "/images/goldenne-shep-office-NYSE-FINAL-web-copy.jpg",
    "/images/Wolfson-Office.jpg",

    "/images/Chicago-White1-scaled.jpg",
    "/images/Chicago-White2-scaled.jpg",
    "/images/Chicago-White3-scaled.jpg",
    "/images/Chicago-White4-scaled.jpg",
  ],
  theater: [
    "/images/Barrington-Theater-Chairs.jpg",
    "/images/Wolfson-Golf.jpg",
    "/images/Bar-Theater.jpg",
    "/images/Barrington-Theater-scaled.jpg",
    "/images/Barrington-Theater3.jpg",
    "/images/theater-FINAL-gone-with-_J4A3977-goldenne-The-Garlands-Barrington-2014-copy.jpg",
    "/images/theater-Cln-FLT-for-print-goldene-roselle-inset-_MG_6763-copy-3.jpg",
    "/images/theater-for-print-masterremote_O0Q9753-copy_1-1.jpg",
    "/images/stage-curtain-fix-WHITE-XMAS_J4A3895-goldenne-The-Garlands-Barrington-2014-copy.jpg",
    "/images/MARX-theater-WEB-FINAL-360-goldenne-marx-long-grove-2014_J4A9632-copy.jpg",
    "/images/KRUGER-theater-FINAL-for-web-goldenne-kruger-chicago-2014_J4A0155.jpg",
    "/images/goldenne-shep-theater-FINALweb.jpg",
    "/images/goldenne-shep-theagter2-FINAL-web.jpg",
    "/images/Wittert-Theater1.jpg",
    "/images/Wittert-Theater2.jpg",
    "/images/Wittert-Theater3-scaled.jpg",
    "/images/Wolfson-Theater.jpg",
  ],
  outdoor: [
    "/images/Nelson-Pool.jpg",
    "/images/Nelson-Pool-SunBright.jpg",
    "/images/Nelson-Pool-Slide.jpg",
    "/images/dht-pater-pool.jpg",
    "/images/dht-pater-pond.jpg",
    "/images/Bar-Pool.jpg",
    "/images/Bar-Garden.jpg",
    "/images/Bar-Outdoor-Spkr.jpg",
    "/images/Bar-Hammock.jpg",
    "/images/Winshall-Outside.jpg",
    "/images/LZ-Front-Facade.jpg",
    "/images/KRUGER-ext-facade-FINAL-TWEAKED-goldenne-kruger-chicago-2014_J4A0280-Recovered-copy.jpg",
  ],
  lighting: [
    "/images/Highland-Park-Sun-Room-Light.jpg",
    "/images/Highland-Park-Sun-Room-no-light.jpg",
    "/images/LZ-Bath-Touchpanel.jpg",
  ],
  partners: ["/images/LZ-Front-Facade.jpg"],
  contact: ["/images/Highland-Park-MasterBed.jpg"],
  general: [
    "/images/bar-cln-flt-for-print-goldene-roselle-inset-_MG_6806-copy.jpg",
    "/images/bar-football.jpg",
    "/images/Bar-Gym.jpg",
    "/images/goldenne-shep-gym-FINAL-web.jpg",
    "/images/KRUGER-gym-BETTER-FINAL-WEB-goldenne-kruger-chicago-2014_J4A0069-copy.jpg",
    "/images/Lake-Geneva-Golf-Simulator1.jpg",
    "/images/golf-FINAL-_J4A4121-goldenne-sheehan-deerfield-nov-2015.jpg",
    "/images/Wolfson-Golf.jpg",
    "/images/billiards-cln_flt-for-print-goldene-roselle-_MG_6791-copy.jpg",
    "/images/Wolfson-Family.jpg",
    "/images/Wolfson-Lounge.jpg",
    "/images/Winshall-Family-Room-scaled.jpg",
    "/images/LZ-Living-Room.jpg",
    "/images/LZ-Island.jpg",
    "/images/LZ-Basement.jpg",
    "/images/Lake-Geneva-Family-Room.jpg",
    "/images/Lake-Geneva-Family-Room1.jpg",
    "/images/Lake-Geneva-Kitchen.jpg",
    "/images/Lake-Geneva-Kitchen1.jpg",
    "/images/Lake-Geneva-Lake-Room.jpg",
    "/images/Lake-Geneva-Lake-Room1.jpg",
    "/images/Lake-Geneva-Spin-Room1.jpg",
    "/images/Lake-Geneva-Cable-Room3.jpg",
    "/images/KRUGER-fam-nu-FINAL-TWEAKED-goldenne-kruger-chicago-2014_J4A0226-copy-3.jpg",
    "/images/KRUGER-jacc-goldennejacc-FINAL-TWEAKED-kruger-chicago-2014_J4A0242-copy.jpg",
    "/images/MARX-bar-360-nu-soccer-goldenne-marx-long-frove-2014_J4A9596-MARX-copy.jpg",
    "/images/bar-grill-FINAL-CHEF-_J4A3959-goldenne-The-Garlands-Barrington-2014-copy.jpg",
    "/images/chairs_-final-for-print-MG_8649-1_1-scaled.jpg",
    "/images/Carrato-Large.jpg",
    "/images/sound-panel-for-print-_MG_8669-copy_1.jpg",
  ],
};

// Function to get appropriate images based on pathname
const getImagesForPath = (path: string): string[] => {
  console.log("getImagesForPath called with path:", path);

  if (path.includes("/residential")) {
    console.log(
      "Matched residential path, returning residential + general images"
    );
    return [...categorizedImages.residential, ...categorizedImages.general];
  } else if (path.includes("/commercial")) {
    console.log(
      "Matched commercial path, returning commercial + general images"
    );
    return [...categorizedImages.commercial, ...categorizedImages.general];
  } else if (path.includes("/gallery")) {
    console.log(
      "Matched gallery path, returning theater + residential + commercial + outdoor images"
    );
    return [
      ...categorizedImages.theater,
      ...categorizedImages.residential,
      ...categorizedImages.commercial,
      ...categorizedImages.outdoor,
    ];
  } else if (path.includes("/partners")) {
    console.log("Matched partners path, returning partners + general images");
    return [...categorizedImages.partners, ...categorizedImages.general];
  } else if (path.includes("/contact")) {
    console.log("Matched contact path, returning contact + general images");
    return [...categorizedImages.contact, ...categorizedImages.general];
  } else if (path.includes("/services/")) {
    console.log("Matched services path");
    // For service pages, include relevant categories
    if (path.includes("audio-video") || path.includes("theater")) {
      console.log(
        "Matched audio-video/theater service, returning theater + general images"
      );
      return [...categorizedImages.theater, ...categorizedImages.general];
    } else if (path.includes("lighting") || path.includes("shades")) {
      console.log(
        "Matched lighting/shades service, returning lighting + residential images"
      );
      return [...categorizedImages.lighting, ...categorizedImages.residential];
    } else if (path.includes("outdoor")) {
      console.log(
        "Matched outdoor service, returning outdoor + general images"
      );
      return [...categorizedImages.outdoor, ...categorizedImages.general];
    } else {
      console.log(
        "Matched other service, returning residential + commercial + general images"
      );
      return [
        ...categorizedImages.residential,
        ...categorizedImages.commercial,
        ...categorizedImages.general,
      ];
    }
  } else {
    console.log(
      "No specific path match, returning default mix of all categories"
    );
    // Default: mix of all categories
    return [
      ...categorizedImages.residential,
      ...categorizedImages.commercial,
      ...categorizedImages.theater,
      ...categorizedImages.outdoor,
      ...categorizedImages.general,
    ];
  }
};

// Function to select random pan direction
const selectRandomDirection = () => {
  // Start from center (0, 0) and use more dramatic movements
  // Increased values for more noticeable panning effect
  const directions = [
    { x: 0.08, y: 0.04 }, // Right, down
    { x: -0.08, y: 0.04 }, // Left, down
    { x: 0.04, y: -0.08 }, // Right, up
    { x: -0.04, y: -0.08 }, // Left, up
    { x: 0.06, y: 0.06 }, // Diagonal right-down
    { x: -0.06, y: 0.06 }, // Diagonal left-down
    { x: 0.06, y: -0.06 }, // Diagonal right-up
    { x: -0.06, y: -0.06 }, // Diagonal left-up
  ];
  return directions[Math.floor(Math.random() * directions.length)];
};

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  showCta = true,
}: HeroProps) {
  const pathname = usePathname();

  // Get appropriate images for the current path - memoized to prevent recreation on every render
  const availableImages = useMemo(() => getImagesForPath(pathname), [pathname]);

  // Debug logging
  console.log("Hero component - pathname:", pathname);
  console.log(
    "Hero component - availableImages length:",
    availableImages.length
  );
  console.log(
    "Hero component - first few images:",
    availableImages.slice(0, 3)
  );

  // Function to get image index based on pathname - always use first index (0) for initial image
  const getImageIndexFromPath = (path: string, imageArray: string[]) => {
    // Safety check for empty array
    if (!imageArray || imageArray.length === 0) {
      console.log("getImageIndexFromPath: imageArray is empty, returning 0");
      return 0;
    }

    // For category-specific pages, prioritize images from that category
    if (path.includes("/residential")) {
      console.log(
        `getImageIndexFromPath: residential path, using residential images, returning first index (0)`
      );
      return 0;
    } else if (path.includes("/commercial")) {
      console.log(
        `getImageIndexFromPath: commercial path, using commercial images, returning first index (0)`
      );
      return 0;
    } else if (path.includes("/gallery")) {
      console.log(
        `getImageIndexFromPath: gallery path, using gallery-specific images, returning first index (0)`
      );
      return 0;
    } else if (path.includes("/partners")) {
      console.log(
        `getImageIndexFromPath: partners path, using partners images, returning first index (0)`
      );
      return 0;
    } else if (path.includes("/contact")) {
      console.log(
        `getImageIndexFromPath: contact path, using contact images, returning first index (0)`
      );
      return 0;
    } else if (path.includes("/services/")) {
      // For service pages, use appropriate category
      if (path.includes("audio-video") || path.includes("theater")) {
        console.log(
          `getImageIndexFromPath: theater service path, using theater images, returning first index (0)`
        );
        return 0;
      } else if (path.includes("lighting") || path.includes("shades")) {
        console.log(
          `getImageIndexFromPath: lighting service path, using lighting images, returning first index (0)`
        );
        return 0;
      } else if (path.includes("outdoor")) {
        console.log(
          `getImageIndexFromPath: outdoor service path, using outdoor images, returning first index (0)`
        );
        return 0;
      }
    }

    // Default: use general category (first index)
    console.log(
      `getImageIndexFromPath: no specific category match, defaulting to general category, returning first index (0)`
    );
    return 0;
  };

  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  ); // Start with null to prevent initial render
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [panDirection, setPanDirection] = useState({ x: 0, y: 0 });
  const [currentPanPosition, setCurrentPanPosition] = useState({ x: 0, y: 0 });
  const [nextImageIndex, setNextImageIndex] = useState<number | null>(null);
  const currentImageIndexRef = useRef(0); // Ref to track current index for interval

  // Handle pathname changes and initial setup
  useEffect(() => {
    if (availableImages.length > 0) {
      const newImageIndex = getImageIndexFromPath(pathname, availableImages);
      setIsTransitioning(true);
      setNextImageIndex(newImageIndex);

      setTimeout(() => {
        setCurrentImageIndex(newImageIndex);
        currentImageIndexRef.current = newImageIndex; // Update ref
        setNextImageIndex(null);
        // Start from center and gradually move to new direction
        setCurrentPanPosition({ x: 0, y: 0 });
        setPanDirection(selectRandomDirection());
        setIsTransitioning(false);

        // Gradually move to the target position over 10 seconds
        setTimeout(() => {
          setCurrentPanPosition(selectRandomDirection());
        }, 500);
      }, 300);
    }
  }, [pathname, availableImages]); // Only depend on pathname and availableImages

  // Set up interval for image transitions (only when staying on same page)
  useEffect(() => {
    // Only set up interval if we have images and we're not transitioning
    if (availableImages.length > 0) {
      const interval = setInterval(() => {
        setIsTransitioning(true);

        // After fade out, change image and fade in
        setTimeout(() => {
          // Get the appropriate category images for the current path
          let categoryImages: string[] = [];
          if (pathname.includes("/residential")) {
            categoryImages = categorizedImages.residential;
          } else if (pathname.includes("/commercial")) {
            categoryImages = categorizedImages.commercial;
          } else if (pathname.includes("/gallery")) {
            categoryImages = [
              ...categorizedImages.theater,
              ...categorizedImages.residential,
              ...categorizedImages.commercial,
              ...categorizedImages.outdoor,
            ];
          } else if (pathname.includes("/services/")) {
            if (
              pathname.includes("audio-video") ||
              pathname.includes("theater")
            ) {
              categoryImages = categorizedImages.theater;
            } else if (
              pathname.includes("lighting") ||
              pathname.includes("shades")
            ) {
              categoryImages = categorizedImages.lighting;
            } else if (pathname.includes("outdoor")) {
              categoryImages = categorizedImages.outdoor;
            } else {
              categoryImages = [
                ...categorizedImages.residential,
                ...categorizedImages.commercial,
              ];
            }
          } else {
            categoryImages = availableImages; // Use all images for default
          }

          // Find the current image in the category images array
          const currentImage = availableImages[currentImageIndexRef.current];
          const currentCategoryIndex = categoryImages.indexOf(currentImage);

          // Get next index within the category
          const nextCategoryIndex =
            (currentCategoryIndex + 1) % categoryImages.length;
          const nextImage = categoryImages[nextCategoryIndex];

          // Find the index of the next image in the full availableImages array
          const nextIndex = availableImages.indexOf(nextImage);

          setNextImageIndex(nextIndex);
          setCurrentImageIndex(nextIndex);
          currentImageIndexRef.current = nextIndex; // Update ref
          setNextImageIndex(null);
          // Start from center and gradually move to new direction
          setCurrentPanPosition({ x: 0, y: 0 });
          setPanDirection(selectRandomDirection());
          setIsTransitioning(false);

          // Gradually move to the target position over 10 seconds
          setTimeout(() => {
            setCurrentPanPosition(selectRandomDirection());
          }, 500);
        }, 500); // Half second fade out
      }, 10000); // 15 seconds per image

      return () => clearInterval(interval);
    }
  }, [pathname, availableImages]); // Depend on pathname and availableImages

  const selectedImage =
    currentImageIndex !== null ? availableImages[currentImageIndex] : null;

  // Preload next image to prevent visual glitches
  useEffect(() => {
    if (nextImageIndex !== null && availableImages[nextImageIndex]) {
      const img = new Image();
      img.src = availableImages[nextImageIndex];
    }
  }, [nextImageIndex, availableImages]);

  // Debug logging for selected image
  console.log("Hero component - currentImageIndex:", currentImageIndex);
  console.log("Hero component - selectedImage:", selectedImage);

  // Don't render until we have a valid image
  if (currentImageIndex === null || selectedImage === null) {
    return (
      <section className="relative h-140 overflow-hidden">
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      </section>
    );
  }

  return (
    <section className="relative h-[644px] lg:h-140 overflow-hidden">
      {/* Mobile Layout (Original) */}
      <div className="lg:hidden">
        {/* Background Image with Animation */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${selectedImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transformOrigin: "center",
            transform: `scale(1.25) translate(${currentPanPosition.x * 69}px, ${
              currentPanPosition.y * 69
            }px)`,
            transition: "transform 9s ease-in-out",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* Content Box */}
          <div className="bg-black/55 backdrop-blur-sm shadow-xl p-4 md:p-6 max-w-xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-gray-200 mb-4 leading-relaxed">
              {subtitle}
            </p>
            {showCta && ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
              >
                {ctaText}
                <ArrowRight size={16} className="ml-2" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Layout (Split) */}
      <div className="hidden lg:flex h-full">
        {/* Right Section - Content Area (40%) */}
        <div className="w-[40%] relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 flex items-center justify-center">
          {/* Content Container with max width */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex justify-center">
              {/* Content Box */}
              <div className="p-8 max-w-lg">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {title}
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {subtitle}
                </p>
                {showCta && ctaText && ctaLink && (
                  <Link
                    href={ctaLink}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                  >
                    {ctaText}
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Angled Border Separator */}
        <div className="w-0 relative z-10">
          <div className="w-20 h-full bg-white transform skew-x-8 -translate-x-10 shadow-lg"></div>
        </div>

        {/* Left Section - Panning Image (60%) */}
        <div className="w-[60%] relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            style={{
              backgroundImage: `url(${selectedImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transformOrigin: "center",
              transform: `scale(1.25) translate(${
                currentPanPosition.x * 69
              }px, ${currentPanPosition.y * 69}px)`,
              transition: "transform 9s ease-in-out",
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
