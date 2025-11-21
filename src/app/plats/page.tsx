import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import CookieBanner from "@/components/sections/cookie-banner";
import DishesGallery from "@/components/sections/dishes-gallery";

export default function PlatsPage() {
  return (
    <div className="min-h-screen bg-primary-background">
      <Navigation />
      
      <main className="relative">
        <DishesGallery />
      </main>
      
      <Footer />
      
      <CookieBanner />
    </div>
  );
}
