"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { useTranslations } from 'next-intl';
import useEmblaCarousel from 'embla-carousel-react';

const foodTrucks = [
  {
    name: 'Pizza Amici',
    image: '/images/dish.webp',
  },
  {
    name: "Mrs. Sippy",
    image: '/images/dish.webp',
  },
  {
    name: 'Pasta Foodtruck',
    image: '/images/dish.webp',
  },
  {
    name: 'The Green Bar',
    image: '/images/dish.webp',
  },
  {
    name: 'Gelato Amici',
    image: '/images/dish.webp',
  },
  {
    name: "Drank Catering",
    image: '/images/dish.webp',
  },
];

const FoodtruckCarousel = () => {
    const t = useTranslations('foodtruckCarousel');
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section className="bg-primary-background text-white py-20 md:py-28">
            <div className="container mx-auto">
                <h2 className="text-center font-display text-[40px] md:text-[72px] uppercase leading-[0.95] tracking-[-1px] mb-12 md:mb-16 ">
                    {t('title')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#87CEEB] to-[#4A90E2]">{t('delicious')}</span>
                    <br />
                    {t('dishes')}
                </h2>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex items-center -ml-4">
                            {foodTrucks.map((truck, index) => (
                                <div
                                    className="relative min-w-0 flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] pl-4"
                                    key={index}
                                >
                                    <div
                                        className="transition-all duration-500 ease-in-out"
                                        style={{ 
                                            transform: `scale(${index === selectedIndex ? 1 : 0.85})`,
                                            opacity: index === selectedIndex ? 1 : 0.7
                                        }}
                                    >
                                        <Image
                                            src={truck.image}
                                            alt={truck.name}
                                            width={400}
                                            height={400}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="absolute top-1/2 left-0 sm:left-4 transform -translate-y-1/2 z-10 bg-white text-black rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform"
                        onClick={scrollPrev}
                        aria-label={t('previous')}
                    >
                        <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        className="absolute top-1/2 right-0 sm:right-4 transform -translate-y-1/2 z-10 bg-white text-black rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 transition-transform"
                        onClick={scrollNext}
                        aria-label={t('next')}
                    >
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>

                <div className="flex justify-center items-center space-x-3 mt-8">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                                index === selectedIndex ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
                            }`}
                             aria-label={`${t('goToSlide')} ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="text-center mt-12 md:mt-16">
                    <Link
                        href="/menu"
                        className="inline-block border border-black rounded-full px-8 py-3 font-display uppercase font-bold text-sm tracking-widest hover:bg-whitex text-black hover:text-black transition-colors duration-300"
                    >
                        {t('seeMore')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FoodtruckCarousel;