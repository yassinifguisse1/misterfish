'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const instagramImages = [
  {
    src: "/images/mister-fish-001.webp",
    alt: "Group of people enjoying food from a food truck.",
  },
  {
    src: "/images/mister-fish-002-.webp",
    alt: "Staff iiin striped shirts serving inside a food truck.",
  },
  {
    src: "/images/mister-fish-003.webp",
    alt: "Close-up of french fries being prepared.",
  },
  {
    src: "/images/mister-fish-004.webp",
    alt: "Outdoor food truck event scene with people.",
  },
  {
    src: "/images/mister-fish-005.webp",
    alt: "Chef preparing food on a griddle.",
  },
  {
    src: "/images/mister-fish-006.webp",
    alt: "Staff iin striped shirts serving inside a food truck.",
  },
  {
    src: "/images/mister-fish-007.webp",
    alt: "Staff in striped shirts serving inside a food truck.",
  },
  {
    src: "/images/mister-fish-008.webp",
    alt: "Staff in striped shirts serving inside a food truck.",
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
            <div key={index} className="block overflow-hidden rounded-3xl group shrink-0" style={{ width: '300px', height: '300px' }}>

           
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;