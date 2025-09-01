import DesktopNav from "../components/DesktopNav";
import MobileNav from "../components/MobileNav";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import {
  Home,
  Wifi,
  Lightbulb,
  Users,
  Monitor,
  TreePine,
  Sun,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const residentialServices = [
  {
    id: "smart-home",
    icon: Home,
    title: "Smart Home Integration",
    description:
      "Complete home automation systems that make your life easier and more enjoyable.",
    href: "/services/smart-home-integration",
    features: [
      "Control4 home automation",
      "Smart thermostats and HVAC control",
      "Automated door locks and garage doors",
      "Voice control integration",
      "Mobile app control",
      "Scene programming",
    ],
    color: "blue",
  },
  {
    id: "audio-video",
    icon: Users,
    title: "Audio & Video Systems",
    description:
      "Theater-quality sound and video systems throughout your home.",
    href: "/services/audio-video",
    features: [
      "Whole-home audio systems",
      "Home theater installations",
      "Sonos integration",
      "4K and 8K video systems",
      "Surround sound setups",
      "Multi-zone audio control",
    ],
    color: "red",
  },
  {
    id: "networking",
    icon: Wifi,
    title: "Wi-Fi & Networking",
    description:
      "Reliable, high-speed internet and network infrastructure for your home.",
    href: "/services/wifi-networking",
    features: [
      "Mesh Wi-Fi systems",
      "Network security",
      "Smart device integration",
      "Gigabit internet setup",
      "Network monitoring",
      "Parental controls",
    ],
    color: "purple",
  },
  {
    id: "lighting",
    icon: Lightbulb,
    title: "Lighting & Shades",
    description:
      "Intelligent lighting control and motorized shades for comfort and energy efficiency.",
    href: "/services/lighting-shades",
    features: [
      "Lutron lighting systems",
      "Motorized window shades",
      "Smart dimmers and switches",
      "Color-changing LED systems",
      "Automated lighting scenes",
      "Energy-efficient solutions",
    ],
    color: "yellow",
  },
  {
    id: "outdoor",
    icon: Sun,
    title: "Outdoor Living",
    description:
      "Transform your outdoor spaces with smart lighting, audio, and entertainment systems.",
    href: "/services/outdoor-living",
    features: [
      "Outdoor audio systems",
      "Landscape lighting",
      "Pool and spa automation",
      "Outdoor TV installations",
      "Weather-resistant controls",
      "Security lighting",
    ],
    color: "orange",
  },
  {
    id: "monitoring",
    icon: Monitor,
    title: "Monitoring & Security",
    description:
      "Comprehensive security and monitoring solutions for peace of mind.",
    href: "/services/monitoring-security",
    features: [
      "Video surveillance systems",
      "Smart doorbells",
      "Motion detection",
      "Remote monitoring",
      "Integration with home automation",
      "Professional monitoring services",
    ],
    color: "indigo",
  },
];

const colorClasses = {
  blue: "bg-blue-50 text-blue-600 hover:bg-blue-100",
  red: "bg-red-50 text-red-600 hover:bg-red-100",
  purple: "bg-purple-50 text-purple-600 hover:bg-purple-100",
  yellow: "bg-yellow-50 text-yellow-600 hover:bg-yellow-100",
  orange: "bg-orange-50 text-orange-600 hover:bg-orange-100",
  indigo: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100",
  pink: "bg-pink-50 text-pink-600 hover:bg-pink-100",
};

export default function ResidentialPage() {
  return (
    <div className="min-h-screen">
      <DesktopNav />
      <MobileHeader />
      <MobileNav />

      <main className="pb-20 md:pb-0">
        {/* Hero Section */}
        <Hero
          title="Residential Smart Home Solutions"
          subtitle="Transform your home into a smart, connected living space with our comprehensive residential automation services. We make technology simple and enhance your daily life."
          ctaText="Schedule Free Consultation"
          ctaLink="/contact"
        />

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {residentialServices.map((service) => {
                const Icon = service.icon;
                const colorClass =
                  colorClasses[service.color as keyof typeof colorClasses];

                return (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="group block bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 transition-colors ${colorClass}`}
                      >
                        <Icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you create the smart home of
              your dreams. Schedule a free consultation to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started Today
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <a
                href="tel:847.776.5063"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
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
