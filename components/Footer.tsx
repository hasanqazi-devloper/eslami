import Link from "next/link";
import { Mail, Phone, Globe2, Sparkles, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0708] text-white border-t border-[#4A1217] pt-8 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Subtle Ambient Background Glows */}
      <div 
        className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-[#E63946]/15 blur-[120px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute top-0 right-1/4 h-80 w-80 rounded-full bg-[#E63946]/10 blur-[130px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-auto overflow-hidden flex items-center justify-center">
                  <img 
                    src="/navbar.png" 
                    alt="Exporter Logo" 
                    className="h-12 sm:h-14 w-auto object-contain brightness-110"
                  />
                </div>
              </div>
            </div>
            
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Cultivating and exporting authentic <strong className="text-[#F4D068]">Super Negin Saffron and Damask Rosebuds</strong> directly from Khorasan organic farms to global B2B importers, cosmetic labs, and wholesale markets.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F4D068] flex items-center gap-2 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FF4D58]" /> Direct Farm Supplier
              </span>
              <p className="text-zinc-300 text-sm font-medium">
                Mashhad Export Hub, Iran • Direct GCC & Worldwide Transit
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F4D068]">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-[#F4D068] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#F4D068] transition-colors">Export Products</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#F4D068] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#rfq" className="hover:text-[#F4D068] transition-colors flex items-center gap-1">
                  <span>Request RFQ</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF4D58]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Agricultural Products */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F4D068]">
              Export Commodities
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <Link href="#products" className="hover:text-[#F4D068] transition-colors">Super Negin Saffron (Grade A+)</Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#F4D068] transition-colors">Organic Damask Rosebuds</Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#F4D068] transition-colors">Bulk Metal & Tin Packaging</Link>
              </li>
              <li>
                <Link href="#rfq" className="hover:text-[#F4D068] transition-colors">Certificate of Analysis (COA)</Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Export Desk */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F4D068]">
              Commercial Desk
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF4D58] shrink-0" />
                <span className="text-zinc-300">export@example.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF4D58] shrink-0" />
                <span className="text-zinc-300">+98 (Export Department)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe2 className="w-4 h-4 text-[#FF4D58] shrink-0 mt-0.5" />
                <span className="text-zinc-300">GCC, Europe & Worldwide Transit</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-[#4A1217] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-[#F4D068] transition-colors">Privacy Terms</Link>
            <Link href="#terms" className="hover:text-[#F4D068] transition-colors">Incoterms & Export Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}