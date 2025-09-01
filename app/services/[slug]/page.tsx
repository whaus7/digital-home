import Link from "next/link";
import DesktopNav from "../../components/DesktopNav";
import MobileNav from "../../components/MobileNav";
import MobileHeader from "../../components/MobileHeader";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import Hero from "../../components/Hero";
import { notFound } from "next/navigation";

// Service data based on the website content
const serviceData = {
  "smart-home-integration": {
    title: "Smart Home Integration",
    subtitle:
      "Your wish is your command. DHT smart home systems control surveillance cameras, locks, lights, shades, music and video via your voice, smart phone or from a touchpanel.",
    heroImage: "/images/smart-home-hero.jpg",
    sections: [
      {
        title: "Integrated Systems",
        subtitle: "Sophisticated Pure Control of All Your Home's Technology",
        features: [
          "Cutting-edge management from touchpads, mobile apps or voice assistants",
          "Integrate elegant keypads that manage your whole home with one convenient touch",
          "Activate scenes that shift lighting, music and temperature simultaneously",
        ],
      },
      {
        title: "Lighting Control",
        subtitle:
          "Craft the Light in Your Home to Improve Productivity, Relaxation and Security",
        features: [
          "Transform your decor with sophisticated, custom-engraved keypads",
          "Curated settings to host parties, watch movies or relax after work",
          "Striking landscape lighting for commanding curb appeal and security",
        ],
      },
      {
        title: "Motorized Window Treatments",
        subtitle:
          "High-Precision Control of Shades Provides Exceptional Style and Privacy",
        features: [
          "Choose from a variety of high-end design, fabric and color options",
          "Effortlessly close all shades to protect your family's privacy",
          "Manage natural light to preserve delicate furnishings and artwork",
        ],
      },
      {
        title: "Smart Home Control",
        subtitle:
          "Flawless Command of Your Home's Lighting, Entertainment, Climate and Security",
        features: [
          "Manage your luxury home with one tap from the device of your choice",
          "Cultivate the ideal environment for relaxation, hosting parties or children's homework",
          "Remotely access lights, security and surveillance from around the world",
        ],
      },
      {
        title: "Wellness",
        subtitle:
          "Wellness starts at home with our Circadian Rhythm lighting systems",
        features: [
          "Allow your home's lighting to replicate both sunlight and firelight, humanity's source of life, and feel seamlessly connected to nature within your home",
          "Automated changes mimic the sun's intensity and hues throughout the day",
          "Generate relaxation or focus by adjusting your fixtures' color temperatures",
        ],
      },
      {
        title: "Energy Integration",
        subtitle:
          "Innovative Energy Management Ensures You're Never in the Dark",
        features: [
          "Unmatched energy security even during severe weather events",
          "Ensure your home receives clean energy at all times",
          "Protect your high-end electronics from surges and dirty grid power",
        ],
      },
    ],
  },
  "audio-video": {
    title: "Audio & Video",
    subtitle:
      "Theater-quality sound and video systems throughout your home for the ultimate entertainment experience.",
    heroImage: "/images/audio-video-hero.jpg",
    sections: [
      {
        title: "Home Theater Systems",
        subtitle: "Cinema-Quality Entertainment in Your Living Space",
        features: [
          "Professional-grade audio and video equipment installation",
          "Acoustic optimization for perfect sound quality",
          "Seamless integration with your smart home system",
        ],
      },
      {
        title: "Multi-Room Audio",
        subtitle: "Music Throughout Your Home with Individual Control",
        features: [
          "Zone-based audio systems for different areas",
          "Wireless streaming from your favorite music services",
          "Voice control and mobile app management",
        ],
      },
      {
        title: "Video Distribution",
        subtitle: "Share Content Across Multiple Displays",
        features: [
          "HD and 4K video distribution throughout your home",
          "Cable management and professional installation",
          "Integration with security cameras and monitoring systems",
        ],
      },
    ],
  },
  "wifi-networking": {
    title: "Wi-Fi & Networking",
    subtitle:
      "Reliable, high-speed internet and network infrastructure for your home or business.",
    heroImage: "/images/networking-hero.jpg",
    sections: [
      {
        title: "High-Speed Internet",
        subtitle: "Lightning-Fast Connectivity Throughout Your Property",
        features: [
          "Fiber optic and high-speed cable installations",
          "Wi-Fi 6 and mesh network solutions",
          "Dead zone elimination and signal optimization",
        ],
      },
      {
        title: "Network Security",
        subtitle: "Protect Your Digital Life with Enterprise-Grade Security",
        features: [
          "Advanced firewall and security protocols",
          "Guest network isolation and management",
          "24/7 network monitoring and threat protection",
        ],
      },
      {
        title: "Smart Device Integration",
        subtitle: "Seamless Connectivity for All Your Smart Home Devices",
        features: [
          "IoT device management and optimization",
          "Bandwidth allocation for critical applications",
          "Future-proof network infrastructure",
        ],
      },
    ],
  },
  "outdoor-living": {
    title: "Outdoor Living",
    subtitle:
      "Transform your outdoor spaces with smart lighting, audio, and entertainment systems.",
    heroImage: "/images/outdoor-hero.jpg",
    sections: [
      {
        title: "Outdoor Audio Systems",
        subtitle: "Premium Sound for Your Outdoor Entertainment",
        features: [
          "Weather-resistant speakers and subwoofers",
          "Zone-based outdoor audio control",
          "Integration with indoor audio systems",
        ],
      },
      {
        title: "Landscape Lighting",
        subtitle: "Illuminate Your Property with Style and Security",
        features: [
          "LED landscape lighting design and installation",
          "Motion-activated security lighting",
          "Color-changing accent lighting for special occasions",
        ],
      },
      {
        title: "Outdoor Entertainment",
        subtitle: "Create the Ultimate Outdoor Living Experience",
        features: [
          "Outdoor TV and projector installations",
          "Pool and patio audio systems",
          "Smart irrigation and lighting control",
        ],
      },
    ],
  },
  "lighting-shades": {
    title: "Lighting & Shades",
    subtitle:
      "Intelligent lighting control and motorized shades for comfort and energy efficiency.",
    heroImage: "/images/lighting-hero.jpg",
    sections: [
      {
        title: "Smart Lighting Control",
        subtitle: "Transform Your Home with Intelligent Lighting",
        features: [
          "LED lighting design and installation",
          "Scene-based lighting control",
          "Energy-efficient lighting solutions",
        ],
      },
      {
        title: "Motorized Shades",
        subtitle: "Automated Window Treatments for Comfort and Privacy",
        features: [
          "Custom motorized shade installation",
          "Integration with lighting and climate control",
          "Remote and voice control operation",
        ],
      },
      {
        title: "Circadian Lighting",
        subtitle: "Natural Light Patterns for Health and Wellness",
        features: [
          "Automated color temperature adjustment",
          "Sunrise and sunset simulation",
          "Sleep optimization lighting programs",
        ],
      },
    ],
  },
  "monitoring-security": {
    title: "Monitoring & Security",
    subtitle:
      "Comprehensive security and monitoring solutions for peace of mind.",
    heroImage: "/images/security-hero.jpg",
    sections: [
      {
        title: "Surveillance Systems",
        subtitle: "24/7 Monitoring and Recording for Your Property",
        features: [
          "High-definition security camera installation",
          "Remote viewing and mobile alerts",
          "Cloud storage and local backup options",
        ],
      },
      {
        title: "Access Control",
        subtitle: "Smart Locks and Entry Management",
        features: [
          "Smart lock installation and integration",
          "Keyless entry and remote access",
          "Guest access management and monitoring",
        ],
      },
      {
        title: "Environmental Monitoring",
        subtitle: "Protect Your Home from Environmental Threats",
        features: [
          "Smoke and carbon monoxide detection",
          "Water leak detection and alerts",
          "Temperature and humidity monitoring",
        ],
      },
    ],
  },
  "permanent-holiday-lighting": {
    title: "Permanent Holiday Lighting",
    subtitle:
      "Beautiful, energy-efficient permanent holiday lighting installations.",
    heroImage: "/images/holiday-lighting-hero.jpg",
    sections: [
      {
        title: "LED Holiday Lighting",
        subtitle: "Energy-Efficient and Long-Lasting Holiday Displays",
        features: [
          "Custom holiday lighting design and installation",
          "LED technology for energy savings",
          "Year-round installation with seasonal programming",
        ],
      },
      {
        title: "Smart Control",
        subtitle: "Automated Holiday Lighting Management",
        features: [
          "Remote control and scheduling",
          "Color and pattern customization",
          "Integration with smart home systems",
        ],
      },
      {
        title: "Professional Installation",
        subtitle: "Expert Installation and Maintenance Services",
        features: [
          "Safe and secure mounting systems",
          "Weather-resistant components",
          "Ongoing maintenance and support",
        ],
      },
    ],
  },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug as keyof typeof serviceData];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <DesktopNav />
      <MobileHeader />
      <MobileNav />

      <main>
        {/* Hero Section */}
        <Hero
          title={service.title}
          subtitle={service.subtitle}
          ctaText="Get Started"
          ctaLink="/contact"
        />

        {/* Breadcrumb */}
        <section className="bg-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Residential Services", href: "/residential" },
                { label: service.title },
              ]}
            />
          </div>
        </section>

        {/* Service Sections */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {service.sections.map((section, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      {section.subtitle}
                    </p>
                    <ul className="space-y-4">
                      {section.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`${
                      index % 2 === 0 ? "order-2" : "order-1"
                    } bg-gray-100 rounded-2xl h-64 lg:h-96 flex items-center justify-center`}
                  >
                    <div className="text-gray-400 text-center">
                      <svg
                        className="w-16 h-16 mx-auto mb-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>Service Image</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Embrace the Ultimate Luxury Lifestyle
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Want a curated technology solution to match your lifestyle? Let us
              craft a smart home integration system that brings striking
              efficiency, beauty and comfort to your properties.
            </p>
            <div className="space-x-4">
              <a
                href="/contact"
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                GET STARTED NOW
              </a>
              <Link
                href="/residential"
                className="inline-block bg-transparent text-white border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
