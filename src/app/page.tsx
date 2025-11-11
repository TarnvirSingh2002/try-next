import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection/> {/* here imported the main section */}
        <FeaturedCourses/>
      </main>
      
    </>
  );
}
