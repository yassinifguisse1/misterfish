import React from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="relative pt-24">
        {/* Hero Section */}
        <section className="relative bg-linear-to-br from-[#2E3F72] to-[#3498DB] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
          </div>
          <div className="container mx-auto max-w-[1440px] px-8 py-24 lg:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display font-black uppercase text-[clamp(3rem,8vw,7rem)] leading-[0.9] mb-6 bg-linear-to-r from-[#87CEEB] to-[#4A90E2] bg-clip-text text-transparent">
                Contactez-Nous
              </h1>
              <p className="text-xl lg:text-2xl leading-relaxed font-body text-white/90">
                Nous sommes là pour répondre à toutes vos questions
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto max-w-[1200px] px-8">
            <h2 className="font-display font-black uppercase text-3xl lg:text-4xl mb-8 bg-linear-to-r from-[#2E3F72] to-[#4A90E2] bg-clip-text text-transparent">
                Mister Fish - HAUT FOUNTY
              </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: <MapPin className="w-8 h-8" strokeWidth={2} />,
                  title: "Adresse",
                  content: "Lot Haut Founty, Al Oulha, Agadir, Maroc"
                },
                {
                  icon: <Phone className="w-8 h-8" strokeWidth={2} />,
                  title: "Téléphone",
                  content: "+212 5 28 38 63 04",
                  link: "tel:+212528386304"
                },
                {
                  icon: <Mail className="w-8 h-8" strokeWidth={2} />,
                  title: "Email",
                  content: "contact@misterfish.ma",
                  link: "mailto:contact@misterfish.ma"
                },
                {
                  icon: <Clock className="w-8 h-8" strokeWidth={2} />,
                  title: "Horaires",
                  content: "Lun-Dim\n12h00 - 01h30"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#4A90E2]">
                  <div className="w-16 h-16 bg-linear-to-br from-[#4A90E2] to-[#87CEEB] rounded-full flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold uppercase text-lg mb-3 text-[#2E3F72]">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a href={item.link} className="text-primary-text leading-relaxed font-body hover:text-[#4A90E2] transition-colors whitespace-pre-line">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-primary-text leading-relaxed font-body whitespace-pre-line">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <h2 className="font-display font-black uppercase text-3xl lg:text-4xl mb-8 bg-linear-to-r from-[#2E3F72] to-[#4A90E2] bg-clip-text text-transparent">
                Mister Fish - DCHEIRA EL JIHADIA
              </h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ">
              
              {[
                {
                  icon: <MapPin className="w-8 h-8" strokeWidth={2} />,
                  title: "Adresse",
                  content: "Lot N 174, lotissement El Mers Dcheira El Jihadia Agadir, Maroc"
                },
                {
                  icon: <Phone className="w-8 h-8" strokeWidth={2} />,
                  title: "Téléphone",
                  content: "+212 6 61 15 47 56",
                  link: "tel:+212661154756"
                },
                {
                  icon: <Mail className="w-8 h-8" strokeWidth={2} />,
                  title: "Email",
                  content: "contact@misterfish.ma",
                  link: "mailto:contact@misterfish.ma"
                },
                {
                  icon: <Clock className="w-8 h-8" strokeWidth={2} />,
                  title: "Horaires",
                  content: "Lun-Dim\n12h00 - 01h30"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#4A90E2]">
                  <div className="w-16 h-16 bg-linear-to-br from-[#4A90E2] to-[#87CEEB] rounded-full flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold uppercase text-lg mb-3 text-[#2E3F72]">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a href={item.link} className="text-primary-text leading-relaxed font-body hover:text-[#4A90E2] transition-colors whitespace-pre-line">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-primary-text leading-relaxed font-body whitespace-pre-line">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Form & Map Section */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
                <h2 className="font-display font-black uppercase text-3xl lg:text-4xl mb-8 bg-linear-to-r from-[#2E3F72] to-[#4A90E2] bg-clip-text text-transparent">
                  Envoyez-nous<br/>un Message
                </h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-sans font-medium text-primary-text mb-2">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#4A90E2]/20 focus:border-[#4A90E2] focus:outline-none transition-colors font-body"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-sans font-medium text-primary-text mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#4A90E2]/20 focus:border-[#4A90E2] focus:outline-none transition-colors font-body"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block font-sans font-medium text-primary-text mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#4A90E2]/20 focus:border-[#4A90E2] focus:outline-none transition-colors font-body"
                      placeholder="+212 6 00 00 00 00"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block font-sans font-medium text-primary-text mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#4A90E2]/20 focus:border-[#4A90E2] focus:outline-none transition-colors font-body"
                      placeholder="Réservation, question, etc."
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-sans font-medium text-primary-text mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#4A90E2]/20 focus:border-[#4A90E2] focus:outline-none transition-colors resize-none font-body"
                      placeholder="Écrivez votre message ici..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-linear-to-r from-[#4A90E2] to-[#3498DB] text-white font-display font-bold uppercase px-8 py-4 rounded-full text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Envoyer le Message
                  </button>
                </form>
              </div>

              {/* Map & Social */}
              <div className="space-y-8">
                {/* Map */}
             

                {/* Social Media & Additional Info */}
                <div className="bg-linear-to-br from-[#2E3F72] to-[#3498DB] rounded-3xl shadow-xl p-8 text-white">
                  <h3 className="font-display font-black uppercase text-2xl mb-6">
                    Suivez-Nous
                  </h3>
                  <div className="flex gap-4 mb-8">
                    <Link
                      href="https://www.instagram.com/misterfishmaroc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-7 h-7" strokeWidth={2} />
                    </Link>
                    <Link
                      href="https://www.facebook.com/profile.php?id=100063887412186"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-7 h-7" strokeWidth={2} />
                    </Link>
                  </div>
                  
                  <div className="space-y-4 font-body text-white/90">
                    <p className="leading-relaxed">
                      Rejoignez notre communauté sur les réseaux sociaux pour découvrir nos plats du jour, nos événements spéciaux et bien plus encore !
                    </p>
                    <div className="pt-4 border-t border-white/20">
                      <p className="font-sans font-bold text-lg text-[#87CEEB] mb-2">
                        Réservations
                      </p>
                      <p className="leading-relaxed">
                        Réservez votre table dès maintenant par téléphone ou via notre formulaire de contact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Image Section */}
        <section className="py-20 lg:py-32 bg-linear-to-br from-[#4A90E2]/10 to-[#87CEEB]/10">
          <div className="container mx-auto max-w-[1200px] px-8">
            <h2 className="font-display font-black uppercase text-center text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] mb-16 bg-linear-to-r from-[#2E3F72] to-[#4A90E2] bg-clip-text text-transparent">
              Venez Nous Voir
            </h2>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
                alt="Restaurant Mister Fish Interior"
                width={1200}
                height={600}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#2E3F72]/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-12 text-white text-center">
                <h3 className="font-display font-black uppercase text-4xl lg:text-5xl mb-4">
                  Bienvenue Chez Mister Fish
                </h3>
                <p className="text-xl font-body text-white/90 max-w-2xl mx-auto">
                  Un cadre chaleureux et convivial pour savourer les meilleurs fruits de mer
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
