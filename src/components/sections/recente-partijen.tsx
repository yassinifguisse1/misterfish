'use client';

import Image from 'next/image';
import { Link } from '@/lib/navigation';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

const RecentePartijen = () => {
  const t = useTranslations('recentePartijen');
  
  const establishments = [
    {
      id: '1',
      title: t('establishments.centreVille.title'),
      description: t('establishments.centreVille.description'),
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hero-image-mister-fish-1763138240726.webp?width=8000&height=8000&resize=contain',
      link: '/etablissement/1',
      isNew: false,
    },
    {
      id: '2',
      title: t('establishments.nouveau.title'),
      description: t('establishments.nouveau.description'),
      image: '/images/misterfishresto.jpg',
      link: '/etablissement/2',
      isNew: true,
    },
  ];
  return (
    <section className="bg-background py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <h2 className="font-display text-[2.75rem] md:text-[4.5rem] text-foreground uppercase tracking-tight" style={{ lineHeight: 0.95 }}>
            {t('title')}
          </h2>
        </div>

        {/* Stacked on mobile, row on md+ */}
        <div className="flex flex-col md:flex-row gap-8 xl:gap-10 justify-center items-stretch w-full">
          {establishments.map((establishment, index) => (
            <Link
              key={establishment.id}
              href={establishment.link}
              className="group w-full max-w-[520px] bg-card rounded-4xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 transition-all duration-300 ease-in-out flex flex-col relative mx-auto"
            >
              {establishment.isNew && (
                <span className="absolute top-5 right-5 z-10 bg-[#87CEEB] text-[#2E3F72] font-display text-[0.65rem] font-bold uppercase px-4 py-2 rounded-full shadow-lg">
                  {t('new')}
                </span>
              )}
              <div className="relative w-full h-60 md:h-80 shrink-0">
                <Image
                  src={establishment.image}
                  alt={establishment.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-400 ease-in-out group-hover:scale-105"
                  sizes="520px"
                />
              </div>
              <div className="p-6 md:p-12 flex flex-col grow text-left">
                <h3 className="font-display text-4xl uppercase mb-4 text-card-foreground" style={{ lineHeight: 1 }}>
                  {establishment.title}
                </h3>
                <p className="font-body text-xl text-card-foreground/80 leading-relaxed">
                  {establishment.description}
                </p>
                <div className="mt-auto pt-8">
                  <ArrowRight className="w-7 h-7 text-card-foreground transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentePartijen;