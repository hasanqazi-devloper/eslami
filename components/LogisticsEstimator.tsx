"use client";

import React, { useState } from "react";
import { Truck, Plane, Package, Calculator, ArrowRight, ShieldCheck } from "lucide-react";

export default function LogisticsEstimator() {
  const [product, setProduct] = useState("saffron");
  const [quantity, setQuantity] = useState(50);
  const [freightType, setFreightType] = useState("air");

  const getPackagingDetails = () => {
    if (product === "saffron") {
      return {
        packType: "1kg Vacuum Metal Tins",
        grossWeight: (quantity * 1.2).toFixed(1) + " kg",
        estDays: freightType === "air" ? "3 - 5 Days" : "12 - 18 Days",
      };
    } else {
      return {
        packType: "5kg Compressed Bales",
        grossWeight: (quantity * 1.15).toFixed(1) + " kg",
        estDays: freightType === "air" ? "4 - 6 Days" : "15 - 20 Days",
      };
    }
  };

  const details = getPackagingDetails();

  return (
    <section id="estimator" className="relative bg-[#0E0A0B] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 text-white border-b border-[#2A1215] overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#E63946]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto w-full relative z-10 space-y-4">
        
        {/* Simple & Clean Header */}
        <div className="text-center space-y-1.5">
          <span className="inline-block px-3 py-0.5 rounded-full bg-[#1A0E10] border border-[#FF4D58]/30 text-[11px] font-semibold text-[#FF4D58] uppercase tracking-widest">
            Interactive Tool
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Logistics & Freight Estimator
          </h2>
        </div>

        {/* Compact Estimator Box */}
        <div className="bg-[#140D0E] border border-[#2A1215] rounded-2xl p-4 sm:p-5 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Controls Form (Left Side) */}
          <div className="md:col-span-7 space-y-3">
            
            {/* 1. Commodity Selection */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                1. Select Commodity
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "saffron", label: "Super Negin Saffron" },
                  { id: "rosebuds", label: "Damask Rosebuds" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProduct(item.id)}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all border ${
                      product === item.id
                        ? "bg-[#221214] text-[#F4D068] border-[#FF4D58]/50 shadow-md"
                        : "bg-[#0E0A0B] text-zinc-400 border-[#2A1215] hover:border-[#FF4D58]/30"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Freight Method */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1">
                2. Shipping Method
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFreightType("air")}
                  className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11px] font-bold transition-all border ${
                    freightType === "air"
                      ? "bg-[#2A1215] text-[#F4D068] border-[#F4D068]/40"
                      : "bg-[#0E0A0B] text-zinc-400 border-[#2A1215] hover:border-[#FF4D58]/30"
                  }`}
                >
                  <Plane className="w-3.5 h-3.5" />
                  <span>Air Express</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFreightType("sea")}
                  className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[11px] font-bold transition-all border ${
                    freightType === "sea"
                      ? "bg-[#2A1215] text-[#F4D068] border-[#F4D068]/40"
                      : "bg-[#0E0A0B] text-zinc-400 border-[#2A1215] hover:border-[#FF4D58]/30"
                  }`}
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>Ocean Cargo</span>
                </button>
              </div>
            </div>

            {/* 3. Quantity Range Slider */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  3. Order Quantity (KG)
                </label>
                <span className="text-xs font-bold text-[#F4D068] bg-[#0E0A0B] px-2 py-0.5 rounded border border-[#2A1215]">
                  {quantity} KG
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-[#FF4D58] cursor-pointer h-1.5 bg-[#0E0A0B] rounded-lg border border-[#2A1215]"
              />
            </div>

          </div>

          {/* Right Live Estimate Summary */}
          <div className="md:col-span-5 bg-[#0E0A0B] rounded-xl p-3.5 border border-[#2A1215] flex flex-col justify-between space-y-2.5">
            <div>
              <div className="flex items-center gap-1.5 text-[#F4D068] text-[10px] font-bold uppercase tracking-wider border-b border-[#2A1215] pb-1.5 mb-2.5">
                <Package className="w-3.5 h-3.5 text-[#FF4D58]" /> Cargo Calculation
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 text-[11px]">Packaging Type:</span>
                  <span className="font-semibold text-white">{details.packType}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 text-[11px]">Gross Cargo Weight:</span>
                  <span className="font-bold text-[#F4D068]">{details.grossWeight}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 text-[11px]">Est. Transit Time:</span>
                  <span className="font-semibold text-white">{details.estDays}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#2A1215] space-y-2">
              <div className="flex items-center gap-1.5 text-[9px] text-zinc-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF4D58] shrink-0" />
                <span>Includes Phytosanitary Certification</span>
              </div>

              <a
                href="#rfq"
                className="flex items-center justify-center gap-1.5 bg-[#2A1215] hover:bg-[#38181C] text-[#F4D068] py-2 px-4 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all w-full border border-[#FF4D58]/40 shadow-lg"
              >
                <span>Lock Freight Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}