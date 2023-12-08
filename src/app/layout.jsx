import '@/styles/globals.css'

export const metadata = {
  title: 'GuitarLa - Next.js',
  description: 'GuitarLa - Tienda de Guitarras',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
