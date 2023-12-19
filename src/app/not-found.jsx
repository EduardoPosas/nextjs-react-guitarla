import Link from 'next/link'


function NotFound() {
  return (
    <section className='error-container'>
      <h1 className='error-heading'>404 | No se puede encontrar el documento solicitado</h1>
      <Link href='/'>Regresa a la página de inicio</Link>
    </section>
  )
}

export default NotFound