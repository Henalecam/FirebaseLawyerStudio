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
    title: 'Camargo Legal - Escritório de Advocacia Trabalhista',
    description: 'Especialistas em direito trabalhista. Protegendo seus direitos, garantindo seu futuro. Agende uma análise gratuita do seu caso!',
    url: 'https://firebase-lawyer-studio.vercel.app/',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: 'https://firebase-lawyer-studio.vercel.app/images/camargolegal.png',
        width: 1200,
        height: 630,
        alt: 'Camargo Legal Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Camargo Legal - Escritório de Advocacia Trabalhista',
    description: 'Especialistas em direito trabalhista. Protegendo seus direitos, garantindo seu futuro. Agende uma análise gratuita do seu caso!',
    images: ['https://firebase-lawyer-studio.vercel.app/images/camargolegal.png'],
    site: '@camargolegal',
    creator: '@camargolegal',
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
