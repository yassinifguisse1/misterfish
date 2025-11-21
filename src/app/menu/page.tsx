"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { menuCategories, menuItems } from "@/data/menu";
import { Button } from "@/components/ui/button";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredItems = selectedCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="min-h-screen bg-primary-background">
      {/* Hero Section */}
      <section className="relative bg-[#2E3F72] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-mister-fish-1763049645503.webp?width=8000&height=8000&resize=contain"
              alt="Restaurant Mister Fish"
              width={150}
              height={150}
              className="h-28 w-auto"
            />
          </motion.div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[96px] font-black uppercase text-white leading-[0.9] tracking-[-2px] mb-6">
            <span className="text-[#4A90E2]">Notre Menu</span>
            <br />
            <span className="text-white">Restaurant</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87CEEB] to-[#4A90E2]">
              Mister Fish
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-body text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Découvrez nos plats authentiques préparés avec passion
          </motion.p>
        </motion.div>
        
        {/* Decorative element */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "backOut" }}
          className="absolute top-10 right-10 w-32 h-32 bg-[#4A90E2]/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "backOut" }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-[#87CEEB]/20 rounded-full blur-3xl"
        />
      </section>

      {/* Category Filter */}
      <section className="sticky top-[88px] z-40 bg-primary-background/95 backdrop-blur-md border-b border-primary-text/10 py-6 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-wrap gap-3 justify-center"
          >
            <motion.button
              variants={categoryVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-full font-display text-sm uppercase font-bold transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-[#4A90E2] text-white shadow-lg"
                  : "bg-white text-primary-text hover:bg-[#4A90E2]/20 border border-primary-text/10"
              }`}
            >
              Tout le Menu
            </motion.button>
            {menuCategories.map((category) => (
              <motion.button
                key={category.id}
                variants={categoryVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-display text-sm uppercase font-bold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#4A90E2] text-white shadow-lg"
                    : "bg-white text-primary-text hover:bg-[#4A90E2]/20 border border-primary-text/10"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Menu Items List with Images and Gradient */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            key={selectedCategory}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-1"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div 
                  className={`
                    relative py-6 px-8 rounded-2xl transition-all duration-300 flex items-center gap-6
                    ${index % 2 === 0 
                      ? 'bg-gradient-to-r from-[#87CEEB]/20 via-[#4A90E2]/10 to-transparent hover:from-[#87CEEB]/30 hover:via-[#4A90E2]/20' 
                      : 'bg-gradient-to-r from-[#5DADE2]/20 via-[#3498DB]/10 to-transparent hover:from-[#5DADE2]/30 hover:via-[#3498DB]/20'
                    }
                  `}
                >
                  {/* Dish Image */}
                  {item.image && (
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white shadow-md">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="96px"
                      />
                    </div>
                  )}

                  {item.isSpecial && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="absolute top-4 right-4 bg-[#2E3F72] text-white px-3 py-1 rounded-full text-xs font-display font-bold uppercase"
                    >
                      Spécial
                    </motion.div>
                  )}
                  
                  <div className="flex items-start justify-between gap-6 flex-1 min-w-0">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 mb-2">
                        <h3 className="font-display text-xl lg:text-2xl font-black uppercase text-primary-text leading-tight">
                          {item.name}
                        </h3>
                        <div className="flex-1 border-b-2 border-dotted border-primary-text/20 mb-1.5 group-hover:border-primary-text/40 transition-colors" />
                        <span className="font-display text-2xl lg:text-3xl font-black text-[#4A90E2] whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="font-body text-sm lg:text-base text-primary-text/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 bg-[#4A90E2] rounded-r-full opacity-0 group-hover:h-16 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="font-body text-xl text-primary-text/60">
                Aucun plat trouvé dans cette catégorie
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2E3F72] py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[72px] font-black uppercase text-white leading-[0.95] mb-6">
              Prêt à
              <br />
              <span className="text-[#87CEEB]">Réserver?</span>
            </h2>
            <p className="font-body text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Réservez votre table dès maintenant et venez découvrir nos délicieux plats dans une ambiance chaleureuse
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="bg-[#4A90E2] hover:bg-[#3A7BC8] text-white font-display font-bold uppercase rounded-full text-base px-12 py-6 h-auto shadow-xl"
              >
                <a href="/reservation">Réserver une table</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}