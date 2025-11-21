import React from 'react';
import Image from 'next/image';

interface LogoProps extends React.SVGProps<SVGSVGElement> {}

const KnvbLogo = (props: LogoProps) => (
  <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.9 0-208-93.1-208-208S141.1 48 256 48s208 93.1 208 208-93.1 208-208 208z" />
    <path d="M266.9 146.4c-20-13.4-44.1-13.4-64.1 0-7.3 4.9-15.3 7.2-23.4 7.2-11.2 0-22-4.1-30.8-11.9l-22.1 26.5c16.3 12.1 35.8 18.7 56.3 18.7 19.5 0 38.3-5.9 54.3-17.5l-33.3-39.9c-12.7 8.5-27.9 8.5-40.6 0l-33.1 39.6C163 243.2 207.2 263 256 263c48.8 0 93-19.8 125.1-53.1l-33.1-39.6c-12.7 8.5-27.9 8.5-40.6 0l-33.2 39.9c16 11.6 34.8 17.5 54.3 17.5 20.5 0 40-6.5 56.3-18.7l-22.1-26.5c-8.8 7.8-19.6 11.9-30.8 11.9-8.1 0-16.1-2.4-23.4-7.2zM256 322c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" />
  </svg>
);

const WeLogo = (props: LogoProps) => (
  <svg viewBox="0 0 404.6 123" fill="currentColor" {...props}>
    <path d="M79.3 123H0L39.6 0h79.4l39.7 123h-79.3l-10-30.9H89.3L79.3 123zM99.3 65.6L79.6 6.1 59.9 65.6h39.4zM223.1 94.6V31.3h-52V0h156.4v31.3h-52v63.3h52V123H223.1zM404.6 0v123h-77.5L287.4 57V0h-77.5v123h73L325 71.9V123h79.6V0z" />
  </svg>
);

const TuDelftLogo = (props: LogoProps) => (
  <svg viewBox="0 0 236 62" fill="currentColor" {...props}>
    <path d="M37.31 61.34H22.37V39.26H8.3v22.08H0V0h8.3v31.81h14.07V0h8.3v61.34h-1.36zM50.41 61.34V0h13.25a24.59 24.59 0 0117.82 7.15A22.84 22.84 0 0188.7 28.5v4.33a22.84 22.84 0 01-7.22 21.35 24.59 24.59 0 01-17.82 7.16H50.41zm8.3-8.1h4.95a16.27 16.27 0 0012-4.82 14.88 14.88 0 004.82-12.09V28.5a14.88 14.88 0 00-4.82-12.09 16.27 16.27 0 00-12-4.82H58.71v31.65zM128.58 61.34V39.26h-11.83v22.08h-8.3V0h28.43a29.53 29.53 0 0121.23 8.3c4.7 5.2 7.15 11.9 7.15 20.34a26.8 26.8 0 01-5.74 16.9a21.41 21.41 0 01-16 8.8l18.52 7.9v.8h-11.23l-17.5-7.78h-5.74zm8.3-29.86h8.2a12.8 12.8 0 009.64-3.69 14.3 14.3 0 003.58-10.08 14.54 14.54 0 00-4.04-10.39 13 13 0 00-9.18-3.93h-8.2v28.09zM196.26 61.34V0h8.3v53.24h18.2V61.34h-26.5zM236 8.1v53.24h-8.3V8.1h-14.07V0h36.74v8.1H236z" />
    <path d="M29.13 22.37c-1.12.08-2.26.12-3.42.12a32.32 32.32 0 00-24.3 10.95c-1.35-3 .9-6.44 2-9.64a27.14 27.14 0 0113-11.39A27.32 27.32 0 0129.13 0v22.37z" />
  </svg>
);

const RedBullLogo = (props: LogoProps) => (
  <svg viewBox="0 0 200 100" fill="currentColor" {...props}>
    <path d="M129.6 50.1a25 25 0 11-59.2 0 25 25 0 0159.2 0z" />
    <path d="M63 46.1h-8l-2 1.3-8.8 8.1-1.3.8-1-2.9-.6-6.4 3.7-2.6 3.6-2.4 2.8 1.4c-2.4 1.1-6.7 4-6.7 4s-1.8 1-3.1 1.7c1-1 3.5-2.7 3.5-2.7s2.5-1.9 3.5-2.6S44.7 43 46 42c.8-1 .4-2 .2-2.3a4.5 4.5 0 00-3.3-3.2l-3.2-1.2h-3.3l-2.4-.2-2.7.4-4.2 1.9-2.3 1.3-2.7 2.1-3.2 3.1-4.1 4.9-1.2 1.8-1.5 3.3-.8 4 .2 5.1 1.4 3.5 1.5 2.1 2.3 2 1.2.6 1.3.2h2.5l5.2-1.1 4.5-1.3.6-.2 1.1-.5 6-3.7 9.5-7.1 2.5-2 .5-.8zm-44-1.2c-.3 0-.6.1-.8.2s-.4.3-.5.5-.2.4-.2.7.2.5.4.7.4.3.7.4h.8v-1.1c-.2-.7-.7-1.2-1.3-1.4z" />
    <path d="M181.1 53.9l-1.3-.8-8.8-8.1-2-1.3h-8l.5.8 2.5 2 9.5 7.1 6 3.7 1 .5.7.2 4.5 1.3 5.2 1.1h2.6l1.2-.2 1.2-.6 2.3-2 1.5-2.1 1.4-3.5.2-5.1-.8-4-1.5-3.3-1.2-1.8-4-4.9-3.2-3.1-2.7-2.1-2.3-1.3-4.2-2-2.7-.4h-2.3l-2.5.2h-3.3l-3.2 1.2a4.5 4.5 0 00-3.3 3.2c-.2.3-.6 1.3.2 2.3 1.3 1 2.7 1.9 4 2.8s2.5 1.9 3.5 2.6 3.5 2.7 3.5 2.7c-1.3-.8-3-1.7-3-1.7s-4.4-2.9-6.8-4l2.8-1.4 3.6 2.4 3.7 2.6-.6 6.4-1 2.9zm-44-1.2c-.3 0-.6-.1-.8-.2s-.4-.3-.5-.5-.2-.4-.2-.7.2-.5.4-.7.4-.3.7-.4h.8v1.1c-.2.7-.7 1.2-1.3 1.4z" />
  </svg>
);

const DeBijenkorfLogo = (props: LogoProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm8.625 16.5L12 20.25 3.375 16.5v-9L12 3.75l8.625 3.75v9z" />
  </svg>
);

const SiemensLogo = (props: LogoProps) => (
  <svg viewBox="0 0 210 32" fill="currentColor" {...props}>
    <path d="M37.9 1.9c-8.9 0-16.1 7.2-16.1 16.1s7.2 16.1 16.1 16.1S54 26.9 54 18 46.8 1.9 37.9 1.9zM37.9 28C31 28 25.6 22.6 25.6 18c0-4.7 3.4-9.9 8.3-9.9h.1c4.7 0 8.3 4.2 8.3 8.8 0 4.7-5.4 11.1-12.4 11.1zM65.4 33.6h-7.6V.4h7.6v33.2zM98.6 33.6h-7.6l-13.6-18v18h-7.6V.4h7.6l13.6 18V.4h7.6v33.2zM128.5 33.6h-19.1V.4h19.1v6.3h-11.5v8.2h10.4v6.2h-10.4v6.2h11.5v6.3zM153.2 33.6h-7.6V7.4H134V.4h30.8v7h-11.6v26.2zM178.6 33.6c-8.9 0-16.1-7.2-16.1-16.1S169.7 1.9 178.6 1.9s16.1 7.2 16.1 16.1-7.3 15.6-16.1 15.6zm0-25.7c-5.4 0-9.8 4.4-9.8 9.8s4.4 9.8 9.8 9.8 9.8-4.4 9.8-9.8c0-5.4-4.4-9.8-9.8-9.8zM208.5 33.6h-7.6V.4h7.6v33.2zM10.1 18C10.1 8.1 18.2 0 28.1 0h.1c5.5 0 10 2.5 10 2.5l-3.3 5.4s-3.4-1.6-6-1.6c-5.9 0-10.7 4.8-10.7 10.7S19 29.5 24.9 29.5c2.6 0 6-1.6 6-1.6l3.3 5.4s-4.5 2.5-10 2.5h-.1C18.2 36 10.1 27.9 10.1 18z" />
  </svg>
);

const logoData = [
  { name: 'KNVB', component: KnvbLogo },
  { name: 'WE', component: WeLogo },
  { name: 'TU Delft', component: TuDelftLogo },
  { name: 'Red Bull', component: RedBullLogo },
  { name: 'De Bijenkorf', component: DeBijenkorfLogo },
  { name: 'Siemens', component: SiemensLogo },
  { name: 'Formula 1', component: null },
];

const ClientLogos = () => {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-start md:justify-around gap-x-12 md:gap-x-8 lg:gap-x-16 overflow-x-auto snap-x snap-mandatory md:overflow-visible no-scrollbar">
          {logoData.map(({ name, component: Component }) => (
            <div
              key={name}
              className="flex-shrink-0 snap-center w-2/5 md:w-auto px-4 md:px-0"
            >
              <div className="group flex justify-center opacity-60 hover:opacity-100 transform hover:scale-105 transition-all duration-300">
                {Component ? (
                  <Component aria-label={name} className="h-10 lg:h-12 w-auto" />
                ) : (
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a9fa5219-1e72-4ed2-89bf-618bcaac8f33-defoodtruckclub-nl/assets/images/logo-f1-13.png"
                    alt="Formula 1"
                    width={136}
                    height={48}
                    className="h-10 lg:h-12 w-auto filter grayscale"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;