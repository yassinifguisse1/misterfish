'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/lib/navigation';
import { routing } from '@/i18n/routing';
import { Languages } from 'lucide-react';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations('language');
  const router = useRouter();
  // usePathname from next-intl returns pathname without locale prefix
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    // Navigate to the same path with new locale
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  const getLanguageName = (loc: string) => {
    return loc === 'fr' ? t('french') : t('english');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white hover:bg-[#4A90E2]/10 border border-primary-text/10 transition-colors text-sm font-display uppercase"
        aria-label={t('switch')}
      >
        <Languages className="w-4 h-4 text-[#4A90E2]" />
        <span className="hidden sm:inline text-primary-text">{locale.toUpperCase()}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-primary-text/10 py-2 z-50 min-w-[150px]">
            {routing.locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-[#4A90E2]/10 transition-colors ${
                  locale === loc
                    ? 'text-[#4A90E2] font-bold'
                    : 'text-primary-text'
                }`}
              >
                {getLanguageName(loc)}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

