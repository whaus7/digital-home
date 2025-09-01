import Link from "next/link";
import DesktopNav from "../../components/DesktopNav";
import MobileNav from "../../components/MobileNav";
import MobileHeader from "../../components/MobileHeader";
import Footer from "../../components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <DesktopNav />
      <MobileHeader />
      <MobileNav />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              The service you&apos;re looking for doesn&apos;t exist. Please
              check the URL or browse our available services.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Return Home
            </Link>

            <div className="pt-4">
              <p className="text-gray-600 mb-4">Or explore our services:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/services/smart-home-integration"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Smart Home Integration
                </Link>
                <Link
                  href="/services/audio-video"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Audio & Video
                </Link>
                <Link
                  href="/services/wifi-networking"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Wi-Fi & Networking
                </Link>
                <Link
                  href="/services/outdoor-living"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Outdoor Living
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
