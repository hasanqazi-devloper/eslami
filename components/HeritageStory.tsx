"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck, Sparkles, Building2, UserCheck, MapPin } from "lucide-react";

export default function HeritageStory() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-[#3B070A] via-[#200406] to-[#120203] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-white border-b border-[#4A1217]">
      
      {/* Background Red Ambient Glow */}
      <div className="absolute top-1/2 left-[-100px] -translate-y-1/2 w-[450px] h-[450px] bg-[#E63946]/20 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 right-[-50px] w-[350px] h-[350px] bg-[#E63946]/15 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Story Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160B0D] border border-[#F4D068]/40 text-xs font-semibold text-[#F4D068] shadow-[0_0_15px_rgba(244,208,104,0.1)] uppercase tracking-widest">
                <Building2 className="w-3.5 h-3.5 text-[#F4D068]" /> Direct Producer & Supplier
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Meet <span className="text-[#F4D068]">Behnaz Eslami</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#FF4D58]">
                Global Bulk Saffron Exporter
              </span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Based in Mashhad, Razavi Khorasan, <strong className="text-[#F4D068]">Behnaz Eslami</strong> is a direct Iranian saffron producer committed to supplying export-grade Super Negin Saffron and Damask Rosebuds to international B2B buyers across the GCC, Europe, and China under direct FOB/CIF trade terms.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[#160B0D] border border-[#4A1217] flex items-center gap-3 hover:border-[#FF4D58]/40 transition-all shadow-md">
                <div className="w-10 h-10 rounded-lg bg-[#251013] flex items-center justify-center text-[#FF4D58] shrink-0 border border-[#4A1217]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Direct Producer</h4>
                  <p className="text-[11px] text-zinc-400">100% Pure & Farm Traceable</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#160B0D] border border-[#4A1217] flex items-center gap-3 hover:border-[#FF4D58]/40 transition-all shadow-md">
                <div className="w-10 h-10 rounded-lg bg-[#251013] flex items-center justify-center text-[#F4D068] shrink-0 border border-[#4A1217]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">FOB / CIF Logistics</h4>
                  <p className="text-[11px] text-zinc-400">GCC, EU & China Compliant</p>
                </div>
              </div>
            </div>

            {/* Founder Statement */}
            <div className="p-4 rounded-xl bg-[#160B0D] border-l-4 border-[#FF4D58] border-y border-r border-y-[#4A1217] border-r-[#4A1217] shadow-lg">
              <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                "Our mission is to eliminate middlemen markups and provide global wholesalers with lab-certified, premium-grade Iranian saffron directly from original harvests."
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="#rfq"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF4D58] via-[#E63946] to-[#680B12] hover:brightness-110 text-white border border-[#F4D068]/40 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(230,57,70,0.4)] hover:scale-[1.02]"
              >
                <span>Inquire Wholesale Orders</span>
                <ArrowRight className="w-4 h-4 text-[#F4D068]" />
              </Link>
            </div>

          </div>

          {/* Right Column: Full Size Balanced Image */}
          <div className="lg:col-span-5 relative flex items-center">
            
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#4A1217] bg-[#160B0D] shadow-[0_0_30px_rgba(230,57,70,0.25)] group min-h-[420px] sm:min-h-[480px] lg:min-h-full flex flex-col justify-end">
              
              {/* Full-Sized Client Image */}
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEgS2qZLbwyyw/profile-displayphoto-crop_800_800/B4DZ7BjIrwIsAI-/0/1781363674790?e=1790812800&v=beta&t=j6Bd0lAaDonlj4EauVao7WjqiZbth3fH3HEHgm9eOlA"
                alt="Behnaz Eslami - Saffron Supplier & Direct Iranian Producer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              
              {/* Red Hero Style Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0708] via-[#0A0708]/30 to-transparent" />

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center gap-2 z-10">
                <div className="bg-[#160B0D]/90 backdrop-blur-md border border-[#4A1217] px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F4D068]" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Direct Exporter</span>
                </div>

                <div className="bg-[#160B0D]/90 backdrop-blur-md border border-[#4A1217] px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF4D58]" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Mashhad, Iran</span>
                </div>
              </div>

              {/* Bottom Info Overlay */}
              <div className="relative z-10 m-4 p-4 rounded-xl bg-[#160B0D]/90 backdrop-blur-md border border-[#4A1217] space-y-1 shadow-2xl">
                <h3 className="text-xl font-extrabold text-white">
                  Behnaz Eslami
                </h3>
                <p className="text-xs text-[#F4D068] font-bold">
                  Saffron Supplier | Bulk Export (FOB/CIF)
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-300 pt-2 border-t border-[#4A1217] mt-2">
                  <ShieldCheck className="w-4 h-4 text-[#FF4D58] shrink-0" />
                  <span>GCC, Europe & China Direct Producer</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}