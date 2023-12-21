import Image from 'next/image';

import Form from './Form';

import styles from '@/styles/guitar.module.css';

export function generateMetadata({ params }) {
  const { url } = params;
  return {
    title: `GuitarLA - Guitarra ${url}`,
    description: `GuitarLA - Descripcion completa guitarra ${url}`
  }
}

/**
 * Returns data from a JSON API as serverSideProps
 * @param {object} urlSlug
 * @returns {Array}
 */
// async function getGuitar(urlSlug) {
//   try {
//     const url = `${process.env.API_BASE_URL}/guitarras?filters[url]=${urlSlug}&populate=image`;
//     const response = await fetch(url, { cache: 'no-cache' });
//     if (Number(response.status) !== 200) {
//       throw new Error('Error al realizar peticion');
//     }
//     const { data: guitar } = await response.json();
//     return guitar;
//   } catch (error) {
//     console.log(error);
//   }

// };

/** generateStaticParams
 * It is useful in combination with dynamic route segments to statically generate routes at a build time insted on on-demand at request time
 * In combination with getStaticPops
 */

export const dynamicParams = false; // Dynamic segments not included in generateStaticParams will return a 404.
// export const dynamicParams = true; // Dynamic segments not included in generateStaticParams are generated on demand.


export async function generateStaticParams() {
  try {
    const url = `${process.env.API_BASE_URL}/guitarras`;
    const response = await fetch(url);
    if (Number(response.status) !== 200) {
      throw new Error('Error al hacer la petición');
    }
    const { data: guitars } = await response.json();

    const urls = guitars.map(guitar => ({ url: guitar?.attributes?.url }));
    return urls;

  } catch (error) {
    console.log(error);
  }
}

async function getGuitar(params) {
  try {
    const urlSlug = params?.url;
    const url = `${process.env.API_BASE_URL}/guitarras?filters[url]=${urlSlug}&populate=image`;
    const response = await fetch(url, { next: { revalidate: 60 } });
    if (Number(response.status) !== 200) {
      throw new Error('Error al realizar peticion');
    }
    const { data: guitar } = await response.json();
    return guitar[0];
  } catch (error) {
    console.log(error);
  }

};


async function Guitar({ params }) {
  // Use {params} in function arguments to extract dynamic params from url
  // const { url = '' } = params;
  // const guitar = await getGuitar(url);
  // console.log(guitar[0]);

  // With SSG
  const guitar = await getGuitar(params);
  const { name, image, description, price } = guitar?.attributes;

  return (
    <main className={`${styles.guitar} ${styles.smallContainer}`}>
      <Image
        src={image.data.attributes.url}
        alt={`guitarra marca ${name}`}
        width={600}
        height={400}
        className={`${styles.guitarImage} ${styles.guitarHeight}`}
      />
      <div className={styles.guitarContent}>
        <h3 className={styles.guitarName}>{name}</h3>
        <p className={styles.guitarDescription}>{description}</p>
        <p className={styles.guitarPrice}>${price}</p>
        <Form guitar={guitar} />
      </div>
    </main>
  )
}

export default Guitar