import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Navbar} from '@/components/navbar';
import {ThemeProvider} from '@/components/providers';

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="whatsapp-icon"
            >
              <path
                fillRule="evenodd"
                d="M12.44 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 1.709.449 3.304 1.23 4.673L2.354 19.153l2.523-.661a12.732 12.732 0 004.324.81c5.385 0 9.75-4.365 9.75-9.75 0-5.385-4.365-9.75-9.75-9.75zm-4.74 14.752l-.243-.144-.873.23-1.197-.313.243.145 4.045-1.061-.243-.144-.873.23-1.197-.313.243.145 1.377.361-.023-.866.085-1.943.096-.351-.476.125-.793-.207-.076-.391-.068-.042-.215.055-.034.126.293.06.391.23.08.767-.064 1.971-.076.343.465-.122.821.215.076.384.06.042.223-.06.034-.133-.299-.07-.384zm6.743-4.752c-.591-.29-3.442-1.693-3.91-1.861-.468-.168-.805-.253-1.142.253-.337.506-1.325 1.636-1.653 1.926-.328.29-.655.404-.992.404-.337 0-1.108-.289-1.699-.58-.591-.29-1.029-.506-1.468-.506-.439 0-1.142.29-1.636.771-.487.482-1.822 1.771-1.822 4.215 0 2.444 1.679 2.962 1.97 3.252.29.29 2.027 3.244 4.845 3.244 2.818 0 2.973-1.039 2.973-1.953 0-.439-.167-.839-.458-1.129l-.011-.011c-.29-.29-.591-.604-.881-.914-.29-.31-.532-.439-.87-.439-.337 0-.881.168-1.35.506-.468.337-1.828 1.12-1.828 1.12s.278.655.278 3.313c0 2.658 1.731 2.813 1.887 2.968.156.156.306.156.462.042.156-.115 4.208-2.076 4.728-4.08.52-.29 1.04-.619 1.21-1.142.168-.523.168-.992.042-1.148-.125-.156-.253-.29-.421-.458z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </ThemeProvider>
      </body>
    </html>
  );
}
