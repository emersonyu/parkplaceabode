import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>

      <div className={styles.center}>
        <Image className={styles.logo} src="/ppa_logo_circle_200x200.png" alt="Park Place Abode logo" priority width="100" height="100"/>
      </div>
    </main>
  )
}
