
import Guitar from '@/components/Guitar';
import Post from '@/components/Post';
import Course from '@/components/Course';
import styles from '@/styles/grid.module.css';

export const metadata = {
  title: 'GuitarLa - Home',
  description: 'GuitarLa - Tienda de Guitarras',
}

export async function getData() {
  const urlGuitars = `${process.env.API_BASE_URL}/guitarras?populate=image`;
  const urlPosts = `${process.env.API_BASE_URL}/posts?populate=image`;
  const urlCourse = `${process.env.API_BASE_URL}/course?populate=image`;

  try {
    const [resGuitars, resPosts, resCourse] = await Promise.all([fetch(urlGuitars), fetch(urlPosts), fetch(urlCourse)]);
    if (Number(resGuitars.status) !== 200 || Number(resPosts.status) !== 200 || Number(resCourse.status) !== 200) {
      throw new Error('Fallo alguna de las peticiones a la API');
    }

    const [{ data: guitars }, { data: posts }, { data: course }] = await Promise.all([resGuitars.json(), resPosts.json(), resCourse.json()]);

    return {
      guitars,
      posts,
      course
    }
  } catch (error) {
    console.log(error);
  }
}

async function Home() {
  const { guitars, posts, course } = await getData();
  console.log(course);
  return (
    <>
      <main className="guitars-container" style={{ margin: '5rem auto' }}>
        <h1 className="guitars-heading">Nuestra Colección</h1>
        <div className={styles.grid}>
          {
            guitars?.map(guitar => <Guitar key={guitar.id} guitar={guitar.attributes} />)
          }
        </div>
      </main>
      <Course course={course} />
      <section className='container' style={{ margin: '5rem auto' }}>
        <h2 className='blog-heading'>Blog</h2>
        <div className={styles.grid}>
          {
            posts?.map(post => (<Post key={post.id} post={post} />))
          }
        </div>
      </section>
    </>
  )
}

export default Home;