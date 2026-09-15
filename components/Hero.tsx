'use client';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#3B070A] via-[#200406] to-[#120203] py-14 lg:py-20 border-b border-[#52090F]">
      
      {/* Background Red Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-[#E63946]/20 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-5 text-center lg:text-left">
            
            {/* Badge */}
            {/* <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C0507] border border-[#F4D068]/45 text-xs font-semibold text-[#F4D068] shadow-[0_0_15px_rgba(244,208,104,0.12)] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FF4D58] animate-pulse" />
                Direct Khorasan Harvest • ISO Certified Export
              </span>
            </div> */}

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Pure Grade-A Iranian Saffron <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE259] via-[#F4D068] to-[#FFA751] drop-shadow-[0_2px_10px_rgba(244,208,104,0.2)]">
                Direct From Farm To Global Importers
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Direct producer supplying lab-tested Super Negin saffron with Crocin power exceeding 270+. Wholesale bulk supply, custom tin packaging, and private labeling under FOB/CIF terms across GCC, Europe, and Asia.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#rfq"
                className="w-full sm:w-auto px-7 py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF4D58] via-[#E63946] to-[#58090E] hover:brightness-110 rounded-xl border border-[#F4D068]/45 shadow-[0_0_20px_rgba(230,57,70,0.4)] transition-all transform hover:-translate-y-0.5 text-center"
              >
                Request Bulk Quote & COA
              </a>

              <a
                href="#products"
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-zinc-200 bg-[#1C0507] hover:bg-[#28070A] border border-[#52090F] hover:border-[#F4D068]/35 rounded-xl transition-all text-center"
              >
                Explore Product Catalog
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#52090F] mt-4">
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#F4D068]">270+</p>
                <p className="text-[11px] text-zinc-300 mt-0.5 font-medium">Crocin Color Power</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white">100%</p>
                <p className="text-[11px] text-zinc-300 mt-0.5 font-medium">Pure Super Negin</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#FF4D58]">GCC / EU</p>
                <p className="text-[11px] text-zinc-300 mt-0.5 font-medium">Direct FOB & CIF</p>
              </div>
            </div>

          </div>

          {/* Right Showcase Card */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
  {/* Soft ambient red backlight to give floating effect on dark BG */}
  <div className="absolute w-72 h-72 bg-[#E63946]/25 blur-[110px] pointer-events-none rounded-full" />

  {/* Clean PNG Showcase Image */}
  <img
    src="/hero.png"
    alt="Eslami Saffron Showcase"
    className="relative z-10 w-full max-w-lg h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-105"
  />
</div>

        </div>
      </div>
    </section>
  );
}