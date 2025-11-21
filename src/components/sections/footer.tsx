'use client';

import React, { useState } from 'react';

const dienstenLinks1 = [
    { name: 'Louer un foodtruck', href: '/diensten/foodtruck-huren' },
    { name: 'Foodtruck pour fête', href: '/diensten/foodtruck-huren-feest' },
    { name: 'Catering BBQ', href: '/diensten/bbq-catering' },
    { name: 'Catering mariage', href: '/diensten/catering-bruiloft' },
    { name: 'Foodtruck italien', href: '/diensten/italiaanse-foodtruck' },
    { name: 'Catering événements', href: '#' },
    { name: 'Catering fête', href: '#' },
    { name: 'Traiteur festival', href: '#' },
];

const dienstenLinks2 = [
    { name: 'Catering entreprise', href: '/diensten/catering-bedrijfsfeest' },
    { name: 'Catering sur place', href: '/diensten/catering-op-locatie' },
    { name: 'Foodtruck mariage', href: '/diensten/foodtruck-bruiloft' },
    { name: 'Catering italien', href: '/diensten/italiaanse-catering' },
    { name: 'Catering foodtruck', href: '#' },
    { name: 'Festivals foodtruck', href: '#' },
    { name: 'Foodtruck sur place', href: '/diensten/bbq-op-locatie' },
];

const foodtruckLinks1 = [
    { name: 'Foodtruck Pizza', href: '/foodtrucks/pizza-foodtruck' },
    { name: 'Foodtruck Pâtes', href: '/foodtrucks/pasta-foodtruck' },
    { name: 'Foodtruck Asiatique', href: '/foodtrucks/aziatische-foodtruck' },
    { name: 'Foodtruck Panini', href: '/foodtrucks/panini-foodtruck' },
    { name: 'Foodtruck Frites', href: '/foodtrucks/friet-foodtruck' },
];

const foodtruckLinks2 = [
    { name: 'Foodtruck BBQ', href: '/foodtrucks/bbq-foodtruck' },
    { name: 'Foodtruck Sain', href: '/foodtrucks/gezonde-foodtruck' },
    { name: 'Foodtruck Glaces', href: '/foodtrucks/ijs-foodtruck' },
    { name: 'Catering Boissons', href: '/foodtrucks/foodtruck-bar' },
    { name: 'Tous les Foodtrucks', href: '/foodtrucks' },
];

const overOnsLinks = [
    { name: 'À propos', href: '#' },
    { name: 'Équipe', href: '#' },
    { name: 'Cas', href: '#' },
    { name: 'Questions fréquentes', href: '#' },
    { name: 'Contact', href: '#' },
];

const Footer = () => {
    const [cookieConsentVisible, setCookieConsentVisible] = useState(true);

    const handleCookieDecision = () => {
        setCookieConsentVisible(false);
    };

    return (
        <>
            <footer className="relative bg-background text-primary-text pt-20 pb-12 lg:pt-32 lg:pb-16">
                <div className="container px-8 lg:px-20 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-8 xl:gap-x-20">
                        {/* Column 1: Nos Services */}
                        <div>
                            <h4 className="text-button inline-block border-b border-primary-text/30 pb-2 mb-6">Nos Services</h4>
                            <div className="grid grid-cols-2 gap-x-6">
                                <div className="flex flex-col space-y-2">
                                    {dienstenLinks1.map((link) => (
                                        <a key={link.name} href={link.href} className="text-nav-link hover:underline">
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                               <div className="flex flex-col space-y-2">
                                    {dienstenLinks2.map((link) => (
                                        <a key={link.name} href={link.href} className="text-nav-link hover:underline">
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Nos Foodtrucks */}
                        <div>
                            <h4 className="text-button inline-block border-b border-primary-text/30 pb-2 mb-6">Nos Foodtrucks</h4>
                            <div className="grid grid-cols-2 gap-x-6">
                                <div className="flex flex-col space-y-2">
                                    {foodtruckLinks1.map((link) => (
                                        <a key={link.name} href={link.href} className="text-nav-link hover:underline">
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                               <div className="flex flex-col space-y-2">
                                    {foodtruckLinks2.map((link) => (
                                        <a key={link.name} href={link.href} className="text-nav-link hover:underline">
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Column 3: À Propos */}
                        <div>
                             <h4 className="text-button inline-block border-b border-primary-text/30 pb-2 mb-6">À Propos</h4>
                             <div className="flex flex-col space-y-2">
                                {overOnsLinks.map((link) => (
                                    <a key={link.name} href={link.href} className="text-nav-link hover:underline">
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-16 lg:mt-24 pt-8 border-t border-primary-text/20 flex flex-col md:flex-row justify-between items-center text-small uppercase font-sans tracking-wider">
                        <p>CODE PAR DENNIS</p>
                        <p className="mt-2 md:mt-0">2025 © LE CLUB DES FOODTRUCKS B.V.</p>
                    </div>
                </div>
            </footer>

            {cookieConsentVisible && (
                 <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-[100] w-[calc(100%-2rem)] max-w-lg lg:w-[551px] lg:max-w-none">
                    <div className="bg-white rounded-[28.5px] shadow-lg p-5 lg:p-7 w-full">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
                            <p className="text-primary-text text-center lg:text-left text-[15px] leading-snug">
                                Nous utilisons <a href="/privacy-policy" className="underline hover:no-underline">Google Analytics</a> pour analyser notre trafic.
                            </p>
                            <div className="flex items-center gap-2 flex-shrink-0">
                                <button
                                    onClick={handleCookieDecision}
                                    className="text-button px-5 py-3 rounded-full bg-background text-primary-text hover:bg-stone-300 transition-colors"
                                >
                                    Refuser
                                </button>
                                <button
                                    onClick={handleCookieDecision}
                                    className="text-button px-5 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-opacity-90 transition-colors"
                                >
                                    Accepter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Footer;