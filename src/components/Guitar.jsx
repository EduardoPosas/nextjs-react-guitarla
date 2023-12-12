import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/guitar.module.css';

function Guitar({ guitar }) {
  const { name, description, price, url, image } = guitar;

  return (
    <div className={styles.guitar}>
      <Image
        src={image.data.attributes.formats.medium.url}
        alt={`guitarra marca ${name}`}
        width={600}
        height={400}
        className={styles.guitarImage}
      />
      <div className={styles.guitarContent}>
        <h3 className={styles.guitarName}>{name}</h3>
        <p className={styles.guitarDescription}>{description}</p>
        <p className={styles.guitarPrice}>${price}</p>
        <Link
          href={`/guitar/${url}`}
          className={styles.guitarLink}
        >Ver producto</Link>
      </div>
    </div>
  )
}

export default Guitar