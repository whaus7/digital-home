import DesktopNav from "../components/DesktopNav";
import MobileNav from "../components/MobileNav";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import {
  Building2,
  Monitor,
  Users,
  Lightbulb,
  Sun,
  ArrowRight,
  Wifi,
  Shield,
  Video,
  Settings,
} from "lucide-react";
import Link from "next/link";

const commercialServices = [
  {
    icon: Building2,
    title: "Integrated Building Control",
    description:
      "Run your business smoothly with integrated control of networks, audio/video, security, lighting, shades and communications.",
    features: [
      "Seamlessly control lights, security, shades and AV",
      "Facilitate opening and closing tasks with pre-saved settings",
      "Occupancy sensors turn off lights and AV in unoccupied rooms",
      "Maintaining connectivity to the Internet is critical in today's businesses",
      "Our IP products continuously monitor connectivity and automatically reboot troubled devices when the connection is lost",
    ],
    color: "blue",
  },
  {
    icon: Settings,
    title: "Integrated Room Control",
    description:
      "Refined Control Transforms Your Company's Most Important Rooms",
    features: [
      "Operate all the technology from the device of your choice",
      "Design the ideal environment for meetings and presentations",
      "Prepare and adjust quickly for more efficient use of your space",
    ],
    color: "purple",
  },
  {
    icon: Users,
    title: "Amenity Rooms",
    description:
      "Overhaul Your Efficiency with Sweeping Control and Monitoring",
    features: [
      "Transform your decor with sophisticated, custom-engraved keypads",
      "Curated settings to host parties, watch movies or relax after work",
      "Striking landscape lighting for commanding curb appeal and security",
    ],
    color: "green",
  },
  {
    icon: Lightbulb,
    title: "Lighting Control",
    description: "Harness the Full Power of Natural and Artificial Lighting",
    features: [
      "Easily manage lights via keypads, apps or touchpads",
      "Minimize costs through occupancy sensors and timers",
      "Boost security and comfort with office lighting control",
    ],
    color: "yellow",
  },
  {
    icon: Sun,
    title: "Motorized Window Treatments",
    description: "Smart window treatments for optimal working environments",
    features: [
      "Track real-time usage of lighting, heating and AV equipment",
      "Keep downtime and service costs low with remote diagnostics",
      "Shades automatically open or close based on sunlight for optimum working environments",
    ],
    color: "orange",
  },
  {
    icon: Video,
    title: "Video Conferencing",
    description:
      "Connect Remote Workforces and Boost Collaboration with Video Conferencing",
    features: [
      "Utilize high-definition video and immersive audio during meetings",
      "Optimize conference room av easily for meetings, interviews and performance reviews",
      "Real-time content collaboration ensures all parties can contribute to the discussion",
    ],
    color: "red",
  },
];

const colorClasses = {
  blue: "bg-blue-50 text-blue-600",
  purple: "bg-purple-50 text-purple-600",
  red: "bg-red-50 text-red-600",
  green: "bg-green-50 text-green-600",
  yellow: "bg-yellow-50 text-yellow-600",
  orange: "bg-orange-50 text-orange-600",
  indigo: "bg-indigo-50 text-indigo-600",
};

export default function CommercialPage() {
  return (
    <div className="min-h-screen">
      <DesktopNav />
      <MobileHeader />
      <MobileNav />

      <main className="pb-20 md:pb-0">
        {/* Hero Section */}
        <Hero
          title="Commercial Integration"
          subtitle="Run your company smoothly with integrated control of networks, audio, video, security, lighting, shades and communications."
          ctaText="Schedule Consultation"
          ctaLink="/contact"
        />

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {commercialServices.map((service, index) => {
                const Icon = service.icon;
                const colorClass =
                  colorClasses[service.color as keyof typeof colorClasses];

                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 ${colorClass}`}
                      >
                        <Icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Making Technology Simple Since 1980
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We bring decades of experience and expertise to every commercial
                project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">40+</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Years Experience
                </h3>
                <p className="text-gray-600">
                  Decades of expertise in commercial technology solutions
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    500+
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Commercial Projects
                </h3>
                <p className="text-gray-600">
                  Successfully completed projects across various industries
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    24/7
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Support Available
                </h3>
                <p className="text-gray-600">
                  Round-the-clock technical support and maintenance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Schedule a Consultation
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Reserve a free, no-obligation consultation with us. We'll contact
              you shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Free Consultation
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <a
                href="tel:847.776.5063"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-green-600 hover:text-green-600 transition-colors"
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
