import type {Metadata, Viewport} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import Image from 'next/image';

import './globals.css';
import {Navbar} from '@/components/navbar';
import {ThemeProvider} from '@/components/providers';

// Configure Geist Sans font
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

// Configure Geist Mono font
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Camargo Legal | Advocacia Trabalhista',
  description: 'Advocacia trabalhista especializada com foco em resultados. Henrique Camargo, advogado trabalhista com experiência em direito do trabalho.',
  keywords: 'advocacia trabalhista, direito do trabalho, advogado trabalhista, Henrique Camargo',
  authors: [{name: 'Henrique Camargo'}],
  creator: 'Henrique Camargo',
  publisher: 'Camargo Legal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Camargo Legal | Advocacia Trabalhista',
    description: 'Advocacia trabalhista especializada com foco em resultados.',
    locale: 'pt_BR',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsappNumber = '5541999155948';
  const message = encodeURIComponent(`Quero saber mais sobre os seus serviços`);
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <html 
      lang="pt-BR" 
      suppressHydrationWarning 
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased texture-bg min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <header>
            <Navbar />
          </header>
          
          <main className="container mx-auto flex-grow">
            {children}
          </main>

          <footer className="mt-auto">
            {/* WhatsApp Floating Button */}
            <a
              href={whatsappURL}
              className="whatsapp-float"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale conosco no WhatsApp"
            >
              <Image
                src="/images/whatsapp.svg"
                alt="WhatsApp"
                width={35}
                height={35}
                priority
                className="whatsapp-icon"
              />
            </a>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
