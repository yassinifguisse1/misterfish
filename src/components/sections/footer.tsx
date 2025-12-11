'use client';

import React from 'react';
import { Link } from '@/lib/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    const t = useTranslations('footer');
    const tNav = useTranslations('nav');
    const tEstablishments = useTranslations('establishments');
    
    const navigationLinks = [
        { name: tNav('home'), href: '/' },
        { name: tNav('menu'), href: '/menu' },
        { name: tNav('about'), href: '/about' },
        { name: tNav('contact'), href: '/contact' },
    ];

    const etablissementLinks = [
        { name: tEstablishments('centreVille'), href: '/etablissement/1' },
        { name: tEstablishments('boulevardCorniche'), href: '/etablissement/2' },
    ];

    return (
        <footer className="relative bg-background text-primary-text pt-20 pb-12 lg:pt-32 lg:pb-16">
                <div className="container px-8 lg:px-20 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-x-8 xl:gap-x-12">
                        {/* Column 1: Logo & Description */}
                        <div className="lg:col-span-1">
                            <Link href="/" className="inline-block mb-6">
                                <Image
                                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-mister-fish-1763049645503.webp?width=8000&height=8000&resize=contain"
                                    alt="Mister Fish Logo"
                                    width={180}
                                    height={180}
                                    className="h-20 w-auto"
                                />
                            </Link>
                            <p className="text-nav-link leading-relaxed mb-6">
                                {t('description')}
                            </p>
                            <div className="flex items-center gap-4">
                                <Link
                                    href="https://www.instagram.com/misterfishmaroc/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="w-10 h-10 rounded-full bg-[#4A90E2]/10 hover:bg-[#4A90E2] flex items-center justify-center transition-colors group"
                                >
                                    <Instagram className="w-5 h-5 text-[#4A90E2] group-hover:text-white transition-colors" strokeWidth={2} />
                                </Link>
                                <Link
                                    href="https://www.facebook.com/profile.php?id=100063887412186&sk=photos" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="w-10 h-10 rounded-full bg-[#4A90E2]/10 hover:bg-[#4A90E2] flex items-center justify-center transition-colors group"
                                >
                                    <Facebook className="w-5 h-5 text-[#4A90E2] group-hover:text-white transition-colors" strokeWidth={2} />
                                </Link>
                            </div>
                        </div>

                        {/* Column 2: Navigation */}
                        <div>
                            <h4 className="font-display text-button uppercase inline-block border-b-2 border-[#4A90E2] pb-2 mb-6">{t('navigation')}</h4>
                            <div className="flex flex-col space-y-3">
                                {navigationLinks.map((link) => (
                                    <Link 
                                        key={link.name} 
                                        href={link.href} 
                                        className="text-nav-link hover:text-[#4A90E2] transition-colors"
                                    >
                                            {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Column 3: Établissements */}
                        <div>
                            <h4 className="font-display text-button uppercase inline-block border-b-2 border-[#4A90E2] pb-2 mb-6">{t('establishments')}</h4>
                            <div className="flex flex-col space-y-3">
                                {etablissementLinks.map((link) => (
                                    <Link 
                                        key={link.name} 
                                        href={link.href} 
                                        className="text-nav-link hover:text-[#4A90E2] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Column 4: Contact */}
                        <div>
                            <h4 className="font-display text-button uppercase inline-block border-b-2 border-[#4A90E2] pb-2 mb-6">{t('contact')}</h4>
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-[#4A90E2] mt-0.5 shrink-0" strokeWidth={2} />
                                    <div className="text-nav-link">
                                        <p>{t('address1')}</p>
                                        
                                        <p>{t('city')}</p>
                                    </div>
                                </div>
                                <Link    
                                    href="tel:+212528386304" 
                                    className="flex items-center gap-3 text-nav-link hover:text-[#4A90E2] transition-colors"
                                >
                                    <Phone className="w-5 h-5 text-[#4A90E2] shrink-0" strokeWidth={2} />
                                    <span>{t('phone1')}</span>
                                    

                                </Link>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-[#4A90E2] mt-0.5 shrink-0" strokeWidth={2} />
                                    <div className="text-nav-link">
                                        <p>{t('address2')}</p>
                                        
                                        <p>{t('city')}</p>
                                    </div>
                                </div>
                                <Link    
                                    href="tel:+212661154756" 
                                    className="flex items-center gap-3 text-nav-link hover:text-[#4A90E2] transition-colors"
                                >
                                    <Phone className="w-5 h-5 text-[#4A90E2] shrink-0" strokeWidth={2} />
                                    <span>{t('phone2')}</span>
                                    

                                </Link>
                             
                                <Link
                                    href="mailto:contact@misterfish.ma" 
                                    className="flex items-center gap-3 text-nav-link hover:text-[#4A90E2] transition-colors"
                                >
                                    <Mail className="w-5 h-5 text-[#4A90E2] shrink-0" strokeWidth={2} />
                                    <span>{t('email')}</span>
                                </Link>
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-[#4A90E2] mt-0.5 shrink-0" strokeWidth={2} />
                                    <div className="text-nav-link">
                                        <p>{t('hours')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-16 lg:mt-24 pt-8 border-t border-primary-text/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm uppercase font-sans tracking-wider text-primary-text/60">
                        <p>{t('copyright')} <Link href="https://www.itagroupe.com" target="_blank" rel="noopener noreferrer" className="text-[#4A90E2]">ITA GROUPE</Link></p>
                        <div className="flex items-center gap-6 text-xs">
                            <Link href="/privacy-policy" className="hover:text-[#4A90E2] transition-colors">
                                {t('privacy')}
                            </Link>
                            <span>•</span>
                            <Link href="/terms" className="hover:text-[#4A90E2] transition-colors">
                                {t('terms')}
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;