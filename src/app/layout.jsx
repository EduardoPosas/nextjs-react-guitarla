import { Outfit } from 'next/font/google';
import '@/styles/normalize.css';
import '@/styles/globals.css';


// If loading a variable font, you don't need to specify the font weight
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--ff-global'
});

export const metadata = {
  title: 'GuitarLa - Next.js',
  description: 'GuitarLa - Tienda de Guitarras',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
