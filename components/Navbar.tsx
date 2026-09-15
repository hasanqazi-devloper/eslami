'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#3B070A]/90 backdrop-blur-md border-b border-[#52090F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
         <Link href="/" className="flex items-center group">
  <img 
    src="/navbar.png" 
    alt="Eslami Saffron Logo" 
    className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105" 
  />
</Link>

          {/* Desktop Navigation (Simplified Links) */}
          <nav className="hidden md:flex items-center gap-7">
            <Link href="#products" className="text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-[#F4D068] transition-colors">
              Products
            </Link>
            <Link href="#quality" className="text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-[#F4D068] transition-colors">
              Quality
            </Link>
            <Link href="#logistics" className="text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-[#F4D068] transition-colors">
              Logistics
            </Link>
            <Link href="#testimonials" className="text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-[#F4D068] transition-colors">
              Reviews
            </Link>
            <Link href="#about" className="text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-[#F4D068] transition-colors">
              About
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/989000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-zinc-200 hover:text-white bg-[#1C0507] hover:bg-[#28070A] border border-[#52090F] hover:border-[#F4D068]/35 rounded-xl transition-all"
            >
              WhatsApp
            </a>

            <a
              href="#rfq"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF4D58] via-[#E63946] to-[#58090E] hover:brightness-110 rounded-xl border border-[#F4D068]/45 shadow-[0_0_15px_rgba(230,57,70,0.35)] transition-all transform hover:-translate-y-0.5"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-zinc-200 hover:text-white bg-[#1C0507] border border-[#52090F]"
            aria-label="Toggle Navigation"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#200406] border-b border-[#52090F] px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2.5">
            <Link href="#products" onClick={() => setIsOpen(false)} className="text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-[#F4D068]">
              Products
            </Link>
            <Link href="#quality" onClick={() => setIsOpen(false)} className="text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-[#F4D068]">
              Quality
            </Link>
            <Link href="#logistics" onClick={() => setIsOpen(false)} className="text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-[#F4D068]">
              Logistics
            </Link>
            <Link href="#testimonials" onClick={() => setIsOpen(false)} className="text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-[#F4D068]">
              Reviews
            </Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="text-xs font-semibold uppercase tracking-wider text-zinc-200 hover:text-[#F4D068]">
              About
            </Link>
          </nav>
          <div className="pt-2 flex gap-2">
            <a
              href="https://wa.me/989000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 text-center py-2 text-xs font-semibold text-zinc-200 bg-[#1C0507] border border-[#52090F] rounded-xl"
            >
              WhatsApp
            </a>
            <a
              href="#rfq"
              onClick={() => setIsOpen(false)}
              className="w-1/2 text-center py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF4D58] to-[#E63946] rounded-xl border border-[#F4D068]/40"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}