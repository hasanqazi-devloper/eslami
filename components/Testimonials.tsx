"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const checkDeviceWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDeviceWidth();
    window.addEventListener("resize", checkDeviceWidth);
    return () => window.removeEventListener("resize", checkDeviceWidth);
  }, []);

  const reviews = [
    {
      name: "Tariq Al-Mansoor",
      role: "Wholesale Spice Importer • Dubai, UAE",
      text: "The Super Negin Saffron batch exceeded our ISO lab requirements. Crocin levels were tested above 275 and the air freight shipment arrived in Dubai within 72 hours under full CIF terms."
    },
    {
      name: "Dr. Elena Rostova",
      role: "Procurement Manager • European Herbals Ltd (Germany)",
      text: "Direct producer transparency is rare in this market. Working directly with Behnaz Eslami gave us full traceability, zero middlemen markups, and flawless phytosanitary certificates."
    },
    {
      name: "Jean-Luc Dubois",
      role: "Luxury Cosmetic Formulator • Paris, France",
      text: "We source Damask Rosebuds and Saffron extracts for our high-end skincare line. The natural aroma, vivid color potency, and custom vacuum packaging are consistently top tier."
    },
    {
      name: "Chen Wei",
      role: "General Manager • Sino-Global Trading (Shanghai)",
      text: "Consistently reliable B2B supplier. The product quality matches sample bales exactly, and their commercial team handles express shipping documents without any delay."
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="py-10 md:py-14 bg-[#0A0708] border-t border-[#35060A] relative z-10 overflow-hidden w-full text-white">

      {/* BACKGROUND GRAPHIC ACCENT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#E63946]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Bounded framework */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 w-full">

        {/* SECTION HEADER */}
        <div className="text-center mb-8 space-y-2 w-full">
          
          <m.span
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#160B0D] border border-[#F4D068]/30 text-[11px] font-semibold text-[#F4D068] uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D58] animate-pulse" />
            Verified Buyer Feedback
          </m.span>

          <m.h2
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
          >
            What Global Importers <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D068] via-white to-[#F4D068]">Say</span>
          </m.h2>

          <m.p
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed"
          >
            Direct feedback from B2B buyers across GCC, Europe, and Asia.
          </m.p>
        </div>

        {/* SLIDER INTERACTION */}
        <div className="relative max-w-2xl mx-auto w-full">
          
          <m.div layout className="w-full bg-[#120B0D] rounded-xl border border-[#35060A] shadow-xl relative overflow-hidden p-5 sm:p-7 transform-gpu">
            
            {/* Top red accent bar */}
            <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#FF4D58] via-[#F4D068] to-transparent w-full" />
            <Quote size={70} className="absolute -bottom-2 -right-2 text-white/[0.02] pointer-events-none transform -rotate-12" />

            <AnimatePresence mode="wait">
              <m.div
                key={activeIndex}
                initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
                transition={{ duration: 0.2 }}
                className="w-full flex flex-col justify-between text-left h-full"
              >
                <div className="space-y-3">
                  
                  {/* 5-Star Rating & ISO Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-[#F4D068]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="#F4D068" strokeWidth={0} />
                      ))}
                    </div>

                    <div className="flex items-center gap-1 text-[9px] text-zinc-400 font-mono bg-[#1A090B] border border-[#35060A] px-2 py-0.5 rounded">
                      <ShieldCheck className="w-3 h-3 text-[#FF4D58]" />
                      <span>Verified Order</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-200 font-normal leading-relaxed italic">
                    "{reviews[activeIndex].text}"
                  </p>
                </div>

                {/* Author Block */}
                <div className="pt-4 mt-4 border-t border-[#251013] flex items-center justify-between w-full">
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-wide">
                      {reviews[activeIndex].name}
                    </h4>
                    <p className="text-[#F4D068] text-[10px] tracking-wider font-medium mt-0.5">
                      {reviews[activeIndex].role}
                    </p>
                  </div>

                  <div className="w-7 h-7 rounded-full border border-[#35060A] bg-[#1A090B] flex items-center justify-center text-[#FF4D58] shrink-0 select-none">
                    <span className="text-[9px] font-extrabold">B2B</span>
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
          </m.div>

          {/* SLIDER CONTROLS */}
          <div className="flex justify-center items-center gap-3 mt-4 w-full">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Review"
              className="p-2 rounded-full bg-[#120B0D] border border-[#35060A] text-zinc-400 hover:text-[#F4D068] transition-all cursor-pointer"
            >
              <ChevronLeft size={14} />
            </button>

            {/* Dot Stepper Indicator */}
            <div className="flex gap-1.5 select-none">
              {reviews.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-5 bg-[#FF4D58]' : 'w-1.5 bg-[#35060A]'}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Review"
              className="p-2 rounded-full bg-[#120B0D] border border-[#35060A] text-zinc-400 hover:text-[#F4D068] transition-all cursor-pointer"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}