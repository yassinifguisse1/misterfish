import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import NieuweStandaard from "@/components/sections/nieuwe-standaard";
import FoodtruckCarousel from "@/components/sections/foodtruck-carousel";
import VoordelenComparison from "@/components/sections/voordelen-comparison";
import InstagramGallery from "@/components/sections/instagram-gallery";
import RecentePartijen from "@/components/sections/recente-partijen";
import Statistics from "@/components/sections/statistics";
import ContactCta from "@/components/sections/contact-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-background">
      <Navigation />
      
      <main className="relative">
        <HeroSection />
        
        <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <NieuweStandaard />
        </div>
        
        <FoodtruckCarousel />
        
        <VoordelenComparison />
        
        
        <InstagramGallery />
        
        
          <RecentePartijen />
        
       
        
        <ContactCta />
      </main>
      
      <Footer />
      
    </div>
  );
}