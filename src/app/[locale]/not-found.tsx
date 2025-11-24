'use client';

import { Link } from '@/lib/navigation';
import Image from 'next/image';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Home, Menu, Fish } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('notFound');
  
  return (
    <div className="min-h-screen bg-primary-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-4 py-20 lg:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="font-display font-black text-[clamp(8rem,20vw,16rem)] leading-[0.8] text-transparent bg-clip-text bg-linear-to-r from-[#4A90E2] to-[#87CEEB]">
              404
            </h1>
          </div>

          {/* Fish Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-mister-fish-1763049645503.webp?width=8000&height=8000&resize=contain"
                alt="Mister Fish Logo"
                fill
                className="object-contain opacity-20"
              />
            </div>
          </div>

          {/* Error Message */}
          <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,4rem)] leading-tight mb-6 text-primary-text">
            {t('title')}
          </h2>
          
          <p className="font-body text-lg md:text-xl text-primary-text/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('message')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              className="bg-[#4A90E2] hover:bg-[#3A7BC8] text-white font-display font-bold uppercase rounded-full px-8 py-6 h-auto text-base shadow-lg"
            >
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                {t('home')}
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white font-display font-bold uppercase rounded-full px-8 py-6 h-auto text-base"
            >
              <Link href="/menu" className="flex items-center gap-2">
                <Menu className="w-5 h-5" />
                {t('menu')}
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-16 pt-8 border-t border-primary-text/20">
            <p className="font-body text-sm text-primary-text/60 mb-4 uppercase tracking-wider">
              {t('popular')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/about" 
                className="text-nav-link hover:text-[#4A90E2] transition-colors font-body"
              >
                À Propos
              </Link>
              <span className="text-primary-text/30">•</span>
              <Link 
                href="/contact" 
                className="text-nav-link hover:text-[#4A90E2] transition-colors font-body"
              >
                Contact
              </Link>
              <span className="text-primary-text/30">•</span>
              <Link 
                href="/etablissement/1" 
                className="text-nav-link hover:text-[#4A90E2] transition-colors font-body"
              >
                Centre Ville
              </Link>
              <span className="text-primary-text/30">•</span>
              <Link 
                href="/etablissement/2" 
                className="text-nav-link hover:text-[#4A90E2] transition-colors font-body"
              >
                Boulevard Corniche
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

