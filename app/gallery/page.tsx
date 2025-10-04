"use client";

import DesktopNav from "../components/DesktopNav";
import MobileNav from "../components/MobileNav";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";
import Hero from "../components/Hero";
import { Suspense } from "react";

import { Image, Home, Building2, Lightbulb, Users } from "lucide-react";

const galleryCategories = [
  {
    id: "all",
    title: "All Projects",
    icon: Image,
    description:
      "Complete portfolio of our smart home and commercial installations",
    count: 0,
  },
  {
    id: "residential",
    title: "Residential Projects",
    icon: Home,
    description: "Beautiful smart home installations for luxury homeowners",
    count: 0,
  },
  {
    id: "commercial",
    title: "Commercial Installations",
    icon: Building2,
    description: "Professional technology solutions for businesses",
    count: 0,
  },
  {
    id: "theater",
    title: "Audio & Video",
    icon: Users,
    description: "Theater-quality sound and video installations",
    count: 0,
  },
  {
    id: "outdoor",
    title: "Outdoor Living",
    icon: Lightbulb,
    description: "Outdoor entertainment and automation systems",
    count: 0,
  },
  {
    id: "lighting",
    title: "Lighting & Shades",
    icon: Lightbulb,
    description: "Intelligent lighting control and motorized shade systems",
    count: 0,
  },
];

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function GalleryContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categoryCounts, setCategoryCounts] = useState<{
    [key: string]: number;
  }>({});
  const [loading, setLoading] = useState(true);

  // Handle URL parameters and fetch category counts
  useEffect(() => {
    // Check for category parameter in URL
    const categoryParam = searchParams.get("category");
    if (categoryParam && categoryParam !== selectedCategory) {
      setSelectedCategory(categoryParam);
    }

    const fetchCategoryCounts = async () => {
      try {
        const response = await fetch("/api/gallery/categorized");
        const data = await response.json();

        if (data.success && data.categories) {
          setCategoryCounts(data.categories);
        } else {
          console.error("Failed to fetch category counts:", data.error);
        }
      } catch (error) {
        console.error("Error fetching category counts:", error);
        // Set default counts based on the categorized images we know exist
        setCategoryCounts({
          all: 75, // Approximate total
          residential: 15,
          commercial: 7,
          theater: 15,
          outdoor: 12,
          lighting: 3,
          general: 23,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryCounts();
  }, [searchParams, selectedCategory]);

  return (
    <div className="min-h-screen">
      <DesktopNav />
      <MobileHeader />
      <MobileNav />

      <main className="pb-20 md:pb-0">
        {/* Hero Section */}
        <Hero
          title="Our Project Gallery"
          subtitle="Explore our portfolio of completed smart home and commercial technology installations. Each project showcases our commitment to quality, innovation, and customer satisfaction."
          showCta={false}
        />

        {/* Category Filter */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {galleryCategories.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.id;
                const count = categoryCounts[category.id] || 0;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex flex-col items-center p-4 rounded-lg border transition-colors ${
                      isActive
                        ? "border-purple-500 bg-purple-50 text-purple-700"
                        : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 mb-2 ${
                        isActive ? "text-purple-600" : "text-gray-600"
                      }`}
                    />
                    <span className="text-sm font-medium text-center mb-1">
                      {category.title}
                    </span>
                    <span
                      className={`text-xs ${
                        isActive ? "text-purple-600" : "text-gray-500"
                      }`}
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-gray-300 border-t-purple-600 rounded-full animate-spin mx-auto"></div>
                      ) : (
                        `${count} ${count === 1 ? "image" : "images"}`
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Gallery Header */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {galleryCategories.find((cat) => cat.id === selectedCategory)
                  ?.title || "All Projects"}
              </h2>
              <p className="text-gray-600 mb-4">
                {selectedCategory === "all"
                  ? `Showing all ${
                      categoryCounts.all || 0
                    } projects from our portfolio`
                  : `Showing ${
                      categoryCounts[selectedCategory] || 0
                    } projects in this category`}
              </p>
              <div className="w-20 h-1 bg-purple-600 rounded-full"></div>
            </div>

            <GalleryGrid
              category={selectedCategory}
              limit={12}
              showLoadMore={true}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us help you create the smart home or commercial technology
              solution of your dreams. Schedule a consultation to discuss your
              project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:847.776.5063"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-purple-600 hover:text-purple-600 transition-colors"
              >
                Call 847.776.5063
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen">
          <DesktopNav />
          <MobileHeader />
          <MobileNav />
          <main className="pb-20 md:pb-0">
            <Hero
              title="Our Project Gallery"
              subtitle="Explore our portfolio of completed smart home and commercial technology installations. Each project showcases our commitment to quality, innovation, and customer satisfaction."
              showCta={false}
            />
            <div className="py-16 md:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center py-12">
                  <div className="w-8 h-8 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      }
    >
      <GalleryContent />
    </Suspense>
  );
}
