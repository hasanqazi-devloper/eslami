'use client';

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ProductsSection() {
 const products = [
  {
    title: "Super Negin Saffron",
    grade: "Grade A+ • ISO 22000",
    origin: "Isfahan Organic Farms",
    moq: "1 KG",
    crocin: "250+ Color Power",
    packaging: "Vacuum Bulk / Metallic Tins",
    img: "https://images.pexels.com/photos/10487658/pexels-photo-10487658.jpeg?_gl=1*1w5qkci*_ga*MTQ1MDI1NzA3My4xNzg4NDIyNjAx*_ga_8JE65Q40S6*czE3ODg0MzE0OTEkbzIkZzEkdDE3ODg0MzE1MjckajI0JGwwJGgw"
  },
  {
    title: "Damask Rosebuds & Petals",
    grade: "100% Organic • Steam Dried",
    origin: "Direct Field Harvest",
    moq: "5 KG",
    crocin: "High Essential Oils Yield",
    packaging: "Export Bales / Airtight Bags",
    img: "https://images.pexels.com/photos/38946088/pexels-photo-38946088.jpeg?_gl=1*1u9lu32*_ga*MTQ1MDI1NzA3My4xNzg4NDIyNjAx*_ga_8JE65Q40S6*czE3ODg0MjI2MDAkbzEkZzEkdDE3ODg0MjI2MTUkajQ1JGwwJGgw"
  }
];

  return (
    <section id="products" className="bg-gradient-to-b from-[#3B070A] via-[#200406] to-[#120203] py-20 px-4 sm:px-6 lg:px-8 text-white border-b border-[#4A1217] relative overflow-hidden">
      
      {/* Red Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E63946]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4 border-b border-[#4A1217] pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F4D068] bg-[#160B0D] border border-[#F4D068]/30 px-3.5 py-1 rounded-full inline-flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Organic B2B Exports
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Export Product Showcase
            </h2>
          </div>

          <Link 
            href="#rfq" 
            className="inline-flex items-center gap-2 text-[#F4D068] font-bold hover:text-white transition-colors text-xs uppercase tracking-wider"
          >
            <span>Request Full Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((item, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl overflow-hidden border border-[#4A1217] bg-[#0A0708] hover:border-[#F4D068]/60 transition-all duration-500 shadow-2xl h-[420px]"
            >
              {/* Full Card Background Image */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-75"
              />
              
              {/* Permanent Base Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0708] via-[#0A0708]/30 to-transparent pointer-events-none" />
              
              {/* Top Badge */}
              <div className="absolute top-4 left-4 bg-[#0A0708]/80 backdrop-blur-md border border-[#F4D068]/40 px-3.5 py-1 rounded-full text-[11px] font-bold text-[#F4D068]">
                {item.grade}
              </div>

              {/* Default Bottom State (Only Title & Inquire CTA) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between gap-4 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-[#F4D068] uppercase tracking-wider">
                  Hover for details →
                </span>
              </div>

              {/* Hover Side-Slide Details Overlay */}
              <div className="absolute inset-0 bg-[#0A0708]/90 backdrop-blur-md p-8 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out border-t border-[#F4D068]/30">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-[#F4D068] uppercase tracking-widest block">
                    Product Specifications
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <div className="space-y-2 pt-2 text-xs text-zinc-300">
                    <div className="flex justify-between border-b border-[#2A1215] pb-2">
                      <span className="text-zinc-400">Harvest Origin:</span>
                      <span className="font-semibold text-white">{item.origin}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#2A1215] pb-2">
                      <span className="text-zinc-400">Quality Spec:</span>
                      <span className="font-semibold text-[#F4D068]">{item.crocin}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#2A1215] pb-2">
                      <span className="text-zinc-400">Export Packaging:</span>
                      <span className="font-semibold text-white">{item.packaging}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#2A1215] pb-2">
                      <span className="text-zinc-400">Minimum Order (MOQ):</span>
                      <span className="font-semibold text-white">{item.moq}</span>
                    </div>
                  </div>
                </div>

                <Link 
                  href="#rfq" 
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF4D58] via-[#E63946] to-[#680B12] hover:brightness-110 text-white py-3 px-6 rounded-xl font-bold transition-all text-xs uppercase tracking-wider border border-[#F4D068]/40 shadow-lg"
                >
                  <span>Inquire Wholesale Price</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}