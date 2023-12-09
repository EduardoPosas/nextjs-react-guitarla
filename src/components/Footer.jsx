import Link from 'next/link';
import styles from '@/styles/footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`footer-container ${styles.footerContent}`}>
        <nav className={styles.navigation}>
          <Link
            href='/'
            className={styles.navigationLink}
          >Inicio</Link>
          <Link
            href='/about'
            className={styles.navigationLink}
          >Nosotros</Link>
          <Link
            href='/store'
            className={styles.navigationLink}
          >Tienda</Link>
          <Link
            href='/blog'
            className={styles.navigationLink}
          >Blog</Link>
        </nav>
        <p className={styles.copyright}>&copy; Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer;