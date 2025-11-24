"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const ActionButton = ({
  text,
  onClick,
  variant,
}: {
  text: string;
  onClick: () => void;
  variant: "light" | "dark";
}) => {
  const variantClasses = {
    light: {
      bg: "bg-primary-background",
      text: "text-primary-text",
    },
    dark: {
      bg: "bg-secondary",
      text: "text-secondary-foreground",
    },
  };

  return (
    <button
      onClick={onClick}
      className={`group relative h-[42.75px] shrink-0 overflow-hidden rounded-full px-[21.375px] transition-transform hover:scale-105 active:scale-95`}
    >
      <div className={`absolute inset-0 ${variantClasses[variant].bg}`} />
      <div
        className={`relative flex h-full items-center justify-center font-display text-[14.25px] font-bold uppercase tracking-[0.5px] ${variantClasses[variant].text}`}
      >
        <div className="relative h-[17px] overflow-hidden">
          <div className="flex transform-gpu flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
            <span className="flex h-[17px] items-center">{text}</span>
            <span className="flex h-[17px] items-center">{text}</span>
          </div>
        </div>
      </div>
    </button>
  );
};

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        const consent = localStorage.getItem("dfc_cookie_consent");
        if (!consent) {
          setShowBanner(true);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleConsent = (consent: "accepted" | "refused") => {
    if (typeof window !== "undefined") {
      localStorage.setItem("dfc_cookie_consent", consent);
    }
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-100 w-full p-4 animate-in fade-in-0 slide-in-from-bottom-5 duration-500 md:bottom-8 md:left-auto md:right-8 md:w-auto md:max-w-[551px] md:p-0"
      role="dialog"
      aria-live="polite"
      aria-labelledby="cookie-heading"
      aria-describedby="cookie-description"
    >
      <div className="relative flex w-full flex-col items-center gap-y-4 rounded-[28.5px] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.1)] md:flex-row md:items-center md:gap-x-8 md:p-[28.5px]">
        <p
          id="cookie-description"
          className="font-body text-center text-[15.34px] leading-tight text-primary-text md:grow md:text-left"
        >
          <span id="cookie-heading" className="sr-only">
            Consentement aux cookies
          </span>
          Nous utilisons{" "}
          <Link
            href="/privacy-policy"
            className="underline transition-colors hover:text-primary-text/80 hover:no-underline"
          >
            Google Analytics
          </Link>{" "}
          pour analyser notre trafic.
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <ActionButton
            text="Refuser"
            onClick={() => handleConsent("refused")}
            variant="light"
          />
          <ActionButton
            text="Accepter"
            onClick={() => handleConsent("accepted")}
            variant="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;