/**
 * Root Layout - Ana Layout Component
 * 
 * Next.js App Router root layout.
 * Tüm sayfaları sarar ve global provider'ları ekler.
 * 
 * SORUMLULUKLAR:
 * - HTML/Body yapısı
 * - Global CSS import
 * - i18n Provider
 * - AppBar (navigation)
 * - SEO metadata
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { I18nProvider } from '@/i18n/i18n-context';
import { MinimalLanguageSwitcher } from '@/components/layout/MinimalLanguageSwitcher';
import './globals.css';

// Font optimization - Next.js built-in
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // FOUT önleme - Flash of Unstyled Text
  variable: '--font-inter',
});

/**
 * Metadata - SEO için
 * Her sayfa kendi metadata'sını override edebilir
 */
export const metadata: Metadata = {
  title: {
    default: 'Kelami Batuhan - Portfolio',
    template: '%s | Kelami Batuhan', // Sayfa başlığı template'i
  },
  description: 'Kişisel portfolyo websitem - Projelerim, yeteneklerim ve deneyimlerim',
  keywords: ['portfolio', 'web developer', 'software engineer', 'projects'],
  authors: [{ name: 'Kelami Batuhan' }],
  creator: 'Kelami Batuhan',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://yourwebsite.com', // TODO: Gerçek domain ile değiştir
    siteName: 'Kelami Batuhan Portfolio',
    title: 'Kelami Batuhan - Portfolio',
    description: 'Kişisel portfolyo websitem',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelami Batuhan - Portfolio',
    description: 'Kişisel portfolyo websitem',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // TODO: Google Search Console verification
    // google: 'your-google-verification-code',
  },
};

/**
 * RootLayout Component
 * 
 * @param children - Sayfa içeriği (page.tsx)
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* i18n Provider - Tüm uygulamayı sarar */}
        <I18nProvider>
          {/* Language Switcher - Top right corner */}
          <MinimalLanguageSwitcher />
          
          {/* Main Content */}
          <main className="min-h-screen">
            {children}
          </main>
          
          {/* Footer - İsteğe bağlı, gelecekte eklenebilir */}
          {/* <Footer /> */}
        </I18nProvider>
      </body>
    </html>
  );
}
