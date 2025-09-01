import { NextResponse } from "next/server";

export async function GET() {
  // Sample gallery images as fallback
  const fallbackImages = [
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      alt: "Smart Home Automation",
      title: "Luxury Smart Home Installation",
      category: "residential",
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      alt: "Home Theater System",
      title: "Professional Home Theater",
      category: "audio-video",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      alt: "Smart Lighting Control",
      title: "Intelligent Lighting System",
      category: "lighting",
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      alt: "Security Camera System",
      title: "Comprehensive Security Installation",
      category: "security",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      alt: "Commercial Automation",
      title: "Office Building Technology",
      category: "commercial",
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      alt: "Outdoor Entertainment",
      title: "Outdoor Living Space",
      category: "residential",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      alt: "Conference Room AV",
      title: "Commercial AV Installation",
      category: "commercial",
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      alt: "Motorized Shades",
      title: "Smart Shade System",
      category: "lighting",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      alt: "Whole Home Audio",
      title: "Multi-Room Audio System",
      category: "audio-video",
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      alt: "Access Control System",
      title: "Smart Access Control",
      category: "security",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      alt: "Kitchen Technology",
      title: "Smart Kitchen Integration",
      category: "residential",
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      alt: "Retail Technology",
      title: "Retail Space Automation",
      category: "commercial",
    },
  ];

  return NextResponse.json({
    success: true,
    images: fallbackImages,
    count: fallbackImages.length,
    categories: {
      residential: fallbackImages.filter(
        (img) => img.category === "residential"
      ).length,
      commercial: fallbackImages.filter((img) => img.category === "commercial")
        .length,
      lighting: fallbackImages.filter((img) => img.category === "lighting")
        .length,
      "audio-video": fallbackImages.filter(
        (img) => img.category === "audio-video"
      ).length,
      security: fallbackImages.filter((img) => img.category === "security")
        .length,
      general: 0,
    },
    source: "fallback",
  });
}
