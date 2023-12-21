import Link from 'next/link'
import styles from '@/styles/globals.css'


function NotFound() {
  return (
    <section className='error-container error'>
      <h1 className='error-heading'>404 | No se puede encontrar el documento solicitado</h1>
      <Link href='/' className='error-link'>Regresa a la página de inicio</Link>
    </section>
  )
}

export default NotFound