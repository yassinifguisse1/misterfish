import React from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { Fish, Heart, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#2E3F72] to-[#3498DB] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
          </div>
          <div className="container mx-auto max-w-[1440px] px-8 py-24 lg:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display font-black uppercase text-[clamp(3rem,8vw,7rem)] leading-[0.9] mb-6 bg-gradient-to-r from-[#87CEEB] to-[#4A90E2] bg-clip-text text-transparent">
                Notre Histoire
              </h1>
              <p className="text-xl lg:text-2xl leading-relaxed font-body text-white/90">
                Depuis 2015, Mister Fish apporte la fraîcheur de l&apos;océan directement à votre assiette
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto max-w-[1200px] px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <h2 className="font-display font-black uppercase text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] bg-gradient-to-r from-[#2E3F72] to-[#4A90E2] bg-clip-text text-transparent">
                  Une Passion<br/>Pour la Mer
                </h2>
                <div className="space-y-4 text-lg leading-relaxed font-body text-primary-text">
                  <p>
                    Tout a commencé avec une passion simple : offrir les meilleurs produits de la mer dans une ambiance chaleureuse et conviviale. Notre fondateur, passionné par la cuisine marocaine et les trésors de l&apos;océan, a créé Mister Fish pour partager cette passion avec vous.
                  </p>
                  <p>
                    Chaque jour, nous sélectionnons les poissons les plus frais du marché, préparés selon des recettes traditionnelles transmises de génération en génération. Notre engagement envers la qualité et l&apos;authenticité fait de chaque repas une expérience mémorable.
                  </p>
                  <p>
                    Chez Mister Fish, nous croyons que la bonne cuisine commence par de bons ingrédients. C&apos;est pourquoi nous travaillons directement avec des pêcheurs locaux pour garantir la fraîcheur et la qualité de nos produits.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80"
                    alt="Restaurant Mister Fish"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E3F72]/30 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4A90E2] rounded-full flex items-center justify-center shadow-xl">
                  <Fish className="w-16 h-16 text-white" strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-[#4A90E2]/10 to-[#87CEEB]/10">
          <div className="container mx-auto max-w-[1200px] px-8">
            <h2 className="font-display font-black uppercase text-center text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] mb-16 bg-gradient-to-r from-[#2E3F72] to-[#4A90E2] bg-clip-text text-transparent">
              Nos Valeurs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Fish className="w-12 h-12" strokeWidth={2} />,
                  title: "Fraîcheur",
                  description: "Poissons sélectionnés quotidiennement pour garantir une qualité exceptionnelle"
                },
                {
                  icon: <Heart className="w-12 h-12" strokeWidth={2} />,
                  title: "Passion",
                  description: "Un amour authentique pour la cuisine et les saveurs de la mer"
                },
                {
                  icon: <Users className="w-12 h-12" strokeWidth={2} />,
                  title: "Convivialité",
                  description: "Une atmosphère chaleureuse où chacun se sent comme à la maison"
                },
                {
                  icon: <Award className="w-12 h-12" strokeWidth={2} />,
                  title: "Excellence",
                  description: "Un engagement constant vers la qualité et le service impeccable"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#4A90E2]">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#4A90E2] to-[#87CEEB] rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="font-display font-bold uppercase text-2xl text-center mb-4 text-[#2E3F72]">
                    {value.title}
                  </h3>
                  <p className="text-center text-primary-text leading-relaxed font-body">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto max-w-[1200px] px-8">
            <h2 className="font-display font-black uppercase text-center text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] mb-16 bg-gradient-to-r from-[#2E3F72] to-[#4A90E2] bg-clip-text text-transparent">
              Notre Équipe
            </h2>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  name: "Mohamed Alami",
                  role: "Chef & Fondateur",
                  image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80"
                },
                {
                  name: "Fatima Benali",
                  role: "Chef Pâtissière",
                  image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80"
                },
                {
                  name: "Youssef Idrissi",
                  role: "Maître d'Hôtel",
                  image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&q=80"
                }
              ].map((member, index) => (
                <div key={index} className="group relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E3F72] via-[#2E3F72]/50 to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-display font-bold uppercase text-2xl mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[#87CEEB] font-body text-lg">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-[#2E3F72] to-[#3498DB] text-white">
          <div className="container mx-auto max-w-[1200px] px-8 text-center">
            <h2 className="font-display font-black uppercase text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] mb-8">
              Venez Nous Rendre Visite
            </h2>
            <p className="text-xl lg:text-2xl font-body mb-12 max-w-2xl mx-auto text-white/90">
              Découvrez l&apos;expérience Mister Fish et laissez-vous transporter par les saveurs de l&apos;océan
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#87CEEB] text-[#2E3F72] font-display font-bold uppercase px-12 py-6 rounded-full text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Nous Contacter
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
