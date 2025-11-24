'use client';

import Image from "next/image";
import { Instagram } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function ContactCta() {
  const t = useTranslations('contactCta');
  return (
    <section className="bg-background text-primary-text overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 py-20 sm:py-24 lg:py-32">
        
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center gap-10 text-center">
          {/* Logo */}
          <div className="mb-4">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-mister-fish-1763049645503.webp?width=8000&height=8000&resize=contain"
              alt="Mister Fish Logo"
              width={200}
              height={200}
              className="h-20 sm:h-24 w-auto"
            />
          </div>

          {/* Questions Heading */}
          <h2 className="font-display font-black text-primary-text uppercase leading-[0.75] tracking-[-0.04em] text-[clamp(3rem,10vw,140px)] md:text-[clamp(4rem,11vw,160px)] lg:text-[clamp(5rem,12vw,180px)]">
            {t('questions')}
          </h2>

          {/* Contact Buttons */}
          <div className="flex flex-col gap-5 w-full max-w-sm">
            <a 
              href="mailto:info@defoodtruckclub.nl" 
              className="rounded-full font-display font-bold uppercase transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg text-center whitespace-nowrap px-8 py-5 text-base sm:text-lg bg-accent text-accent-foreground"
            >
              info@defoodtruckclub.nl
            </a>
            <a 
              href="tel:+31628074628" 
              className="rounded-full font-display font-bold uppercase transition-all duration-300 ease-in-out hover:scale-105 text-center whitespace-nowrap px-8 py-5 text-base sm:text-lg border-[3px] border-dashed border-border-green text-primary-text hover:bg-border-green/5"
            >
              +212 6000000
            </a>
          </div>
          
          {/* CTA Text */}
          <h3 className="font-display font-black text-6xl sm:text-7xl leading-[0.85] uppercase tracking-tighter mt-6" dangerouslySetInnerHTML={{ __html: t('ringDoorMobile') }} />

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/defoodtruckclub/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram" 
            className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-primary rounded-full border-[3px] border-dashed border-primary-text hover:scale-110 transition-all duration-300 mt-4"
          >
            <Instagram className="w-10 h-10 sm:w-12 sm:h-12 text-primary-text" strokeWidth={2.5} />
          </a>
        </div>

        {/* Desktop Layout - Two Rows */}
        <div className="hidden lg:block max-w-[1400px] mx-auto space-y-16 xl:space-y-20">
          
          {/* Top Row: Questions + Email + Instagram */}
          <div className="flex items-center justify-between gap-8 xl:gap-12">
            
            {/* Left: Questions Heading */}
            <h2 className="font-display font-black text-primary-text uppercase leading-[0.75] tracking-[-0.04em] text-[clamp(4rem,8vw,120px)] whitespace-nowrap shrink-0">
              {t('questions')}
            </h2>

            {/* Center: Email Button */}
            <a
              href="mailto:info@defoodtruckclub.nl"
              className="rounded-full font-display font-bold uppercase transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl text-center text-lg xl:text-xl px-12 xl:px-14 py-6 bg-accent text-accent-foreground shrink-0"
            >
              info@defoodtruckclub.nl
            </a>

            {/* Right: Instagram Icon */}
            <a 
              href="https://www.instagram.com/defoodtruckclub/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="flex items-center justify-center w-32 h-32 xl:w-36 xl:h-36 bg-primary rounded-full border-[3px] border-dashed border-primary-text hover:scale-110 hover:rotate-6 transition-all duration-300 shrink-0"
            >
              <Instagram className="w-14 h-14 xl:w-16 xl:h-16 text-primary-text" strokeWidth={2.5} />
            </a>
          </div>

          {/* Bottom Row: Phone + CTA Text */}
          <div className="flex items-center justify-between gap-8 xl:gap-12">
            
            {/* Left: Phone Button */}
            <a
              href="tel:+31628074628"
              className="rounded-full font-display font-bold uppercase transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl text-center text-lg xl:text-xl px-12 xl:px-14 py-6 border-[3px] border-dashed border-border-green text-primary-text hover:bg-border-green/10 shrink-0"
            >
              +212 60000000
            </a>

            {/* Right: Sonnez à la porte Text */}
            <h3 className="font-display font-black text-primary-text uppercase leading-[0.75] tracking-[-0.04em] text-[clamp(4rem,8vw,120px)] whitespace-nowrap shrink-0">
              {t('ringDoor')}
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}