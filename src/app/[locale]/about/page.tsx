"use client";

import React, { useState, useEffect } from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import RecentePartijen from "@/components/sections/recente-partijen";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Fish, Heart, Users, Award, ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const branchImages = [
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hero-image-mister-fish-1763138240726.webp?width=8000&height=8000&resize=contain",
      alt: "Mister Fish - Centre Ville",
      title: "Centre Ville"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hero-image-mister-fish-1763138240726.webp?width=8000&height=8000&resize=contain",
      alt: "Mister Fish - Boulevard Corniche",
      title: "Boulevard Corniche"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % branchImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + branchImages.length) % branchImages.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % branchImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [branchImages.length]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative pt-24">
        {/* Hero Section - Similar to hero.tsx */}
        <section className="relative w-full bg-[#EDE8DE] overflow-hidden pt-28 md:pt-30 lg:pt-34">
          <div className="mx-auto sm:px-6 w-full flex flex-col gap-4 px-4 md:px-6 lg:px-8">
            {/* Top row: 3-column grid with huge headlines */}
            <div className="flex items-center justify-around gap-2 md:gap-0">
              <div className="flex justify-start flex-1">
                <h1 className="font-display font-black text-primary-text uppercase leading-[0.75] tracking-[-0.04em] text-[clamp(3rem,10vw,140px)] md:text-[clamp(4rem,11vw,160px)] lg:text-[clamp(5rem,12vw,180px)]">
                  Notre
                </h1>
              </div>
          </div>

            {/* Bottom: Wide photo card with generous margins */}
            <div className="card relative w-full  mx-auto">
              {/* Right: "Histoire" with sky blue gradient */}
              <div className="flex justify-end absolute z-10 top-0 right-0 bg-primary-background rounded-bl-[32px] md:rounded-bl-[40px] lg:rounded-bl-[48px] p-3">
                <h1 className="relative p-2 md:p-3 lg:p-4 font-display font-black uppercase leading-[0.75] tracking-[-0.04em] text-[clamp(3rem,10vw,140px)] md:text-[clamp(4rem,11vw,160px)] lg:text-[clamp(5rem,12vw,180px)] text-transparent bg-clip-text bg-linear-to-r from-[#4A90E2] to-[#87CEEB]
                before:content-[''] before:absolute before:w-[60px] before:h-[60px] before:bg-transparent before:-bottom-18 before:-right-3 md:before:-right-10 lg:before:-right-3 before:rounded-tr-[32px] md:before:rounded-tr-[40px] lg:before:rounded-tr-[48px] before:shadow-[16px_-16px_0_0_#EDE8DE]
                after:content-[''] after:absolute after:w-[60px] after:h-[60px] after:bg-transparent after:-top-3 after:-left-18 after:rounded-tr-[32px] md:after:rounded-tr-[40px] lg:after:rounded-tr-[48px] after:shadow-[16px_-16px_0_0_#EDE8DE]">
                  Histoire
              </h1>
              </div>
              
              <div className="relative w-full aspect-video md:aspect-21/9 rounded-[32px] md:rounded-[40px] lg:rounded-[48px] overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hero-image-mister-fish-1763138240726.webp?width=8000&height=8000&resize=contain"
                  alt="Mister Fish restaurant"
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

        {/* Story Section - About Hamza */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto  px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <h2 className="font-display font-black uppercase text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] bg-linear-to-r from-[#2E3F72] to-[#4A90E2] bg-clip-text text-transparent">
                  Hamza,<br/>Notre Fondateur
                </h2>
                <div className="space-y-4 text-lg leading-relaxed font-body text-primary-text">
                  <p>
                    Tout a commencé avec la vision de Hamza, un passionné de cuisine marocaine et des trésors de l&apos;océan. Depuis le début, Hamza a créé Mister Fish avec une mission simple : offrir les meilleurs produits de la mer dans une ambiance chaleureuse et authentique.
                  </p>
                  <p>
                    Avec son expérience et sa passion pour la gastronomie, Hamza a su créer un lieu unique où tradition et qualité se rencontrent. Chaque jour, il supervise personnellement la sélection des poissons les plus frais du marché, garantissant que chaque plat respecte les standards d&apos;excellence qu&apos;il a établis.
                  </p>
                  <p>
                    Sous la direction de Hamza, Mister Fish est devenu une référence à Agadir, reconnu pour son engagement envers la fraîcheur, l&apos;authenticité et l&apos;hospitalité. Son dévouement à la cuisine et au service client fait de chaque visite une expérience mémorable.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1920-x-1080-px-1763053244453.webp?width=8000&height=8000&resize=contain"
                    alt="Hamza, fondateur de Mister Fish"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#2E3F72]/30 to-transparent"></div>
                </div>
               
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto  px-8">
            <h2 className="font-display font-black uppercase text-center text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] mb-16 bg-linear-to-r from-[#2E3F72] to-[#4A90E2] bg-clip-text text-transparent">
              Notre Équipe
            </h2>
            <AnimatedTestimonials
              testimonials={[
                {
                  quote: "Passionné par la cuisine marocaine et les trésors de l'océan, j'ai créé Mister Fish pour partager cette passion avec vous. Chaque jour, je m'assure que nos clients découvrent les meilleurs produits de la mer dans une ambiance authentique et chaleureuse.",
                  name: "Hamza",
                  designation: "Propriétaire & Fondateur",
                  src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-1920-x-1080-px-1763053244453.webp?width=8000&height=8000&resize=contain"
                },
                {
                  quote: "La pâtisserie est un art qui demande patience et créativité. Chez Mister Fish, je crée des desserts qui complètent parfaitement nos plats de fruits de mer, en utilisant des ingrédients frais et des recettes traditionnelles revisitées.",
                  name: "Fatima Benali",
                  designation: "Chef Pâtissière",
                  src: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80"
                },
                {
                  quote: "L'hospitalité est au cœur de notre service. Mon rôle est de m'assurer que chaque client se sent accueilli comme un membre de la famille et reparte avec des souvenirs inoubliables de leur expérience chez Mister Fish.",
                  name: "Youssef Idrissi",
                  designation: "Maître d'Hôtel",
                  src: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&q=80"
                }
              ]}
              autoplay={true}
            />
          </div>
        </section>

        {/* Restaurant Exploration Section */}
        <section className="py-20 lg:py-32 bg-linear-to-br from-[#4A90E2]/10 to-[#87CEEB]/10">
          <div className="container mx-auto  px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="relative w-full aspect-4/3"
                    >
                      <Image
                        src={branchImages[currentImageIndex].src}
                        alt={branchImages[currentImageIndex].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#2E3F72]/30 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                          <p className="font-display font-bold text-[#2E3F72] text-sm uppercase">
                            {branchImages[currentImageIndex].title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft className="w-6 h-6 text-[#2E3F72]" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Image suivante"
                  >
                    <ChevronRight className="w-6 h-6 text-[#2E3F72]" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                    {branchImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-white w-8"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`Aller à l'image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="font-display font-black uppercase text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] bg-linear-to-r from-[#2E3F72] to-[#4A90E2] bg-clip-text text-transparent">
                  Découvrez<br/>Mister Fish
            </h2>
                <div className="space-y-4 text-lg leading-relaxed font-body text-primary-text">
                  <p>
                    Mister Fish est bien plus qu&apos;un simple restaurant. C&apos;est une expérience culinaire complète qui célèbre les saveurs authentiques de la mer et la tradition marocaine. Depuis notre ouverture, nous avons su créer un lieu où chaque détail compte, de la sélection des ingrédients à l&apos;accueil de nos clients.
                  </p>
                  <p>
                    Notre restaurant se distingue par son ambiance chaleureuse et moderne, où vous pouvez déguster nos spécialités dans un cadre élégant. Que vous veniez pour un déjeuner d&apos;affaires, un dîner en famille ou une célébration spéciale, Mister Fish vous offre une expérience gastronomique inoubliable.
                  </p>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#4A90E2] mt-6">
                    <h3 className="font-display font-bold uppercase text-xl text-[#2E3F72] mb-3">
                      Deux Établissements à Agadir
                    </h3>
                    <p className="text-primary-text leading-relaxed font-body">
                      Pour mieux vous servir, Mister Fish dispose de <strong>deux établissements</strong> dans la ville de Agadir : notre établissement principal au <strong>Centre Ville</strong> et notre nouvel établissement sur le <strong>Boulevard Corniche</strong>. Chaque emplacement offre la même qualité exceptionnelle et le même service attentionné, tout en ayant sa propre personnalité et son ambiance unique.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  icon: <Fish className="w-8 h-8" strokeWidth={2} />,
                  title: "Produits Frais",
                  description: "Sélection quotidienne de poissons et fruits de mer directement des pêcheurs locaux"
                },
                {
                  icon: <Heart className="w-8 h-8" strokeWidth={2} />,
                  title: "Cuisine Authentique",
                  description: "Recettes traditionnelles marocaines revisitées avec passion et créativité"
                },
                {
                  icon: <Users className="w-8 h-8" strokeWidth={2} />,
                  title: "Service Exceptionnel",
                  description: "Une équipe dévouée à votre satisfaction et à votre confort"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-16 h-16 bg-linear-to-br from-[#4A90E2] to-[#87CEEB] rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="font-display font-bold uppercase text-xl mb-3 text-[#2E3F72]">
                    {feature.title}
                  </h3>
                  <p className="text-primary-text leading-relaxed font-body text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RecentePartijen Component */}
        <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
          <RecentePartijen />
          </div>


 
      </main>
      
      <Footer />
    </div>
  );
}
