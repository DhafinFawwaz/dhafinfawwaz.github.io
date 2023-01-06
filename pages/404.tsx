import Link from 'next/link'
import styles from '../styles/404.module.css'
export default function NotFound() {




  return (
    <section className={`${styles.not__found} section`} id="qualification">

      <div className={`container`}>

        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>NOT FOUND</h2>
        <h3 className={styles.paragraph}>{`It appears that you've wandered to the shadow realm.`}</h3>
        <p  className={styles.subparagraph}>Go back to the <Link href="/" className={styles.link}>Home</Link> page</p>
        
      </div>
    </section>
  )
}
