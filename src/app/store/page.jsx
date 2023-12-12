
import Guitar from '@/components/Guitar';

import styles from '@/styles/grid.module.css';

export const metadata = {
  title: 'GuitarLa - Store',
  description: 'GuitarLa - Tienda de Guitarras',
}

/**
 * Fetch a strapi api and caches all the data during build time (similar to getStaticProps in pages)
 * @returns {Array} Return an array of objects from guitars
 */
// async function getGuitars() {
//   try {
//     const url = `${process.env.API_BASE_URL}/guitarras?populate=image`;
//     const response = await fetch(url);
//     console.log(response.status);
//     if (Number(response.status) !== 200) {
//       throw new Error('Error al realizar peticion');
//     }
//     const { data: guitars } = await response.json();
//     return guitars;
//   } catch (error) {
//     console.log(error);
//   }
// }

/**
 * Fetch a strapi api and no chaches the data (similar to getServerProps in pages)
 * @returns {Array} Return an array of objects from guitars
 */
async function getGuitars() {
  try {
    const url = `${process.env.API_BASE_URL}/guitarras?populate=image`;
    const response = await fetch(url, { cache: 'no-cache' });
    console.log(response.status);
    if (Number(response.status) !== 200) {
      throw new Error('Error al realizar peticion');
    }
    const { data: guitars } = await response.json();
    return guitars;
  } catch (error) {
    console.log(error);
  }
}

async function Store() {
  const guitars = await getGuitars();

  return (
    <main className="guitars-container" style={{ margin: '5rem auto' }}>
      <h1 className="guitars-heading">Nuestra Colección</h1>
      <div className={styles.grid}>
        {
          guitars?.map(guitar => <Guitar key={guitar.id} guitar={guitar.attributes} />)
        }
      </div>
    </main>
  )
}

export default Store