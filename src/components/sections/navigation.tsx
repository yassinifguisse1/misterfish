"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Removed unused navigation links - only keeping links to pages that actually exist

const MobileNav = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 bg-[#F5F1E8] z-[100] px-6 py-8 overflow-y-auto">
      <div className="flex justify-between items-center mb-10">
        <Link href="/" onClick={onClose} className="flex items-center">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-mister-fish-1763049645503.webp?width=8000&height=8000&resize=contain"
            alt="Restaurant Mister Fish"
            width={160}
            height={160}
            className="h-16 w-auto"
            priority
          />
        </Link>
        <button onClick={onClose} aria-label="Close menu">
          <X className="h-8 w-8 text-primary-text" />
        </button>
      </div>

      <nav className="flex flex-col">
        <Link href="/" onClick={onClose} className="font-sans text-lg font-medium uppercase py-4 border-b border-black/10 w-full text-left">Accueil</Link>
        <Link href="/menu" onClick={onClose} className="font-sans text-lg font-medium uppercase py-4 border-b border-black/10 w-full text-left">Menu</Link>
        <Link href="/plats" onClick={onClose} className="font-sans text-lg font-medium uppercase py-4 border-b border-black/10 w-full text-left">Plats</Link>
        <Link href="/about" onClick={onClose} className="font-sans text-lg font-medium uppercase py-4 border-b border-black/10 w-full text-left">À Propos</Link>
        <Link href="/contact" onClick={onClose} className="font-sans text-lg font-medium uppercase py-4 border-b border-black/10 w-full text-left">Contact</Link>
        <div className="pt-8">
          <Button asChild variant="secondary" className="w-full !bg-[#2E3F72] hover:!bg-[#3A7BC8] text-white font-display font-bold uppercase rounded-full text-sm h-14">
            <Link href="/contact">Réserver une table</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-[#F5F1E8] transition-shadow duration-300",
      isScrolled ? "shadow-lg" : "shadow-none"
    )}>
      <div className="hidden lg:block border-b border-black/10">
        <div className="container mx-auto max-w-[1440px] px-8">
          <div className="flex justify-between items-center py-2 text-primary-text/80 text-xs font-sans">
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-primary-text transition-colors"><Instagram size={16} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary-text transition-colors"><Linkedin size={16} /></a>
            </div>
            <div className="flex items-center gap-6 font-medium tracking-wide">
              <span className="flex items-center gap-2">Ouvert tous les jours : 12h00 - 23h00</span>
              <span className="hidden sm:inline">|</span>
              <Link href="/contact" className="hover:text-primary-text transition-colors">Localisation</Link>
            </div>
          </div>
        </div>
      </div>
      <nav className="container mx-auto max-w-[1440px] px-8">
        <div className="relative flex justify-between items-center h-24">
          <div className="flex-1 flex justify-start items-center">
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/menu" className="text-nav-link uppercase hover:text-[#4A90E2] transition-colors">Menu</Link>
              <Link href="/plats" className="text-nav-link uppercase hover:text-[#4A90E2] transition-colors">Plats</Link>
              <Link href="/about" className="text-nav-link uppercase hover:text-[#4A90E2] transition-colors">À Propos</Link>
            </div>
            <div className="lg:hidden">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-mister-fish-1763049645503.webp?width=8000&height=8000&resize=contain"
                  alt="Restaurant Mister Fish"
                  width={160}
                  height={160}
                  className="h-16 w-auto"
                  priority
                />
              </Link>
            </div>
          </div>

          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex items-center">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-mister-fish-1763049645503.webp?width=8000&height=8000&resize=contain"
                alt="Restaurant Mister Fish"
                width={200}
                height={200}
                className="h-20 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="flex-1 flex justify-end items-center">
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/contact" className="text-nav-link uppercase">Contact</Link>
              <Button asChild variant="secondary" className="!bg-[#2E3F72] hover:!bg-[#3A7BC8] text-white text-button rounded-full px-8 py-5 h-auto">
                <Link href="/contact">Réserver une table</Link>
              </Button>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
                <Menu className="h-8 w-8 text-primary-text" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}