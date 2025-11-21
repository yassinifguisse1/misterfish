'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const languages = ['Bon appétit', 'Eet smakelijk'];
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
        setIsTransitioning(false);
      }, 300);
    }, 3000);
    return () => clearInterval(timer);
  }, [languages.length]);

  return (
    <section className="relative w-full bg-[EDE8DE] overflow-hidden pt-28 md:pt-30 lg:pt-34">
      <div className="mx-auto sm:px-6   w-full  flex flex-col gap-4 px-4 md:px-6 lg:px-8">

        {/* Top row: 3-column grid with huge headlines and pill */}
        <div className="flex item-start justify-around flex-col md:flex-row gap-2 md:gap-0 border-2 border-red-500">

          <div className="flex justify-start border-2 border-blue-500 lg:justify-start lg:flex-1">
            <h1 className="font-display font-black text-primary-text uppercase leading-[0.75] tracking-[-0.04em] text-[clamp(3rem,10vw,140px)] md:text-[clamp(4rem,11vw,160px)] lg:text-[clamp(5rem,12vw,180px)]">
              Mister
            </h1>
          </div>

          <div className="flex items-center justify-end md:justify-start gap-0 md:mx-4 lg:mx-6 ">
            <div className="relative flex items-center bg-linear-to-r from-[#87CEEB] to-[#4A90E2] rounded-[40px] pl-4 pr-2 py-2 sm:pl-6 sm:pr-2 sm:py-3 md:pl-8 md:pr-3 md:py-4 lg:pl-10 lg:pr-4 lg:py-5 ">
              <div className="relative w-[110px] sm:w-[130px] md:w-[150px] lg:w-[170px] h-[24px] sm:h-[28px] md:h-[32px] lg:h-[36px] pr-2">
                {languages.map((lang, index) => (
                  <span
                    key={index}
                    className={`absolute top-0 left-0 font-body text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium whitespace-nowrap transition-opacity duration-300 ${
                      index === currentLanguageIndex && !isTransitioning
                        ? 'opacity-100'
                        : 'opacity-0'
                    }`}
                  >
                    {lang}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center   w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16  ml-1 sm:ml-2 md:ml-3 shrink-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-mister-fish-1763049645503.webp?width=8000&height=8000&resize=contain"
                  alt="Mister Fish logo"
                  width={42}
                  height={42}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>


        </div>

        {/* Bottom: Wide photo card with generous margins */}
        <div className="card relative w-full max-w-[1400px]k mx-auto clippath">
          {/* Right: "Fish" with sky blue gradient */}
          <div className="flex justify-end absolute z-10 top-0 right-0 bg-primary-background rounded-bl-[32px] md:rounded-bl-[40px] lg:rounded-bl-[48px] p-3">
            <h1 className="relative p-2 md:p-3 lg:p-4 font-display font-black uppercase leading-[0.75] tracking-[-0.04em] text-[clamp(3rem,10vw,140px)] md:text-[clamp(4rem,11vw,160px)] lg:text-[clamp(5rem,12vw,180px)] text-transparent bg-clip-text bg-linear-to-r from-[#4A90E2] to-[#87CEEB]
            
            
            
            before:content-[''] before:absolute before:w-[60px] before:h-[60px] before:bg-transparent before:-bottom-18 before:-right-3 md:before:-right-10 lg:before:-right-3 before:rounded-tr-[32px] md:before:rounded-tr-[40px] lg:before:rounded-tr-[48px] before:shadow-[16px_-16px_0_0_#EDE8DE]
            
            after:content-[''] after:absolute after:w-[60px] after:h-[60px] after:bg-transparent after:-top-3 after:-left-18   after:rounded-tr-[32px] md:after:rounded-tr-[40px] lg:after:rounded-tr-[48px] after:shadow-[16px_-16px_0_0_#EDE8DE]">
              Fish
            </h1>
          </div>
          <div className="curve-left"></div>
          <div className="curve-right"></div>
         
          <div className="relative w-full aspect-video md:aspect-21/9 rounded-[32px] md:rounded-[40px] lg:rounded-[48px]  overflow-hidden">
         
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hero-image-mister-fish-1763138240726.webp?width=8000&height=8000&resize=contain"
              alt="Mister Fish food truck storefront"
              fill
              className="object-cover"
              quality={90}
              priority
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 85vw, 1400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;