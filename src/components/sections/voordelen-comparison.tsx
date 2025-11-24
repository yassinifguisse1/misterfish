"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const MenuItemComponent = ({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: string;
}) => (
  <li className="flex justify-between items-start gap-4 pb-5 border-b border-primary-text/10 last:border-0 last:pb-0">
    <div className="flex-1">
      <h4 className="font-display font-bold text-lg uppercase text-primary-text mb-1">{name}</h4>
      <p className="font-body text-sm text-primary-text/70 leading-relaxed">{description}</p>
    </div>
    <div className="shrink-0 font-display font-black text-lg text-primary-text">{price}</div>
  </li>
);

const VoordelenComparison = () => {
  const t = useTranslations('voordelenComparison');
  
  const starterMenu = [
    {
      name: t('menuItems.soupeDuJour.name'),
      description: t('menuItems.soupeDuJour.description'),
      price: "65 MAD",
    },
    {
      name: t('menuItems.saladeNicoise.name'),
      description: t('menuItems.saladeNicoise.description'),
      price: "85 MAD",
    },
    {
      name: t('menuItems.bruschettaTrio.name'),
      description: t('menuItems.bruschettaTrio.description'),
      price: "75 MAD",
    },
    {
      name: t('menuItems.crevettesAil.name'),
      description: t('menuItems.crevettesAil.description'),
      price: "95 MAD",
    },
    {
      name: t('menuItems.carpaccioBoeuf.name'),
      description: t('menuItems.carpaccioBoeuf.description'),
      price: "110 MAD",
    },
  ];

  const mainCoursesMenu = [
    {
      name: t('menuItems.grilledSeaBass.name'),
      description: t('menuItems.grilledSeaBass.description'),
      price: "185 MAD",
    },
    {
      name: t('menuItems.tagineRoyal.name'),
      description: t('menuItems.tagineRoyal.description'),
      price: "165 MAD",
    },
    {
      name: t('menuItems.steakFrites.name'),
      description: t('menuItems.steakFrites.description'),
      price: "220 MAD",
    },
    {
      name: t('menuItems.paellaMarinara.name'),
      description: t('menuItems.paellaMarinara.description'),
      price: "195 MAD",
    },
    {
      name: t('menuItems.risottoChampignons.name'),
      description: t('menuItems.risottoChampignons.description'),
      price: "145 MAD",
    },
  ];

  // Animation variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4 + custom * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-secondary py-20 lg:py-[120px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-center font-display text-4xl sm:text-5xl lg:text-[72px] font-black uppercase text-white leading-[0.95] mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#87CEEB] to-[#4A90E2]">{t('title')}</span>
            <br />
            {t('restaurant')}
          </h2>
          <p className="text-center font-body text-lg text-white/80 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Starters Menu Card */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="bg-primary-background text-primary-text p-8 sm:p-10 lg:p-12 rounded-[32px] border-[3px] border-dashed border-primary-text/10 shadow-[0_8px_24px_rgba(0,0,0,0.15)] flex flex-col"
          >
            <div className="mb-8 flex justify-center items-center relative">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-mister-fish-1763049645503.webp?width=8000&height=8000&resize=contain"
                alt="Restaurant Mister Fish"
                width={120}
                height={120}
                className="h-20 w-auto"
              />
            </div>
            <h3 className="font-display font-black text-3xl uppercase tracking-wider text-center text-primary-text mb-8 pb-4 border-b-2 border-accent">
              {t('entrees')}
            </h3>
            <ul className="space-y-6 grow">
              {starterMenu.map((item, index) => (
                <motion.div key={item.name} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
                  <MenuItemComponent name={item.name} description={item.description} price={item.price} />
                </motion.div>
              ))}
            </ul>
          </motion.div>

          {/* Main Courses Menu Card */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="bg-[#F4EFEA] text-primary-text p-8 sm:p-10 lg:p-12 rounded-[32px] border-[3px] border-dashed border-primary shadow-[0_8px_24px_rgba(0,0,0,0.15)] flex flex-col"
          >
            <div className="mb-8 flex justify-center items-center relative">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-mister-fish-1763049645503.webp?width=8000&height=8000&resize=contain"
                alt="Restaurant Mister Fish"
                width={120}
                height={120}
                className="h-20 w-auto"
              />
            </div>
            <h3 className="font-display font-black text-3xl uppercase tracking-wider text-center text-primary-text mb-8 pb-4 border-b-2 border-primary">
              {t('plats')}
            </h3>
            <ul className="space-y-6 grow">
              {mainCoursesMenu.map((item, index) => (
                <motion.div key={item.name} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
                  <MenuItemComponent name={item.name} description={item.description} price={item.price} />
                </motion.div>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* See Full Menu Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="bg-linear-to-r from-[#87CEEB] to-[#4A90E2] hover:bg-accent/90 text-primary-text font-display font-bold uppercase rounded-full text-base px-12 py-6 h-auto shadow-xl"
            >
              <Link href="/menu">{t('seeFullMenu')}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VoordelenComparison;