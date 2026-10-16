import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { restaurant } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

/**
 * Fraunces (display) + Inter (body), self-optimized by next/font.
 * The CSS variables below are what tailwind.config.ts binds to.
 */
const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['SOFT', 'WONK'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saffronandash.example.com'),
  title: {
    default: `${restaurant.name} — Wood-fire Anatolian kitchen, Portland`,
    template: `%s · ${restaurant.name}`,
  },
  description:
    'Saffron & Ash is a wood-fire Anatolian restaurant on SE Ash Street in Portland. Meze, hand-minced köfte and ember-roasted vegetables, served family style Tuesday through Sunday.',
  keywords: [
    'Anatolian restaurant Portland',
    'Turkish food',
    'wood fire grill',
    'meze',
    'köfte',
    'restaurant reservations',
  ],
  openGraph: {
    title: `${restaurant.name} — Wood-fire Anatolian kitchen`,
    description:
      'Meze, hand-minced köfte and ember-roasted vegetables on SE Ash Street. Dinner Tuesday through Sunday; serpme brunch on Sundays.',
    url: '/',
    siteName: restaurant.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url:
          'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=75',
        width: 1200,
        height: 630,
        alt: 'A candlelit table with a plated meze course at Saffron & Ash',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${restaurant.name} — Wood-fire Anatolian kitchen`,
    description: 'Dinner Tuesday through Sunday on SE Ash Street. Reservations recommended.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-card focus:bg-terracotta focus:px-4 focus:py-2 focus:text-sm focus:text-cream"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
