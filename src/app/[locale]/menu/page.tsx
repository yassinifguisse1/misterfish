"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { menuCategories, menuItems, MenuItem } from "@/data/menu";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/sections/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LayoutList, Grid3x3, Download } from "lucide-react";

import Footer from "@/components/sections/footer";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"column" | "grid">("grid");

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  // Generate ingredients based on item name/description
  const getIngredients = (item: MenuItem): string[] => {
    const ingredientsMap: Record<string, string[]> = {
      "Soupe du Jour": [
        "Tomates fraîches",
        "Herbes de Provence",
        "Ail",
        "Oignon",
        "Pain maison",
      ],
      "Salade Niçoise": [
        "Thon frais",
        "Haricots verts",
        "Olives",
        "Tomates",
        "Anchois",
        "Œufs",
      ],
      "Bruschetta Trio": [
        "Tomates",
        "Basilic",
        "Champignons",
        "Truffe",
        "Fromage de chèvre",
        "Pain grillé",
      ],
      "Crevettes à l'Ail": [
        "Crevettes fraîches",
        "Ail",
        "Vin blanc",
        "Beurre",
        "Persil",
        "Citron",
      ],
      "Carpaccio de Bœuf": [
        "Bœuf tendre",
        "Roquette",
        "Parmesan",
        "Huile de truffe",
        "Citron",
      ],
      "Salade de Calmars": [
        "Calmars frais",
        "Laitue",
        "Tomates cerises",
        "Vinaigrette citron",
        "Herbes",
      ],
    };

    // Default ingredients if not in map
    if (ingredientsMap[item.name]) {
      return ingredientsMap[item.name];
    }

    // Generate generic ingredients based on category
    const categoryIngredients: Record<string, string[]> = {
      entrees: [
        "Ingrédients frais",
        "Herbes aromatiques",
        "Huile d'olive",
        "Citron",
        "Épices",
      ],
      poissons: [
        "Poisson frais du jour",
        "Citron",
        "Herbes",
        "Huile d'olive",
        "Ail",
        "Beurre",
      ],
      fritures: [
        "Poisson frais",
        "Farine",
        "Huile de friture",
        "Citron",
        "Sel",
        "Poivre",
      ],
      tajines: [
        "Viande tendre",
        "Légumes de saison",
        "Épices marocaines",
        "Oignon",
        "Ail",
        "Gingembre",
      ],
      "plats-combines": [
        "Fruits de mer frais",
        "Riz",
        "Légumes",
        "Épices",
        "Herbes",
        "Citron",
      ],
      desserts: ["Ingrédients de qualité", "Sucre", "Crème", "Fruits frais"],
    };

    return (
      categoryIngredients[item.category] || [
        "Ingrédients frais",
        "Épices",
        "Herbes",
        "Huile d'olive",
      ]
    );
  };

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

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
        ease: [0.4, 0, 0.2, 1] as const,
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

  const downloadPDF = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-primary-background overflow-x-hidden">
      <Navigation />

      {/* Hero Section - Similar to hero.tsx */}
      <section className="relative w-full bg-[#EDE8DE] overflow-hidden pt-28 md:pt-30 lg:pt-34">
        <div className="mx-auto sm:px-6 w-full flex flex-col gap-4 px-4 md:px-6 lg:px-8">
          {/* Top row: 3-column grid with huge headlines and pill */}
          <div className="flex items-center justify-around gap-2 md:gap-0">
            <div className="flex justify-start flex-1">
              <h1 className="font-display font-black text-primary-text uppercase leading-[0.75] tracking-[-0.04em] text-[clamp(3rem,10vw,140px)] md:text-[clamp(4rem,11vw,160px)] lg:text-[clamp(5rem,12vw,180px)]">
                Notre
              </h1>
            </div>

            <div className="flex items-center justify-end md:justify-start gap-0 md:mx-4 lg:mx-6">
              <div className="relative flex items-center bg-linear-to-r from-[#87CEEB] to-[#4A90E2] rounded-[40px] pl-4 pr-2 py-2 sm:pl-6 sm:pr-2 sm:py-3 md:pl-8 md:pr-3 md:py-4 lg:pl-10 lg:pr-4 lg:py-5">
                <div className="relative w-[110px] sm:w-[130px] md:w-[150px] lg:w-[170px] h-[24px] sm:h-[28px] md:h-[32px] lg:h-[36px] pr-2">
                  <span className="absolute top-0 left-0 font-body text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium whitespace-nowrap">
                    Menu Authentique
                  </span>
                </div>

                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 ml-1 sm:ml-2 md:ml-3 shrink-0">
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
          <div className="card relative w-full max-w-[1400px]x mx-auto">
            {/* Right: "Menu" with sky blue gradient */}
            <div className="flex justify-end absolute z-10 top-0 right-0 bg-primary-background rounded-bl-[32px] md:rounded-bl-[40px] lg:rounded-bl-[48px] p-3">
              <h1
                className="relative p-2 md:p-3 lg:p-4 font-display font-black uppercase leading-[0.75] tracking-[-0.04em] text-[clamp(3rem,10vw,140px)] md:text-[clamp(4rem,11vw,160px)] lg:text-[clamp(5rem,12vw,180px)] text-transparent bg-clip-text bg-linear-to-r from-[#4A90E2] to-[#87CEEB]
              before:content-[''] before:absolute before:w-[60px] before:h-[60px] before:bg-transparent before:-bottom-18 before:-right-3 md:before:-right-10 lg:before:-right-3 before:rounded-tr-[32px] md:before:rounded-tr-[40px] lg:before:rounded-tr-[48px] before:shadow-[16px_-16px_0_0_#EDE8DE]
              after:content-[''] after:absolute after:w-[60px] after:h-[60px] after:bg-transparent after:-top-3 after:-left-18 after:rounded-tr-[32px] md:after:rounded-tr-[40px] lg:after:rounded-tr-[48px] after:shadow-[16px_-16px_0_0_#EDE8DE]"
              >
                Menu
              </h1>
            </div>

            <div className="relative w-full aspect-video md:aspect-21/9 rounded-[32px] md:rounded-[40px] lg:rounded-[48px] overflow-hidden">
              <Image
                src="/images/PXL_20251129_115755283.webp"
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

      {/* Category Filter */}

      <section className="sticky top-[95px] lg:top-[125px] z-40 bg-primary-background/95 backdrop-blur-md border-b border-primary-text/10 py-2 md:py-4 lg:py-6 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex items-center justify-between mb-2 md:mb-4">
            <h3 className="font-display text-lg uppercase text-primary-text/60 hidden md:block">
              Affichage
            </h3>
            <div className="flex items-center gap-1 md:gap-2 bg-white rounded-full p-0.5 md:p-1 shadow-md border border-primary-text/10 shrink-0">
              <button
                onClick={() => setViewMode("column")}
                className={`flex items-center gap-1 md:gap-2 px-2 py-1 md:px-4 md:py-2 rounded-full font-display text-xs md:text-sm uppercase font-bold transition-all duration-300 ${
                  viewMode === "column"
                    ? "bg-[#4A90E2] text-white shadow-lg"
                    : "text-primary-text hover:bg-[#4A90E2]/10"
                }`}
              >
                <LayoutList className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">Menu</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1 md:gap-2 px-2 py-1 md:px-4 md:py-2 rounded-full font-display text-xs md:text-sm uppercase font-bold transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-[#4A90E2] text-white shadow-lg"
                    : "text-primary-text hover:bg-[#4A90E2]/10"
                }`}
              >
                <Grid3x3 className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden sm:inline">Plats</span>
              </button>

              <button
                onClick={() => downloadPDF("/menu.pdf", "menu.pdf")}
                className="flex items-center gap-1 md:gap-2 px-2 py-1 md:px-4 md:py-2 rounded-full font-display text-xs md:text-sm uppercase font-bold transition-all duration-300 bg-[#4A90E2] text-white shadow-lg hover:bg-[#3A7BC8]"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Télécharger le Menu</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto scrollbar-hide -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex gap-2 md:gap-3 md:flex-wrap md:justify-center min-w-max md:min-w-0"
            >
              <motion.button
                variants={categoryVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1.5 md:px-6 md:py-3 rounded-full font-display text-xs md:text-sm lg:text-base uppercase font-bold transition-all duration-300 whitespace-nowrap shrink-0 ${
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
                  className={`px-3 py-1.5 md:px-6 md:py-3 rounded-full font-display text-xs md:text-sm uppercase font-bold transition-all duration-300 whitespace-nowrap shrink-0 ${
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
        </div>
      </section>
      {/* Menu Items - Column or Grid View */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl,">
          {viewMode === "column" ? (
            // Column View (List) - 2 Columns
            <motion.div
              key={`column-${selectedCategory}`}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="relative group cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  <div
                    className={`
                      relative py-3 px-8 rounded-2xl transition-all duration-300 flex items-center gap-6 h-full
                      ${
                        index % 2 === 0
                          ? "bg-linear-to-r from-[#87CEEB]/20 via-[#4A90E2]/10 to-transparent hover:from-[#87CEEB]/30 hover:via-[#4A90E2]/20 hover:shadow-lg"
                          : "bg-linear-to-r from-[#5DADE2]/20 via-[#3498DB]/10 to-transparent hover:from-[#5DADE2]/30 hover:via-[#3498DB]/20 hover:shadow-lg"
                      }
                    `}
                  >
                    {/* Dish Image */}
                    {item.image && (
                      <div className="relative w-14 h-14 shrink-0 rounded-xl overflow-hidden bg-whitec shadow-md">
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
                        className="absolute top-0 right-0 bg-[#2E3F72] text-white px-3 py-1 rounded-full text-xs font-display font-bold uppercase"
                      >
                        Spécial
                      </motion.div>
                    )}

                    <div className="flex items-start justify-between gap-6 flex-1 min-w-0">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-3 mb-2">
                          <h3 className="font-display text-xl  font-black uppercase text-primary-text leading-tight">
                            {item.name}
                          </h3>
                          <div className="flex-1 border-b-2 border-dotted border-primary-text/20 mb-1.5 group-hover:border-primary-text/40 transition-colors" />
                          <span className="font-display text-2xl lg:text-2xl font-black text-[#4A90E2] whitespace-nowrap">
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
          ) : (
            // Grid View (Cards) - 3 Columns
            <motion.div
              key={`grid-${selectedCategory}`}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid auto-rows-fr grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-6"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="relative group cursor-pointer h-full"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="flex h-full flex-col bg-white rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-500 hover:scale-[1.02]">
                    {/* Dish Image */}
                    {item.image && (
                      <div className="relative h-[140px] md:h-[150px] overflow-hidden bg-linear-to-br from-[#87CEEB]/20 to-[#4A90E2]/20">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Price Badge */}
                        <div className="absolute top-1 left-1 bg-[#4A90E2] text-white px-2 py-1.5 rounded-full font-display uppercase text-[11px] md:text-[12px] font-bold tracking-wide shadow-lg leading-none">
                          {item.price}
                        </div>
                        {item.isSpecial && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="absolute top-2 right-2 bg-[#2E3F72] text-white px-2 py-1.5 rounded-full text-[11px] md:text-xs font-display font-bold uppercase shadow-lg"
                          >
                            Spécial
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* Dish Info */}
                    <div className="flex flex-1 flex-col p-3">
                      <h3 className="font-display text-start text-[13px] md:text-[15px] lg:text-[16px] font-bold uppercase leading-snug tracking-[-0.03em] text-primary-text line-clamp-2 min-h-[2.6rem]">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-primary-text/70 leading-relaxed text-[12px] md:text-[13px] font-body line-clamp-2 min-h-[2.4rem]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

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

      {/* Ingredients Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-3xl font-black uppercase text-primary-text mb-2">
                  {selectedItem.name}
                </DialogTitle>
                <DialogDescription className="font-body text-lg text-primary-text/70">
                  {selectedItem.description}
                </DialogDescription>
                <div className="mt-4">
                  <span className="font-display text-2xl font-black text-[#4A90E2]">
                    {selectedItem.price}
                  </span>
                </div>
              </DialogHeader>

              

              {selectedItem.image && (
                <div className="mt-6 relative w-full h-auto aspect-video rounded-xl overflow-hidden">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw "
                  />
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

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
              Réservez votre table dès maintenant et venez découvrir nos
              délicieux plats dans une ambiance chaleureuse
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
      <Footer />
    </div>
  );
}
