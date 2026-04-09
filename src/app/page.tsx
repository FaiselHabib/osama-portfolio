"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GrowthSection from "@/components/GrowthSection";
import PortfolioSection from "@/components/PortfolioSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <GrowthSection />
        <PortfolioSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
