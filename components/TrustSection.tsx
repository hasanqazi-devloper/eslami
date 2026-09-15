'use client';

export default function TrustSection() {
  const trustFeatures = [
    {
      title: '100% Direct Farm Traceability',
      description: 'Sourced exclusively from Qaenat organic harvests with full batch origin tracking for raw purity.',
      badge: 'Zero Intermediaries',
      icon: (
        <svg className="w-6 h-6 text-[#F4D068]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'ISO 22000 & HACCP Certified',
      description: 'Every consignment undergoes strict lab analysis verifying Crocin (>270), Safranal, and Picrocrocin levels.',
      badge: 'Certified Quality',
      icon: (
        <svg className="w-6 h-6 text-[#FF4D58]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Guaranteed CIF / FOB Air Freight',
      description: 'Customs-ready export packaging with express delivery across GCC, European Union, and Asian ports.',
      badge: 'Worldwide Shipping',
      icon: (
        <svg className="w-6 h-6 text-[#F4D068]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
  ];

  return (
    <section id="quality" className="relative py-20 bg-[#0E0A0B] border-b border-[#2A1215] overflow-hidden">
      
      {/* Background Separation Overlay: Subtle Charcoal Grid & Soft Side-Light */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E63946]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#1A0E10] border border-[#FF4D58]/30 text-xs font-semibold text-[#FF4D58] uppercase tracking-widest">
            International Trade Assurance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Global Importers Trust <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE259] via-[#F4D068] to-[#FFA751]">
              Eslami Saffron Compliance
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            We adhere strictly to international agricultural standards, eliminating procurement risk with guaranteed batch-tested purity.
          </p>
        </div>

        {/* Feature Cards Grid (Deep Dark Background for Visual Contrast) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {trustFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl bg-[#140D0E] hover:bg-[#1A1012] border border-[#2A1215] hover:border-[#FF4D58]/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#221214] border border-[#3A181C] flex items-center justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#1F1113] text-zinc-400 border border-[#3A181C]">
                  {feature.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-[#F4D068] transition-colors">
                {feature.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 pt-4 border-t border-[#221214] flex items-center gap-2 text-xs font-semibold text-[#FF4D58] group-hover:translate-x-1 transition-transform">
                <span>Verification Specs</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Proof Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#170E10] via-[#1F1113] to-[#170E10] border border-[#3A181C] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FF4D58]/10 border border-[#FF4D58]/30 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-[#FF4D58]">COA</span>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Need Official ISO 3632 Laboratory Analysis?</p>
              <p className="text-xs text-zinc-400">Request current crop batch certificates with custom RFQ submissions.</p>
            </div>
          </div>

          <a
            href="#rfq"
            className="shrink-0 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#2A1215] hover:bg-[#38181C] border border-[#FF4D58]/40 rounded-xl transition-all"
          >
            Request Recent COA Report
          </a>
        </div>

      </div>
    </section>
  );
}