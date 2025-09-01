import Link from "next/link";
import {
  Home,
  Building2,
  Wifi,
  Sun,
  Lightbulb,
  Users,
  Monitor,
  TreePine,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Smart Home Integration",
    description:
      "Complete home automation systems that make your life easier and more enjoyable.",
    href: "/services/smart-home-integration",
    color: "blue",
  },
  {
    icon: Building2,
    title: "Commercial Solutions",
    description:
      "Professional automation and technology solutions for businesses and commercial properties.",
    href: "/commercial",
    color: "green",
  },
  {
    icon: Wifi,
    title: "Wi-Fi & Networking",
    description:
      "Reliable, high-speed internet and network infrastructure for your home or business.",
    href: "/services/wifi-networking",
    color: "purple",
  },
  {
    icon: Sun,
    title: "Outdoor Living",
    description:
      "Transform your outdoor spaces with smart lighting, audio, and entertainment systems.",
    href: "/services/outdoor-living",
    color: "orange",
  },
  {
    icon: Lightbulb,
    title: "Lighting & Shades",
    description:
      "Intelligent lighting control and motorized shades for comfort and energy efficiency.",
    href: "/services/lighting-shades",
    color: "yellow",
  },
  {
    icon: Users,
    title: "Audio & Video",
    description:
      "Theater-quality sound and video systems throughout your home.",
    href: "/services/audio-video",
    color: "red",
  },
  {
    icon: Monitor,
    title: "Monitoring & Surveillance",
    description: "Comprehensive monitoring solutions for peace of mind.",
    href: "/services/monitoring-security",
    color: "indigo",
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
    <section className="py-16 md:py-24 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const colorClass =
              colorClasses[service.color as keyof typeof colorClasses];

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${colorClass}`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
