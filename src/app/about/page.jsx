import Image from 'next/image';

import styles from '@/styles/about.module.css';

import aboutImage from '../../../public/images/nosotros.jpg';

export const metadata = {
  title: 'GuitarLa - About us',
  description: 'GuitarLa - Tienda de Guitarras',
}

function About() {
  return (
    <main className={`about-container ${styles.about}`}>
      <h1 className='about-heading'>Nostros</h1>
      <div className={styles.aboutGrid}>
        <Image src={aboutImage} alt="sobre nosotros" />
        <div className={styles.aboutContent}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellat inventore, facere fuga iure modi magnam est amet laborum, eveniet deleniti. Mollitia rerum, non ut perferendis beatae molestias doloremque facere sequi quis sit atque quae dignissimos inventore corporis laborum nostrum delectus ipsum quam ea? In tempore animi itaque rem labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere aliquam possimus culpa quasi quis molestiae tenetur earum obcaecati, ratione placeat numquam pariatur, magni deserunt a ullam sed amet magnam voluptate architecto et! Expedita ipsa porro est velit qui omnis nisi cupiditate reiciendis, voluptatibus saepe blanditiis optio. Ipsam, molestiae sunt?</p>
        </div>
      </div>
    </main>
  )
}

export default About