"use client";

import React from 'react';
import Image from 'next/image';

const dishes = [
  {
    name: 'Spaghetti aux Fruits de Mer',
    category: 'Pâtes',
    description: 'Spaghetti frais aux fruits de mer, ail et huile d\'olive',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain',
    price: '18€'
  },
  {
    name: 'Linguine aux Crevettes',
    category: 'Pâtes',
    description: 'Linguine aux crevettes fraîches et tomates cerises',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain',
    price: '20€'
  },
  {
    name: 'Tagliatelle au Saumon',
    category: 'Pâtes',
    description: 'Tagliatelle maison au saumon fumé et crème légère',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain',
    price: '22€'
  },
  {
    name: 'Risotto aux Fruits de Mer',
    category: 'Risottos',
    description: 'Risotto crémeux aux fruits de mer et safran',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain',
    price: '24€'
  },
  {
    name: 'Friture Mixte',
    category: 'Fritures',
    description: 'Assortiment de poissons et fruits de mer frits',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain',
    price: '26€'
  },
  {
    name: 'Tajine de Poisson',
    category: 'Tajines',
    description: 'Tajine traditionnel au poisson et légumes',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain',
    price: '25€'
  },
  {
    name: 'Grillades de Poisson',
    category: 'Grillades',
    description: 'Poisson frais du jour grillé aux herbes',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain',
    price: '28€'
  },
  {
    name: 'Salade de Poulpe',
    category: 'Entrées',
    description: 'Poulpe grillé sur lit de salade fraîche',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain',
    price: '16€'
  },
  {
    name: 'Paella aux Fruits de Mer',
    category: 'Spécialités',
    description: 'Paella traditionnelle aux fruits de mer',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/pasta-dish-spaghetti-1763054312309.png?width=8000&height=8000&resize=contain',
    price: '30€'
  }
];

const categories = ['Tous', 'Entrées', 'Pâtes', 'Fritures', 'Tajines', 'Grillades', 'Risottos', 'Spécialités'];

const DishesGallery = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('Tous');

  const filteredDishes = selectedCategory === 'Tous' 
    ? dishes 
    : dishes.filter(dish => dish.category === selectedCategory);

  return (
    <section className="bg-primary-background py-20 md:py-28">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-display text-[48px] md:text-[90px] lg:text-[120px] uppercase leading-[0.9] tracking-[-2px] mb-6">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] to-[#87CEEB]">Plats</span>
          </h1>
          <p className="text-body-large max-w-3xl mx-auto text-primary-text/80">
            Découvrez notre sélection de plats préparés avec des ingrédients frais et de qualité, 
            inspirés de la cuisine marocaine et méditerranéenne.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-display uppercase text-sm tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#4A90E2] text-white shadow-md scale-105'
                  : 'bg-white text-primary-text hover:bg-[#4A90E2]/20 border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredDishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-500 hover:scale-[1.02] group"
            >
              {/* Dish Image */}
              <div className="relative h-[280px] overflow-hidden bg-gradient-to-br from-[#87CEEB]/20 to-[#4A90E2]/20">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#4A90E2] text-white px-4 py-1.5 rounded-full font-display uppercase text-xs font-bold tracking-wide shadow-lg">
                  {dish.category}
                </div>
              </div>

              {/* Dish Info */}
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-[20px] md:text-[24px] uppercase leading-tight tracking-[-0.5px] text-primary-text">
                    {dish.name}
                  </h3>
                  <span className="font-display text-[20px] md:text-[24px] text-[#4A90E2] font-bold ml-4 whitespace-nowrap">
                    {dish.price}
                  </span>
                </div>
                <p className="text-primary-text/70 leading-relaxed text-[15px] md:text-[16px]">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 md:mt-20">
          <div className="inline-block">
            <h2 className="font-display text-[32px] md:text-[48px] uppercase leading-tight tracking-[-1px] mb-6">
              Envie de réserver?
            </h2>
            <a
              href="/reservation"
              className="inline-block bg-[#4A90E2] hover:bg-[#3A7BC8] text-white rounded-full px-10 py-4 font-display uppercase font-bold text-sm tracking-widest hover:scale-105 hover:shadow-[0_12px_32px_rgba(74,144,226,0.4)] transition-all duration-300"
            >
              Réserver une table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DishesGallery;