import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  // Simple 404 page for invalid routes outside locale structure
  // The [locale]/not-found.tsx handles 404s within valid locales
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#EDE8DE] flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="mb-8">
            <h1 className="font-display font-black text-[8rem] leading-[0.8] text-transparent bg-clip-text bg-linear-to-r from-[#4A90E2] to-[#87CEEB]">
              404
            </h1>
          </div>
          <div className="mb-8 flex justify-center">
            <div className="relative w-24 h-24">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-mister-fish-1763049645503.webp?width=8000&height=8000&resize=contain"
                alt="Mister Fish Logo"
                fill
                className="object-contain opacity-20"
              />
            </div>
          </div>
          <h2 className="font-display font-black uppercase text-4xl leading-tight mb-6 text-[#2E3F72]">
            Page Non Trouvée
          </h2>
          <p className="font-body text-lg text-[#2E3F72]/70 mb-8">
            La page que vous recherchez n'existe pas.
          </p>
          <Link
            href="/fr"
            className="inline-block px-8 py-4 bg-[#4A90E2] hover:bg-[#3A7BC8] text-white font-display font-bold uppercase rounded-full transition-colors"
          >
            Retour à l'Accueil
          </Link>
        </div>
      </body>
    </html>
  );
}

