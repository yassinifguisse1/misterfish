import React from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Establishment data
const establishments = {
  "1": {
    id: "1",
    name: "Mister Fish - Centre Ville",
    description: "Notre établissement principal au cœur de la ville",
    address: "123 Avenue de la Mer, Casablanca",
    phone: "+212 6 00 00 00 01",
    email: "centreville@misterfish.ma",
    hours: "Lun-Dim: 12h00 - 23h00",
    isNew: false,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hero-image-mister-fish-1763138240726.webp?width=8000&height=8000&resize=contain",
  },
  "2": {
    id: "2",
    name: "Mister Fish - Nouveau",
    description: "Notre nouvel établissement avec une ambiance moderne",
    address: "456 Boulevard Corniche, Casablanca",
    phone: "+212 6 00 00 00 02",
    email: "nouveau@misterfish.ma",
    hours: "Lun-Dim: 12h00 - 23h00",
    isNew: true,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/hero-image-mister-fish-1763138240726.webp?width=8000&height=8000&resize=contain",
  },
};

export default function EtablissementPage({
  params,
}: {
  params: { id: string };
}) {
  const establishment = establishments[params.id as keyof typeof establishments];

  if (!establishment) {
    return (
      <div className="min-h-screen bg-primary-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Établissement non trouvé</h1>
          <Link href="/" className="text-[#4A90E2] hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-background">
      <Navigation />
      
      <main className="relative pt-24">
        {/* Hero Section */}
        <section className="relative bg-linear-to-br from-[#2E3F72] to-[#3498DB] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
          </div>
          <div className="container mx-auto max-w-[1440px] px-8 py-24 lg:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {establishment.isNew && (
                <span className="inline-block bg-[#87CEEB] text-[#2E3F72] font-display font-bold uppercase px-6 py-2 rounded-full text-sm mb-6">
                  Nouveau
                </span>
              )}
              <h1 className="font-display font-black uppercase text-[clamp(3rem,8vw,7rem)] leading-[0.9] mb-6 bg-gradient-to-r from-[#87CEEB] to-[#4A90E2] bg-clip-text text-transparent">
                {establishment.name}
              </h1>
              <p className="text-xl lg:text-2xl leading-relaxed font-body text-white/90">
                {establishment.description}
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto max-w-[1200px] px-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={establishment.image}
                alt={establishment.name}
                width={1200}
                height={600}
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E3F72]/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 lg:py-32 bg-primary-background">
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
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5761460984873!2d-7.589843!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzNScyMy40Ilc!5e0!3m2!1sen!2sma!4v1234567890`}
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
    </div>
  );
}

