import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

// This page only exists to redirect root path to default locale
// The middleware should handle this, but this ensures it works during static generation
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}

