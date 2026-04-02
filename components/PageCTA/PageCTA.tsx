import Link from 'next/link'
import { playfairDisplay } from '../../utils/fonts'
import styles from './pageCTA.module.css'

type PageCTAProps = {
    showInstagram?: boolean
}

export const PageCTA = ({ showInstagram = true }: PageCTAProps) => {
    return (
        <>
            {showInstagram && (
                <section className={`${styles.section} ${styles.socialSection}`}>
                    <p className={styles.socialHandle}>@parkplaceabode</p>
                    <h2
                        className={`${playfairDisplay.className} ${styles.socialHeading}`}
                    >
                        Follow the process
                    </h2>
                    <p className={styles.socialBody}>
                        Behind-the-scenes builds, finished spaces, and the details
                        that make every project unique.
                    </p>
                    <a
                        href="https://www.instagram.com/parkplaceabode/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        Follow on Instagram
                    </a>
                </section>
            )}

            <section className={`${styles.section} ${styles.contactSection}`}>
                <div className={styles.contactInner}>
                    <span className={styles.eyebrow}>Get in Touch</span>
                    <h2
                        className={`${playfairDisplay.className} ${styles.contactHeading}`}
                    >
                        Let&rsquo;s build something beautiful
                    </h2>
                    <p className={styles.contactBody}>
                        Ready to transform your space? Tell Natalie about your
                        project.
                    </p>
                    <Link href="/contact" className={styles.ctaButton}>
                        Start a Conversation
                    </Link>
                </div>
            </section>
        </>
    )
}
