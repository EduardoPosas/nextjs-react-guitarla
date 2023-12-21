import CartProvider from '@/context/CartProvider';
import { Outfit } from 'next/font/google';

import '@/styles/globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--ff-global'
});

export default function RootLayout({ children }) {
  return (
    <html
      lang='es'
      className={`${outfit.variable}`}
    >
      <body>
        <Header />
        <CartProvider>
          {children}
        </CartProvider>
        <Footer />
      </body>
    </html>
  )
}
