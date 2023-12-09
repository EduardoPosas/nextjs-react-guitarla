import Link from 'next/link'

export const metadata = {
  title: 'GuitarLa - About us',
  description: 'GuitarLa - Tienda de Guitarras',
}

const About = () => {
  return (
    <>
      <h1>Desde nosotros</h1>
      <Link href='/'>Inicio</Link>
    </>
  )
}

export default About