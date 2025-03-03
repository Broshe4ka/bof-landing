import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './styles/global.scss';
import Header from '@/components/ui/header/header';
import Footer from '@/components/ui/footer/footer';

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  title: '#BoF | Main Page',
  description: 'Description',
  icons: '/icons/logo.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${nunitoSans.variable}`}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
