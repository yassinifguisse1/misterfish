"use client";

import React, { useEffect, useRef } from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import CookieBanner from "@/components/sections/cookie-banner";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const establishment = {
  id: "2",
  name: "Mister Fish - Nouveau",
  description: "Notre nouvel établissement avec une ambiance moderne",
  address: "456 Boulevard Corniche, Casablanca",
  phone: "+212 6 00 00 00 02",
  email: "nouveau@misterfish.ma",
  hours: "Lun-Dim: 12h00 - 23h00",
  isNew: true,
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hero-image-mister-fish-1763138240726.webp?width=8000&height=8000&resize=contain",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5761460984873!2d-7.589843!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzNScyMy40Ilc!5e0!3m2!1sen!2sma!4v1234567890",
};

const galleryItems = [
  {
    title: "Poissons Frais",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hero-image-mister-fish-1763138240726.webp?width=8000&height=8000&resize=contain",
  },
  {
    title: "Tajines Marocains",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hero-image-mister-fish-1763138240726.webp?width=8000&height=8000&resize=contain",
  },
  {
    title: "Fritures Croustillantes",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hero-image-mister-fish-1763138240726.webp?width=8000&height=8000&resize=contain",
  },
  {
    title: "Plats Combinés",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hero-image-mister-fish-1763138240726.webp?width=8000&height=8000&resize=contain",
  },
  {
    title: "Desserts Maison",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hero-image-mister-fish-1763138240726.webp?width=8000&height=8000&resize=contain",
  },
  {
    title: "Spécialités du Chef",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hero-image-mister-fish-1763138240726.webp?width=8000&height=8000&resize=contain",
  },
];

export default function Etablissement2Page() {
  const pageRef = useRef<HTMLDivElement>(null);
  const maskStrokeRef = useRef<SVGPathElement>(null);
  const strokeRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Animate mask stroke (drawSVG effect)
    if (maskStrokeRef.current && pageRef.current) {
      const pathLength = maskStrokeRef.current.getTotalLength();
      maskStrokeRef.current.style.strokeDasharray = `${pathLength}`;
      maskStrokeRef.current.style.strokeDashoffset = `${pathLength}`;
      
      gsap.to(maskStrokeRef.current, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: pageRef.current,
          start: "-7% top",
          end: "bottom+=20% bottom",
          scrub: 1,
        },
      });
    }

    // Animate stroke dash offset
    if (strokeRef.current && pageRef.current) {
      gsap.fromTo(
        strokeRef.current,
        {
          strokeDashoffset: 1000,
        },
        {
          strokeDashoffset: 0,
          delay: 1,
          scrollTrigger: {
            trigger: pageRef.current,
            start: "-5% top",
            end: "bottom+=20% bottom",
            scrub: 1,
          },
        }
      );
    }

    // Animate text revealers
    const textElements = document.querySelectorAll(".revealer-inner");
    textElements.forEach((el, i) => {
      const isSecondary = el.classList.contains("page-title-secondary");
      gsap.fromTo(
        el,
        {
          yPercent: 120,
        },
        {
          yPercent: 0,
          duration: 1,
          delay: isSecondary ? 0.5 : 0.25,
          scrollTrigger: {
            trigger: el,
            start: "top center",
            end: "bottom top",
            toggleActions: "restart pause resume reset",
          },
        }
      );
    });

    // Animate images
    const imageElements = document.querySelectorAll(".revealer-img");
    imageElements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          yPercent: 10,
          scale: 1.2,
        },
        {
          opacity: 1,
          yPercent: 0,
          scale: 1,
          duration: 2,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "restart pause resume pause",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#EDE8DE] relative page-fade-in" ref={pageRef}>
      <Navigation />
      
      {/* SVG Stroke Background */}
      <svg
        id="stroke-svg"
        preserveAspectRatio="xMidYMid slice"
        fillRule="evenodd"
        strokeMiterlimit="1.5"
        clipRule="evenodd"
        viewBox="0 0 2132 5344"
        className="absolute top-0 left-0 h-full w-full -z-10"
      >
        <defs>
          <mask id="stroke-mask">
            <path
              id="mask-stroke"
              ref={maskStrokeRef}
              fill="none"
              stroke="white"
              strokeWidth="5"
              d="M324.813-52.135C204.651 65.523 458.362 173.469 601.765 189.285c169.887 18.737 410.22-29.224 520.966-82.617 100.731-48.564 154.809-138.521 101.624-165.772-55.127-28.247-560.763 155.569-415.777 300.554 49.997 49.998 502.244 145.465 784.213 38.725 155.512-58.87 188.43-160.067 172.708-189.71-27.518-51.882-247.239 28.961-305.985 65.473-276.859 172.073-515.191 899.522-201.638 1338.54 206.052 288.502 827.828 487.908 785.773 164.706-17.293-132.902-272.903-149.223-367.935-88.64-113.522 72.37-335.863 193.745-231.163 504.727 88.882 264 678.637 273.92 544.444 558.087-147.028 311.346-586.597 149.888-757.298 124.559-379.379-56.295-803.402-136.829-955.247 297.618-59.843 171.216-44.961 489.493 70.837 631.153 162.443 198.723 459.583-129.982 369.648-294.59-96.415-176.467-322.65 22.711-396.282 105.313-97.708 109.612-166.931 399.956-39.123 502.579 267.219 214.564 622.086-28.76 831.909 21.963 561.219 135.67 235.391 679.206 457.463 917.719 221.323 237.708 654.322-95.359 407.084-266.334-358.912-248.2-527.841 403.197-687.761 495.191-241.38 138.854-374.262-119.763-602.689-142.606-73.378-7.337-157.751-.818-224.685 31.794-15.142 7.378-52.177 37.97-69.586 37.97"
            />
          </mask>
        </defs>
        <path
          id="stroke"
          ref={strokeRef}
          stroke="grey"
          mask="url(#stroke-mask)"
          strokeDasharray="20"
          fill="none"
          strokeWidth="5"
          d="M324.813-52.135C204.651 65.523 458.362 173.469 601.765 189.285c169.887 18.737 410.22-29.224 520.966-82.617 100.731-48.564 154.809-138.521 101.624-165.772-55.127-28.247-560.763 155.569-415.777 300.554 49.997 49.998 502.244 145.465 784.213 38.725 155.512-58.87 188.43-160.067 172.708-189.71-27.518-51.882-247.239 28.961-305.985 65.473-276.859 172.073-515.191 899.522-201.638 1338.54 206.052 288.502 827.828 487.908 785.773 164.706-17.293-132.902-272.903-149.223-367.935-88.64-113.522 72.37-335.863 193.745-231.163 504.727 88.882 264 678.637 273.92 544.444 558.087-147.028 311.346-586.597 149.888-757.298 124.559-379.379-56.295-803.402-136.829-955.247 297.618-59.843 171.216-44.961 489.493 70.837 631.153 162.443 198.723 459.583-129.982 369.648-294.59-96.415-176.467-322.65 22.711-396.282 105.313-97.708 109.612-166.931 399.956-39.123 502.579 267.219 214.564 622.086-28.76 831.909 21.963 561.219 135.67 235.391 679.206 457.463 917.719 221.323 237.708 654.322-95.359 407.084-266.334-358.912-248.2-527.841 403.197-687.761 495.191-241.38 138.854-374.262-119.763-602.689-142.606-73.378-7.337-157.751-.818-224.685 31.794-15.142 7.378-52.177 37.97-69.586 37.97"
        />
      </svg>

      <main className="relative pt-24 pb-36 px-4 md:px-6 lg:px-8">
        {/* Header with Revealer Title */}
        <header className="pt-10 px-4 mb-6">
          <h1 className="text-[90px] font-medium leading-[0.8] mx-4 mb-6 tracking-[-0.05em]" style={{ fontFamily: 'Arimo, sans-serif' }}>
            <div className="revealer">
              <div className="revealer-inner">{establishment.name.split(" - ")[0]}</div>
            </div>
            <div className="revealer page-title-secondary opacity-30 pb-4">
              <div className="revealer-inner page-title-secondary">{establishment.name.split(" - ")[1]}</div>
            </div>
          </h1>
        </header>

        {/* Banner Image */}
        <div className="relative  w-full aspect-video md:aspect-21/9 rounded-[32px] md:rounded-[40px] lg:rounded-[48px]  overflow-hidden">
        <div className="flex justify-end absolute z-10 top-0 right-0 bg-primary-background rounded-bl-[32px] md:rounded-bl-[40px] lg:rounded-bl-[48px] p-3">
            <p className="relative p-2 md:p-3 lg:p-4 font-display font-black uppercase leading-[0.75] tracking-[-0.04em] text-[clamp(3rem,10vw,140px)] md:text-[clamp(4rem,11vw,160px)] lg:text-[clamp(5rem,12vw,180px)] text-transparent bg-clip-text bg-linear-to-r from-[#4A90E2] to-[#87CEEB]
            
            
            
            before:content-[''] before:absolute before:w-[60px] before:h-[60px] before:bg-transparent before:-bottom-18 before:-right-3 md:before:-right-10 lg:before:-right-3 before:rounded-tr-[32px] md:before:rounded-tr-[40px] lg:before:rounded-tr-[48px] before:shadow-[16px_-16px_0_0_#EDE8DE]
            
            after:content-[''] after:absolute after:w-[60px] after:h-[60px] after:bg-transparent after:-top-3 after:-left-18   after:rounded-tr-[32px] md:after:rounded-tr-[40px] lg:after:rounded-tr-[48px] after:shadow-[16px_-16px_0_0_#EDE8DE]">
               Mister Fish
            </p>
          </div>
         
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

        {/* Branch Description */}
        <div className="mx-4 mt-12 mb-8 max-w-4xl">
          <p className="text-primary-text text-lg leading-relaxed font-body">
            Bienvenue dans notre nouvel établissement Mister Fish - Nouveau, situé sur le prestigieux Boulevard Corniche de Casablanca. 
            Ce lieu moderne allie l'authenticité de nos recettes traditionnelles à une ambiance contemporaine et chaleureuse. 
            Découvrez nos spécialités de poissons frais, nos tajines marocains et nos plats combinés dans un cadre élégant où 
            chaque détail a été pensé pour votre confort et votre plaisir gastronomique.
          </p>
        </div>

        {/* Gallery Title */}
        <h2 className="text-[2rem] mx-4 mt-12 mb-8 revealer">
          <div className="revealer-inner">Nos Spécialités</div>
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-[1.5fr_1fr_1.5fr] mx-4 gap-8 gap-y-0">
          {galleryItems.map((item, index) => {
            // Calculate grid position based on original pattern
            let gridRow = 1;
            let gridCol = 1;
            
            if (index === 0) { gridRow = 1; gridCol = 1; }
            else if (index === 1) { gridRow = 1; gridCol = 2; }
            else if (index === 2) { gridRow = 2; gridCol = 2; }
            else if (index === 3) { gridRow = 2; gridCol = 3; }
            else if (index === 4) { gridRow = 3; gridCol = 2; }
            else if (index === 5) { gridRow = 3; gridCol = 1; }
            
            return (
              <figure
                key={index}
                className="relative m-0 overflow-hidden"
                style={{
                  gridRow,
                  gridColumn: gridCol,
                }}
              >
                <figcaption className="revealer text-center mb-2 font-sans font-semibold">
                  <div className="revealer-inner">{item.title}</div>
                </figcaption>
                <div className="revealer">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="revealer-img w-full grayscale-10 sepia-10"
                  />
                </div>
              </figure>
            );
          })}
          {/* Spacers */}
          <p className="text-primary-text text-base leading-relaxed font-body flex items-center" style={{ gridRow: 1, gridColumn: 3 }}>
            Découvrez nos spécialités préparées avec des ingrédients frais et sélectionnés avec soin, 
            pour une expérience gustative authentique et savoureuse.
          </p>
          <span className="spacer2" style={{ gridRow: 2, gridColumn: 1 }}></span>
          <span className="spacer3" style={{ gridRow: 3, gridColumn: 3 }}></span>
          <span className="spacer4" style={{ gridRow: 4, gridColumn: 1 }}></span>
            <p className="text-primary-text text-base leading-relaxed font-body flex items-center" style={{ gridRow: 2, gridColumn: 1 }}>
            Notre équipe passionnée met tout en œuvre pour vous offrir une expérience culinaire exceptionnelle. 
            Que vous veniez en famille, entre amis ou pour un dîner romantique, notre établissement vous accueille 
            dans une atmosphère conviviale où la qualité et la fraîcheur de nos produits sont notre priorité. 
            Réservez votre table dès maintenant et laissez-vous séduire par l'authenticité de nos saveurs marocaines.
            </p>
        </div>

        {/* Additional Branch Info */}
        <div className="mx-4 mt-16 mb-8 max-w-4xl">
          <p className="text-primary-text text-lg leading-relaxed font-body">
            Notre équipe passionnée met tout en œuvre pour vous offrir une expérience culinaire exceptionnelle. 
            Que vous veniez en famille, entre amis ou pour un dîner romantique, notre établissement vous accueille 
            dans une atmosphère conviviale où la qualité et la fraîcheur de nos produits sont notre priorité. 
            Réservez votre table dès maintenant et laissez-vous séduire par l'authenticité de nos saveurs marocaines.
          </p>
        </div>

        {/* Contact Info Cards */}
        <section className="py-20 lg:py-32 bg-primary-background mt-20">
          <div className="container mx-auto max-w-[1200px] px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: <MapPin className="w-8 h-8" strokeWidth={2} />,
                  title: "Adresse",
                  content: establishment.address,
                },
                {
                  icon: <Phone className="w-8 h-8" strokeWidth={2} />,
                  title: "Téléphone",
                  content: establishment.phone,
                  link: `tel:${establishment.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: <Mail className="w-8 h-8" strokeWidth={2} />,
                  title: "Email",
                  content: establishment.email,
                  link: `mailto:${establishment.email}`,
                },
                {
                  icon: <Clock className="w-8 h-8" strokeWidth={2} />,
                  title: "Horaires",
                  content: establishment.hours,
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#4A90E2]">
                  <div className="w-16 h-16 bg-linear-to-br from-[#4A90E2] to-[#87CEEB] rounded-full flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold uppercase text-lg mb-3 text-[#2E3F72]">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a href={item.link} className="text-primary-text leading-relaxed font-body hover:text-[#4A90E2] transition-colors">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-primary-text leading-relaxed font-body">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-[400px] mb-12">
              <iframe
                src={establishment.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${establishment.name} Location`}
              ></iframe>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[#4A90E2] hover:bg-[#3A7BC8] text-white font-display font-bold uppercase rounded-full text-base px-8 py-6 h-auto shadow-xl"
              >
                <Link href="/contact">Réserver une table</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white font-display font-bold uppercase rounded-full text-base px-8 py-6 h-auto"
              >
                <Link href="/menu">Voir le Menu</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <CookieBanner />
    </div>
  );
}

