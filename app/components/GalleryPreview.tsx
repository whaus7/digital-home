import Link from "next/link";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/Barrington-Theater-Chairs.jpg",
    alt: "Home Theater",
    category: "Audio & Video",
    categoryId: "theater",
  },
  {
    src: "/images/Bar-Pool.jpg",
    alt: "Outdoor Living",
    category: "Outdoor",
    categoryId: "outdoor",
  },
  {
    src: "/images/LZ-Living-Room.jpg",
    alt: "Smart Home",
    category: "Smart Home",
    categoryId: "residential",
  },
  {
    src: "/images/Highland-Park-Sun-Room-Light.jpg",
    alt: "Lighting",
    category: "Lighting",
    categoryId: "lighting",
  },
  {
    src: "/images/goldenne-shep-office-NYSE-FINAL-web-copy.jpg",
    alt: "Commercial",
    category: "Commercial",
    categoryId: "commercial",
  },
  {
    src: "/images/kitchen-FINAL-FOR-WEB-goldenne-ohel-long-grove-aug2013_J4.jpg",
    alt: "Kitchen",
    category: "Residential",
    categoryId: "residential",
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our portfolio of completed projects showcasing the latest in
            smart home technology and design.
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <Link
              key={index}
              href={`/gallery?category=${image.categoryId}`}
              className="group relative overflow-hidden rounded-lg aspect-square block"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">
                  {image.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
