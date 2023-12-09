'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '@/styles/header.module.css';

import logo from '../../public/images/logo.svg'

function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`header-container ${styles.headerContent}`}>
        <Link href='/'>
          <Image
            src={logo}
            alt='logo guitarla'
            className={styles.headerImage}
          />
        </Link>
        <nav className={styles.navigation}>
          <Link
            href='/'
            className={`${styles.navigationLink} ${pathname === '/' ? styles.linkActive : ''}`}
          >Inicio</Link>
          <Link
            href='/about'
            className={`${styles.navigationLink} ${pathname === '/about' ? styles.linkActive : ''}`}
          >Nosotros</Link>
          <Link
            href='/store'
            className={`${styles.navigationLink} ${pathname === '/store' ? styles.linkActive : ''}`}
          >Tienda</Link>
          <Link
            href='/blog'
            className={`${styles.navigationLink} ${pathname === '/blog' ? styles.linkActive : ''}`}
          >Blog</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header