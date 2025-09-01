import Image from "next/image";

export default function Partners() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with the world&apos;s leading technology brands to
            deliver exceptional smart home solutions and premium audio-visual
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/images/partners/coastal-source-logo.png"
              alt="Coastal Source"
              width={120}
              height={60}
              className="max-h-12 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/images/partners/Klipsch_logo.svg"
              alt="Klipsch"
              width={120}
              height={60}
              className="max-h-12 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/images/partners/sonos-logo.png"
              alt="Sonos"
              width={120}
              height={60}
              className="max-h-12 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/images/partners/samsung-logo.svg"
              alt="Samsung"
              width={120}
              height={60}
              className="max-h-12 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/images/partners/Sony_logo.svg.png"
              alt="Sony"
              width={120}
              height={60}
              className="max-h-12 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src="/images/partners/lutron-logo.svg"
              alt="Lutron"
              width={120}
              height={60}
              className="max-h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
