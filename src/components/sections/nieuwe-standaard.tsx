'use client';

import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

const NieuweStandaard = () => {
  const t = useTranslations('nieuweStandaard');
  return (
    <section className="bg-background text-primary-text overflow-hidden">
      <div className="py-2 md:py-28 ">
        <div className="container">
          <div className="flex items-center justify-center flex-col md:flex-row">

            {/* Logo Column - Mobile: top, Desktop: left with overlap */}
            <div className="">
              {/* Restaurant Logo */}
              <div className="mb-8">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-mister-fish-1763049645503.webp?width=8000&height=8000&resize=contain"
                  alt="Restaurant Mister Fish Logo"
                  width={200}
                  height={200}
                  className="h-24 w-auto"
                />
              </div>

              <h2 className="font-display font-black uppercase text-[3.25rem] sm:text-5xl md:text-[4.5rem] leading-[0.95] tracking-[-1px] mb-8">
                {t('title')}
              </h2>
              <p className='text-lg lg:text-xl  max-w-md'>
               Deux restaurants, une seule promesse : du poisson ultra frais, cuisiné avec savoir faire marocain.
              </p>
            </div>

            {/* Text Column */}

                <div className="font-body text-lg lg:text-xl leading-[1.7] space-y-6 max-w-xl mx-auto md:mx-0 ">
                  <p>
                    {t('paragraph1')}
                  </p>
                  <p>
                    {t('paragraph2')}
                  </p>
                </div>

          </div>
        </div>
      </div>

      {/* Image Part */}
      <div className="pb-20 md:pb-32">
        <div className="w-full">
          <div className="relative overflow-hidden rounded-2xl lg:rounded-[32px]">
            {/* Absolute Logo on Image */}
            <div className="absolute top-0 left-0  bg-primary-background rounded-br-[32px] md:rounded-br-[40px] lg:rounded-br-[48px] 

            before:content-[''] before:z-10 before:absolute before:w-[40px] before:h-[40px] lg:before:w-[60px] lg:before:h-[60px] before:bg-transparent before:top-16 before:left-0 md:before:-right-10 lg:before:top-30 lg:before:left-0 before:rounded-tl-[32px] md:before:rounded-tl-[40px] lg:before:rounded-tl-[48px] before:shadow-[-10px_-9px_0_0_#EDE8DE] lg:before:shadow-[-17px_-11px_0_0_#EDE8DE]
            
          
          
            after:content-[''] after:absolute after:w-[40px] after:h-[40px] lg:after:w-[60px] lg:after:h-[60px]  after:bg-transparent after:top-0 after:left-16 lg:after:top-0 lg:after:left-30 md:after:-right-10  after:rounded-tl-[32px] md:after:rounded-tl-[40px] lg:after:rounded-tl-[48px] after:shadow-[-10px_-10px_0_0_#EDE8DE] lg:after:shadow-[-10px_-18px_0_0_#EDE8DE]
            ">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-mister-fish-1763049645503.webp?width=8000&height=8000&resize=contain"
                alt="Restaurant Mister Fish Logo"
                width={320}
                height={320}
                className="h-16 md:h-30  w-auto z-90 p-[4px]"
              />
            </div>
            
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1920-x-1080-px-1763053244453.webp?width=8000&height=8000&resize=contain"
              alt="Chef standing in front of restaurant with blue and white uniform"
              width={1600}
              height={500}
              className="w-full  object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NieuweStandaard;