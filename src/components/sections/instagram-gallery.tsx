'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const instagramImages = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9fa5219-1e72-4ed2-89bf-618bcaac8f33-defoodtruckclub-nl/assets/images/1p9a6862-1920x-q72-15.jpg",
    alt: "Group of people enjoying food from a food truck.",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9fa5219-1e72-4ed2-89bf-618bcaac8f33-defoodtruckclub-nl/assets/images/e9f2c231-9b83-4d6f-a47e-d51c2ad5c4e6-1920x-q72-17.jpg",
    alt: "Staff in striped shirts serving inside a food truck.",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9fa5219-1e72-4ed2-89bf-618bcaac8f33-defoodtruckclub-nl/assets/images/1p9a7126-1920x-q72-18.jpg",
    alt: "Close-up of french fries being prepared.",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9fa5219-1e72-4ed2-89bf-618bcaac8f33-defoodtruckclub-nl/assets/images/foodtruckfestivals-1920x-q72-16.jpg",
    alt: "Outdoor food truck event scene with people.",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9fa5219-1e72-4ed2-89bf-618bcaac8f33-defoodtruckclub-nl/assets/images/febrian-zakaria-rzloipduzpa-unsplash-1920x-q72-20.jpg",
    alt: "Chef preparing food on a griddle.",
  },
];

const InstagramGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when first set of images is fully scrolled
      const itemWidth = scrollElement.scrollWidth / 2;
      if (scrollPosition >= itemWidth) {
        scrollPosition = 0;
      }
      
      scrollElement.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Duplicate images for seamless loop
  const duplicatedImages = [...instagramImages, ...instagramImages];

  return (
    <section className="bg-primary-background py-16 md:py-24 overflow-hidden">
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 lg:gap-8"
          style={{ width: 'fit-content' }}
        >
          {duplicatedImages.map((image, index) => (
            <a
              key={index}
              href="https://www.instagram.com/defoodtruckclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-[24px] group flex-shrink-0"
              style={{ width: '300px', height: '300px' }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;