import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Instructor from "@/components/Instructor";
import UpcommingWebinars from "@/components/UpcommingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection/> {/* here imported the main section */}
        <FeaturedCourses/>
        <WhyChooseUs/>
        <InfiniteMovingCardsDemo/>
        <UpcommingWebinars/>
        <Instructor/>
        <Footer/>
      </main>
      
    </>
  );
}
