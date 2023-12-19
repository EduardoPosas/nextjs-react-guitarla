'use client';

import styles from '@/styles/course.module.css';


function Course({ course }) {
  const { title, content, image } = course?.attributes;

  return (
    <section className={`${styles.course} course`}>
      <style jsx={true}>
        {
          `
          .course {
            background-image: linear-gradient(to right, rgb(0 0 0 / 0.6), rgb(0 0 0 / 0.7)), url(${image.data.attributes.url});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          `
        }
      </style>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <h2 className='course-heading'>{title}</h2>
          <p className={styles.description}>{content}</p>
        </div>
      </div>
    </section>
  )
}

export default Course