"use client";

import { LazyMotion, domMax } from "framer-motion";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ProductsSection from "@/components/ProductsSection";
import IndustriesSection from "@/components/IndustriesSection";
import HeritageStory from "@/components/HeritageStory";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import LogisticsEstimator from "@/components/LogisticsEstimator";
import Testimonials from "@/components/Testimonials";
import RfqSection from "@/components/RfqSection";
import WhatsAppButton from "@/components/WhatsAppButton"; // ✅ Imported
export default function SohipEliteFinal() {
  return (
    <LazyMotion features={domMax}>
      {/* ✅ Clean block rendering removes compression constraints entirely */}
      <main className="w-full min-h-screen bg-[#0D0D0D] text-white font-sans overflow-x-hidden block">
        
        <Hero />
        <TrustSection />
        <ProductsSection />
        <LogisticsEstimator />
        <HeritageStory />
        <Testimonials />

        {/* <IndustriesSection />
        <WhyChooseUsSection /> */}
        <RfqSection />
        <WhatsAppButton/>
      </main>
    </LazyMotion>
  );
}