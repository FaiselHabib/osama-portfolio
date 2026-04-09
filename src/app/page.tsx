"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GrowthSection from "@/components/GrowthSection";
import StyleSection from "@/components/StyleSection";
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
        <StyleSection />
        <PortfolioSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
