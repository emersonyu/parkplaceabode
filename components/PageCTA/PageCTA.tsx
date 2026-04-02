import { playfairDisplay } from '../../utils/fonts'
import styles from './pageCTA.module.css'

export const PageCTA = () => {
    return (
        <section className={styles.socialSection}>
            <p className={styles.socialHandle}>@parkplaceabode</p>
            <h2
                className={`${playfairDisplay.className} ${styles.socialHeading}`}
            >
                Follow the process
            </h2>
            <p className={styles.socialBody}>
                Behind-the-scenes builds, finished spaces, and the details that
                make every project unique.
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
    )
}
