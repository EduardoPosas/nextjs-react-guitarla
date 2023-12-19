
import Post from '@/components/Post';

import styles from '@/styles/blog.module.css';
import stylesGrid from '@/styles/grid.module.css';

export const metadata = {
  title: 'GuitarLa - Blog',
  description: 'GuitarLa - Tienda de Guitarras y blog',
}

export async function getPosts() {
  const url = `${process.env.API_BASE_URL}/posts?populate=image`;
  try {
    const response = await fetch(url);
    if (Number(response.status) !== 200) {
      throw new Error('Error al hacer la petición');
    }
    const { data: posts } = await response.json();
    return posts;
  } catch (error) {
    console.log(error);
  }
}

async function Blog() {
  const posts = await getPosts();

  return (
    <main className={`blog-container ${styles.blog}`}>
      <h1 className='blog-heading'>Desde Blog</h1>
      <div className={stylesGrid.grid}>
        {
          posts?.map(post => (<Post key={post.id} post={post} />))
        }
      </div>
    </main>
  )
}

export default Blog