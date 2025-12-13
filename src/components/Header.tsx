"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/lake-services', label: 'Services' },
    { href: '/harvesting', label: 'Harvesting Focus' },
    { href: '/resources', label: 'Resources' },
    { href: '/blog', label: 'Insights' },
    { href: '/water-raptor', label: 'Water Raptor' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 border-b border-white/10 text-slate-100 backdrop-blur">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo/newlogo.svg?v=1"
                alt="Water Raptor logo"
                width={200}
                height={88}
                className="h-[76px] w-auto md:h-[88px]"
                priority
                unoptimized
              />
            <div className="hidden md:block">
              <p className="text-lg font-medium text-slate-300">Pond & Lake Management</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-200 hover:text-emerald-300 transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact-form"
              className="raptor-claw-marks flex items-center gap-2 rounded-full border border-emerald-500 bg-white px-5 py-2.5 text-sm uppercase tracking-[0.3em] text-slate-950 transition hover:bg-emerald-500 hover:text-white relative"
            >
              <Phone className="h-5 w-5 relative z-10" />
              <span className="relative z-10">Book Us</span>
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-slate-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4 text-base">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-200 hover:text-emerald-300 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact-form"
                className="raptor-claw-marks flex items-center gap-2 rounded-full border border-emerald-500 bg-white px-5 py-3 text-sm uppercase tracking-[0.3em] text-slate-950 transition hover:bg-emerald-500 hover:text-white font-medium relative"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-5 w-5 relative z-10" />
                <span className="relative z-10">Book Us</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
