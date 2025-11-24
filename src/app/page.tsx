import { redirect } from 'next/navigation';

// Redirect root path to default locale
// This works during static generation and complements the middleware
export default function RootPage() {
  redirect('/fr');
}

