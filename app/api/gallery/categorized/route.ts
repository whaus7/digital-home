import { NextRequest, NextResponse } from "next/server";

// Categorized images from Hero component
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
    "/images/Wolfson-Golf.jpg",
    "/images/Bar-Theater.jpg",
    "/images/Barrington-Theater-scaled.jpg",
    "/images/Barrington-Theater3.jpg",
    "/images/Barrington-Theater-Chairs.jpg",
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

// Helper function to generate image metadata
const generateImageMetadata = (src: string, category: string) => {
  const filename =
    src
      .split("/")
      .pop()
      ?.replace(/\.[^/.]+$/, "") || "";

  // Generate title and alt text based on filename and category
  let title = "";
  let alt = "";

  if (category === "residential") {
    if (filename.includes("kitchen")) {
      title = "Luxury Kitchen Smart Home Installation";
      alt = "Modern kitchen with integrated smart home technology";
    } else if (filename.includes("bedroom")) {
      title = "Master Bedroom Smart Home Setup";
      alt = "Elegant master bedroom with smart lighting and automation";
    } else if (filename.includes("family")) {
      title = "Family Room Entertainment System";
      alt = "Comfortable family room with integrated audio and video";
    } else {
      title = "Residential Smart Home Project";
      alt = "Beautiful residential smart home installation";
    }
  } else if (category === "commercial") {
    if (filename.includes("office")) {
      title = "Commercial Office Technology";
      alt = "Professional office space with integrated technology";
    } else if (filename.includes("chicago")) {
      title = "Chicago Commercial Installation";
      alt = "Modern commercial building with smart technology";
    } else {
      title = "Commercial Technology Installation";
      alt = "Professional commercial space automation";
    }
  } else if (category === "theater") {
    if (filename.includes("theater")) {
      title = "Home Theater Installation";
      alt = "Professional home theater with premium audio and video";
    } else if (filename.includes("bar")) {
      title = "Entertainment Bar Setup";
      alt = "Luxury bar area with integrated entertainment system";
    } else {
      title = "Audio Video Theater Project";
      alt = "High-end audio and video installation";
    }
  } else if (category === "outdoor") {
    if (filename.includes("pool")) {
      title = "Outdoor Pool Entertainment";
      alt = "Outdoor pool area with integrated audio and lighting";
    } else if (filename.includes("garden")) {
      title = "Outdoor Garden Technology";
      alt = "Beautiful garden with smart outdoor systems";
    } else {
      title = "Outdoor Living Space";
      alt = "Outdoor entertainment and automation system";
    }
  } else if (category === "lighting") {
    title = "Smart Lighting Control System";
    alt = "Intelligent lighting control and automation";
  } else {
    title = "Smart Home Technology Project";
    alt = "Professional smart home and automation installation";
  }

  return {
    src,
    alt,
    title,
    category,
  };
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    let allImages: any[] = [];

    // If a specific category is requested, only return those images
    if (
      category &&
      category !== "all" &&
      categorizedImages[category as keyof typeof categorizedImages]
    ) {
      const categoryImages =
        categorizedImages[category as keyof typeof categorizedImages];
      allImages = categoryImages.map((src) =>
        generateImageMetadata(src, category)
      );
    } else {
      // Return all images categorized
      Object.entries(categorizedImages).forEach(([cat, images]) => {
        const categoryImages = images.map((src) =>
          generateImageMetadata(src, cat)
        );
        allImages.push(...categoryImages);
      });
    }

    // Calculate category counts
    const categoryCounts = {
      residential: categorizedImages.residential.length,
      commercial: categorizedImages.commercial.length,
      theater: categorizedImages.theater.length,
      outdoor: categorizedImages.outdoor.length,
      lighting: categorizedImages.lighting.length,
      general: categorizedImages.general.length,
      all: allImages.length,
    };

    return NextResponse.json({
      success: true,
      images: allImages,
      count: allImages.length,
      categories: categoryCounts,
      source: "categorized",
    });
  } catch (error) {
    console.error("Error serving categorized images:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to serve categorized images",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
