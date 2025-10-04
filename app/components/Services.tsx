import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Building2,
  Wifi,
  Sun,
  Lightbulb,
  Users,
  Monitor,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Smart Home Integration",
    description:
      "Complete home automation systems that make your life easier and more enjoyable.",
    href: "/services/smart-home-integration",
    color: "blue",
    image: "/images/LZ-Living-Room.jpg",
  },
  {
    icon: Building2,
    title: "Commercial Solutions",
    description:
      "Professional automation and technology solutions for businesses and commercial properties.",
    href: "/commercial",
    color: "green",
    image: "/images/goldenne-shep-office-NYSE-FINAL-web-copy.jpg",
  },
  {
    icon: Wifi,
    title: "Wi-Fi & Networking",
    description:
      "Reliable, high-speed internet and network infrastructure for your home or business.",
    href: "/services/wifi-networking",
    color: "purple",
    image: "/images/LZ-Bath-Touchpanel.jpg",
  },
  {
    icon: Sun,
    title: "Outdoor Living",
    description:
      "Transform your outdoor spaces with smart lighting, audio, and entertainment systems.",
    href: "/services/outdoor-living",
    color: "orange",
    image: "/images/Bar-Pool.jpg",
  },
  {
    icon: Lightbulb,
    title: "Lighting & Shades",
    description:
      "Intelligent lighting control and motorized shades for comfort and energy efficiency.",
    href: "/services/lighting-shades",
    color: "yellow",
    image: "/images/Highland-Park-Sun-Room-Light.jpg",
  },
  {
    icon: Users,
    title: "Audio & Video",
    description:
      "Theater-quality sound and video systems throughout your home.",
    href: "/services/audio-video",
    color: "red",
    image: "/images/Barrington-Theater-Chairs.jpg",
  },
  {
    icon: Monitor,
    title: "Monitoring & Surveillance",
    description: "Comprehensive monitoring solutions for peace of mind.",
    href: "/services/monitoring-security",
    color: "indigo",
    image: "/images/LZ-Bath-Touchpanel.jpg",
  },
];

const colorClasses = {
  blue: "bg-blue-50 text-blue-600 hover:bg-blue-100",
  green: "bg-green-50 text-green-600 hover:bg-green-100",
  purple: "bg-purple-50 text-purple-600 hover:bg-purple-100",
  orange: "bg-orange-50 text-orange-600 hover:bg-orange-100",
  yellow: "bg-yellow-50 text-yellow-600 hover:bg-yellow-100",
  red: "bg-red-50 text-red-600 hover:bg-red-100",
  indigo: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100",
  pink: "bg-pink-50 text-pink-600 hover:bg-pink-100",
};

export default function Services() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We intelligently design and expertly install systems to enhance your
            home experience. Our dedicated DHTcare team works tirelessly to
            ensure your home will always meet and exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const colorClass =
              colorClasses[service.color as keyof typeof colorClasses];

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group block bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-72 md:h-48 sm:h-80 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${colorClass}`}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
