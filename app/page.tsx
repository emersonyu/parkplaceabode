'use client'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
    return (
        <main>
            <article id="welcome">
                <Image
                    src="natalie_profile.jpeg"
                    width="120"
                    height="120"
                    className={styles.avatar}
                    alt="Natalie smiling"
                />
            </article>
            <section className="full-bleed"></section>
        </main>
    )
}
