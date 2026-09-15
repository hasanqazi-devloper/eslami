"use client";

import React, { useState } from "react";
import { Send, FileText, CheckCircle, ShieldCheck, Mail, Phone, Globe2, Building2 } from "lucide-react";

export default function RfqSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rfq" className="bg-gradient-to-b from-[#3B070A] via-[#200406] to-[#120203] py-24 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden border-t border-[#4A1217]">
      
      {/* Background Lighting Effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#E63946]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#E63946]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Business Info & Trust Highlights */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F4D068] bg-[#160B0D] border border-[#F4D068]/40 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-[0_0_15px_rgba(244,208,104,0.1)]">
                <FileText className="w-3.5 h-3.5" /> Direct B2B Wholesale Inquiry
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 leading-tight">
                Request Export Quote & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D068] via-white to-[#F4D068]">Lab Samples</span>
              </h2>
              <p className="text-zinc-300 mt-4 text-base leading-relaxed">
                Connect directly with our export division. Get official commercial proforma invoices, phytosanitary specs, and custom bulk packaging details within 24 hours.
              </p>
            </div>

            {/* Guarantees Box */}
            <div className="bg-[#160B0D] border border-[#4A1217] p-6 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-[#F4D068] uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF4D58]" /> Importer Guarantees
              </h3>
              <ul className="space-y-3 text-xs text-zinc-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#FF4D58] shrink-0" />
                  <span>ISO 22000 & HACCP Certified Quality Reports</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#FF4D58] shrink-0" />
                  <span>Free Express Lab Sample Bales for Verified Importers</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#FF4D58] shrink-0" />
                  <span>Flexible Incoterms: FOB, CIF, CIP (GCC, Europe, Asia)</span>
                </li>
              </ul>
            </div>

            {/* Direct Contact Alternatives */}
            <div className="pt-2 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Prefer Direct Contact?</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/989123456789" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#160B0D] border border-[#4A1217] hover:border-[#FF4D58]/50 px-5 py-3 rounded-xl text-xs font-bold text-white transition-all"
                >
                  <Phone className="w-4 h-4 text-[#F4D068]" />
                  <span>WhatsApp Export Desk</span>
                </a>
                <a 
                  href="mailto:export@example.com" 
                  className="flex items-center justify-center gap-2 bg-[#160B0D] border border-[#4A1217] hover:border-[#FF4D58]/50 px-5 py-3 rounded-xl text-xs font-bold text-white transition-all"
                >
                  <Mail className="w-4 h-4 text-[#F4D068]" />
                  <span>Email Commercial Dept.</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: The RFQ Form */}
          <div className="lg:col-span-7 bg-[#160B0D] border border-[#4A1217] p-8 sm:p-10 rounded-3xl shadow-[0_0_30px_rgba(230,57,70,0.15)] relative">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#251013] border border-[#FF4D58] text-[#F4D068] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">RFQ Submitted Successfully</h3>
                <p className="text-zinc-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out. Our international trade representative will contact you with product spec sheets and official pricing within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs text-[#F4D068] underline font-semibold uppercase tracking-wider"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Contact Info Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmad Al-Mansoor"
                      className="w-full bg-[#0A0708] border border-[#4A1217] focus:border-[#FF4D58] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Company Name *
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Global Spices Trading Ltd."
                        className="w-full bg-[#0A0708] border border-[#4A1217] focus:border-[#FF4D58] rounded-xl pl-10 pr-4 py-3 text-sm text-white outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Business Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="import@company.com"
                        className="w-full bg-[#0A0708] border border-[#4A1217] focus:border-[#FF4D58] rounded-xl pl-10 pr-4 py-3 text-sm text-white outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Destination Country / Port *
                    </label>
                    <div className="relative">
                      <Globe2 className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Saudi Arabia (Jeddah Port)"
                        className="w-full bg-[#0A0708] border border-[#4A1217] focus:border-[#FF4D58] rounded-xl pl-10 pr-4 py-3 text-sm text-white outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Product & Quantity Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Product Required *
                    </label>
                    <select
                      required
                      className="w-full bg-[#0A0708] border border-[#4A1217] focus:border-[#FF4D58] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                    >
                      <option value="super-negin">Super Negin Saffron (Grade A+)</option>
                      <option value="damask-rose">Damask Rosebuds & Petals</option>
                      <option value="mixed">Mixed Bulk Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Target Order Volume (KG) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 5 KG, 50 KG, 100 KG"
                      className="w-full bg-[#0A0708] border border-[#4A1217] focus:border-[#FF4D58] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Custom Packaging or Lab Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Mention custom tin packaging, private labeling, or required ISO certificates..."
                    className="w-full bg-[#0A0708] border border-[#4A1217] focus:border-[#FF4D58] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                  ></textarea>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF4D58] via-[#E63946] to-[#680B12] hover:brightness-110 text-white font-bold py-4 px-8 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 border border-[#F4D068]/40 shadow-[0_0_25px_rgba(230,57,70,0.4)]"
                >
                  <Send className="w-4 h-4 text-[#F4D068]" />
                  <span>Submit Wholesale RFQ</span>
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}