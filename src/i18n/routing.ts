import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['fr', 'en'],

  // Used when no locale matches
  defaultLocale: 'fr',
  
  // Always prefix the locale in the URL (including default locale)
  localePrefix: 'always'
});

