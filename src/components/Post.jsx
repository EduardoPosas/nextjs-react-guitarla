import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/blog.module.css';

import { formatDate } from '@/utils/dateFormating';

function Post({ post }) {

  const { title, content, createdAt, image, url } = post?.attributes;

  return (
    <article className={styles.post}>
      <Image
        src={image?.data?.attributes?.formats?.medium?.url}
        alt={`blog ${title}`}
        width={600}
        height={400}
        className={styles.postImage}
      />
      <div className={styles.postContent}>
        <h3>{title}</h3>
        <p className={styles.postDate}>{formatDate(createdAt)}</p>
        <p className={styles.postDescription}>{content}</p>
        <Link href={`/blog/${url}`} className={styles.postLink}>Leer Post</Link>
      </div>
    </article>
  )
}

export default Post