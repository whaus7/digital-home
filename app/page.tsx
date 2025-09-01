import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";
import MobileHeader from "./components/MobileHeader";
import HomeHero from "./components/HomeHero";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <DesktopNav />
      <MobileHeader />
      <MobileNav />

      <main className="pb-20 md:pb-0">
        <HomeHero />
        <Services />
        <Testimonials />
        <Partners />
      </main>

      <Footer />
    </div>
  );
}
