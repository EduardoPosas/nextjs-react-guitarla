import Link from 'next/link';
import styles from '@/styles/page.module.css';

export const metadata = {
  title: 'GuitarLa - Home',
  description: 'GuitarLa - Tienda de Guitarras',
}

export default function Home() {
  return (
    <>
      <h1>Hola mundo desde Next.js</h1>
      <Link href='/about'>Nosotros</Link>
    </>
  )
}
