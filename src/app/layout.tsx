import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import Image from 'next/image';

import './globals.css';
import {Navbar} from '@/components/navbar';
import {ThemeProvider} from '@/components/providers';
import {WhatsAppLogo} from 'lucide-react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Camargo Legal',
  description: 'Landing page for Henrique Camargo, Labor Law Attorney',
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container mx-auto">{children}</main>
          {/* WhatsApp Floating Button */}
          <a
            href={whatsappURL}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/whatsapp.svg"
              alt="WhatsApp"
              width={30}
              height={30}
              className="whatsapp-icon"
            />
          </a>
        </ThemeProvider>
      </body>
    </html>
  );
}


