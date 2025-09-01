import DesktopNav from "../components/DesktopNav";
import MobileNav from "../components/MobileNav";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Shield, Award, Users, CheckCircle } from "lucide-react";
import Image from "next/image";

const partners = [
  {
    name: "Lutron Lighting",
    category: "Lighting & Shades",
    description:
      "Leading manufacturer of lighting control systems and motorized shades",
    logo: "/images/partners/lutron-logo.svg",
    features: [
      "Smart Dimmers",
      "Motorized Shades",
      "Lighting Control",
      "Energy Management",
    ],
  },
  {
    name: "Lutron Shades",
    category: "Window Treatments",
    description:
      "Premium motorized window treatments for residential and commercial applications",
    logo: "/images/partners/lutron-logo.svg",
    features: [
      "Motorized Shades",
      "Smart Control",
      "Custom Fabrics",
      "Energy Efficiency",
    ],
  },
  {
    name: "Sony",
    category: "Audio & Video",
    description:
      "World-renowned manufacturer of high-quality audio and video equipment",
    logo: "/images/partners/Sony_logo.svg.png",
    features: [
      "4K Projectors",
      "Home Theater",
      "Professional Audio",
      "Smart TVs",
    ],
  },
  {
    name: "Samsung",
    category: "Display & Smart Home",
    description: "Innovative display technology and smart home solutions",
    logo: "/images/partners/samsung-logo.svg",
    features: [
      "QLED Displays",
      "Smart TVs",
      "Smart Home Hub",
      "IoT Integration",
    ],
  },
  {
    name: "Sonos",
    category: "Audio Systems",
    description:
      "Premium wireless audio systems for whole-home music enjoyment",
    logo: "/images/partners/sonos-logo.png",
    features: [
      "Wireless Audio",
      "Multi-Room Music",
      "Smart Speakers",
      "Voice Control",
    ],
  },
  {
    name: "Klipsch",
    category: "High-End Audio",
    description:
      "Heritage audio manufacturer known for exceptional sound quality",
    logo: "/images/partners/Klipsch_logo.svg",
    features: [
      "Reference Speakers",
      "Home Theater",
      "Professional Audio",
      "Heritage Design",
    ],
  },
  {
    name: "Coastal Source",
    category: "Outdoor Audio",
    description: "Specialized outdoor audio and lighting solutions",
    logo: "/images/partners/coastal-source-logo.png",
    features: [
      "Outdoor Speakers",
      "Landscape Lighting",
      "Weather Resistant",
      "Professional Grade",
    ],
  },
];

const certifications = [
  {
    title: "Control4 Certified",
    description: "Certified Control4 dealer and installer",
    icon: Shield,
  },
  {
    title: "Lutron Certified",
    description: "Authorized Lutron dealer and certified installer",
    icon: Award,
  },
  {
    title: "Sonos Certified",
    description: "Certified Sonos dealer and installation partner",
    icon: Users,
  },
  {
    title: "40+ Years Experience",
    description: "Decades of expertise in smart home technology",
    icon: CheckCircle,
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      <DesktopNav />
      <MobileHeader />
      <MobileNav />

      <main className="pb-20 md:pb-0">
        {/* Hero Section */}
        <Hero
          title="Our Technology Partners"
          subtitle="We partner with the world's leading manufacturers to bring you the best smart home and commercial technology solutions. Our partnerships ensure quality, reliability, and ongoing support."
          showCta={false}
        />

        {/* Certifications */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Certifications & Expertise
              </h2>
              <p className="text-xl text-gray-600">
                We maintain the highest standards through professional
                certifications and training.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-gray-50 rounded-xl"
                  >
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Trusted Technology Partners
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work exclusively with industry-leading manufacturers to
                ensure the highest quality products and support for your smart
                home or commercial project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="text-center mb-6">
                    <div className="w-32 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={128}
                        height={64}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                      {partner.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {partner.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Products:
                    </h4>
                    {partner.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Manufacturers Choose to Partner With Us
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Proven Track Record
                      </h3>
                      <p className="text-gray-600">
                        40+ years of successful installations and satisfied
                        customers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Certified Expertise
                      </h3>
                      <p className="text-gray-600">
                        Maintain all required certifications and ongoing
                        training
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Dedicated Support
                      </h3>
                      <p className="text-gray-600">
                        24/7 DHTcare support team for ongoing customer service
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Quality Assurance
                      </h3>
                      <p className="text-gray-600">
                        Rigorous quality control and testing procedures
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Partner Benefits
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">
                      Expert installation and integration
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">
                      Comprehensive warranty support
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">
                      Ongoing maintenance and updates
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">
                      Professional customer service
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">
                      Custom programming and optimization
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
