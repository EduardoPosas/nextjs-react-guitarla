import Image from 'next/image';
import styles from '@/styles/blog.module.css';

import { formatDate } from '@/utils/dateFormating';

export function generateMetadata({ params }) {
  const { url } = params;
  return {
    title: `GuitarLA - ${url}`,
    description: `GuitarLA - Blog ${url}`
  }
}

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const url = `${process.env.API_BASE_URL}/posts`;
    const response = await fetch(url);
    if (Number(response.status) !== 200) {
      throw new Error('Error al hacer la petición');
    }
    const { data: posts } = await response.json();

    const urls = posts.map(post => ({ url: post?.attributes?.url }));
    return urls;
  } catch (error) {
    console.log(error);
  }
}

async function getPost(params) {
  try {
    const urlSlug = params?.url;
    const url = `${process.env.API_BASE_URL}/posts?filters[url]=${urlSlug}&populate=image`;
    const response = await fetch(url, { next: { revalidate: 60 } });
    if (Number(response.status) !== 200) {
      throw new Error('Error al realizar peticion');
    }
    const { data: post } = await response.json();
    return post[0];
  } catch (error) {
    console.log(error);
  }

};

async function Post({ params }) {
  console.log(params);
  const post = await getPost(params);
  const { title, content, createdAt, image } = post?.attributes;

  return (
    <article className={`post-container ${styles.blog} ${styles.post}`}>
      <Image
        src={image?.data?.attributes?.url}
        alt={`blog ${title}`}
        width={600}
        height={400}
        className={styles.postImage}
      />
      <div className={styles.postContent}>
        <h3>{title}</h3>
        <p className={styles.postDate}>{formatDate(createdAt)}</p>
        <p className={styles.wrap}>{content}</p>
      </div>
    </article>
  )
}

export default Post