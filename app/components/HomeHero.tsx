import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Home, Speaker, Lightbulb } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative h-[78vh] lg:h-[65vh] overflow-hidden">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/images/Nelson-Pool.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* Content Box */}
          <div className="bg-black/55 backdrop-blur-sm rounded-xl shadow-xl p-4 md:p-6 max-w-xl">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-300">
                  Trusted since 1980
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Making Technology <span className="text-blue-400">Simple</span>
              </h1>

              <p className="text-lg text-gray-200 leading-relaxed">
                You spend half of your life in your house. We strive to truly
                make it your home by ensuring the time you spend here is more
                enjoyable and easier to manage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Schedule Consultation
                  <ArrowRight size={20} className="ml-2" />
                </Link> */}

                <Link
                  href="/residential"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-200 font-semibold rounded-lg hover:border-blue-400 hover:text-blue-400 transition-colors"
                >
                  View Services
                </Link>
              </div>

              {/* <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-400">40+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-400">1000+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-gray-300">DHTcare Support</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex h-full">
        {/* Left Section - Content Area (40%) */}
        <div className="w-[40%] relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 flex items-center justify-center">
          {/* Content Container */}
          <div className="max-w-2xl mx-auto px-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    Trusted since 1980
                  </span>
                </div>

                <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Making Technology{" "}
                  <span className="text-blue-600">Simple</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  You spend half of your life in your house. We strive to truly
                  make it your home by ensuring the time you spend here is more
                  enjoyable and easier to manage.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Schedule Consultation
                  <ArrowRight size={20} className="ml-2" />
                </Link>

                <Link
                  href="/residential"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  View Services
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">40+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">DHTcare Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Background Image (60%) */}
        <div className="w-[60%] relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(/images/Nelson-Pool.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Dark Theme Dialog */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="bg-black/55 backdrop-blur-sm rounded-xl shadow-xl p-8 max-w-md">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Home className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Smart Home Integration
                    </h3>
                    <p className="text-sm text-gray-300">
                      Complete home automation
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Speaker className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Audio & Video</h3>
                    <p className="text-sm text-gray-300">
                      Theater quality sound
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Lighting & Shades
                    </h3>
                    <p className="text-sm text-gray-300">Intelligent control</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
