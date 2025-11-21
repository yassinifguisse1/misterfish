import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const branches = [
  {
    title: 'Siège principal Amsterdam',
    description: 'Notre premier emplacement au cœur d\'Amsterdam. Découvrez l\'ambiance authentique et goûtez nos spécialités.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9fa5219-1e72-4ed2-89bf-618bcaac8f33-defoodtruckclub-nl/assets/images/foodtruck-huren-bedrijfsfeest-yaya-1080x-q72-23.jpg',
    link: '#',
    isNew: false,
  },
  {
    title: 'Rotterdam Centre',
    description: 'Notre tout nouvel établissement ! Fraîchement ouvert à Rotterdam avec la même qualité et le même service auxquels vous êtes habitués.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9fa5219-1e72-4ed2-89bf-618bcaac8f33-defoodtruckclub-nl/assets/images/bedrijfsfeest-catering-porsche-1080x-q72-24.jpg',
    link: '#',
    isNew: true,
  },
];

const RecentePartijen = () => {
  return (
    <section className="bg-background py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <h2 className="font-display text-[2.75rem] md:text-[4.5rem] text-foreground uppercase tracking-tight" style={{ lineHeight: 0.95 }}>
            Nos Établissements
          </h2>
        </div>

        {/* Mobile/Tablet: Horizontal scroll */}
        <div className="lg:hidden flex gap-6 overflow-x-auto pb-8 px-4 sm:px-6 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {branches.map((branch, index) => (
            <Link
              key={index}
              href={branch.link}
              className="group block flex-shrink-0 w-[85vw] max-w-[420px] sm:w-[70vw] sm:max-w-[480px] bg-card rounded-[32px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 transition-all duration-300 ease-in-out flex flex-col relative snap-center"
            >
              {branch.isNew && (
                <span className="absolute top-5 right-5 z-10 bg-primary text-primary-foreground font-display text-[0.65rem] font-bold uppercase px-4 py-2 rounded-full shadow-lg">
                  Nouveau
                </span>
              )}
              <div className="relative w-full h-64 sm:h-72 flex-shrink-0">
                <Image
                  src={branch.image}
                  alt={branch.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-400 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 640px) 85vw, 70vw"
                />
              </div>
              <div className="p-8 sm:p-10 flex flex-col flex-grow text-left">
                <h3 className="font-display text-2xl sm:text-3xl uppercase mb-4 text-card-foreground" style={{ lineHeight: 1 }}>
                  {branch.title}
                </h3>
                <p className="font-body text-base sm:text-lg text-card-foreground/80 leading-relaxed">
                  {branch.description}
                </p>
                <div className="mt-auto pt-6 sm:pt-8">
                  <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-card-foreground transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: Centered flex layout */}
        <div className="hidden lg:flex gap-8 xl:gap-10 justify-center items-stretch px-8">
          {branches.map((branch, index) => (
            <Link
              key={index}
              href={branch.link}
              className="group block flex-shrink-0 w-full max-w-[520px] bg-card rounded-[32px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 transition-all duration-300 ease-in-out flex flex-col relative"
            >
              {branch.isNew && (
                <span className="absolute top-5 right-5 z-10 bg-primary text-primary-foreground font-display text-[0.65rem] font-bold uppercase px-4 py-2 rounded-full shadow-lg">
                  Nouveau
                </span>
              )}
              <div className="relative w-full h-80 flex-shrink-0">
                <Image
                  src={branch.image}
                  alt={branch.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-400 ease-in-out group-hover:scale-105"
                  sizes="520px"
                />
              </div>
              <div className="p-12 flex flex-col flex-grow text-left">
                <h3 className="font-display text-4xl uppercase mb-4 text-card-foreground" style={{ lineHeight: 1 }}>
                  {branch.title}
                </h3>
                <p className="font-body text-xl text-card-foreground/80 leading-relaxed">
                  {branch.description}
                </p>
                <div className="mt-auto pt-8">
                  <ArrowRight className="w-7 h-7 text-card-foreground transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentePartijen;