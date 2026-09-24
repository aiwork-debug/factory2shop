import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ExploreSection from "../components/ExploreSection";
import CategoryBatchesSection from "../components/CategoryBatchesSection";
import WhyFactory2ShopSection from "../components/WhyFactory2ShopSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />
      <HeroSection />
      <ExploreSection />
      <CategoryBatchesSection />
      <WhyFactory2ShopSection />
      <TestimonialsSection />
      <Footer /> {/* Footer ko yahan render kar diya gaya hai */}
    </main>
  );
}