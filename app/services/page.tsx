import styles from './services.module.css'
export default function Services() {
    return (
        <main>
            <article className={styles.container}>
                <h1>Work with Natalie</h1>
                <p>
                    Thank you for considering us to help with your design and
                    build needs!
                </p>
                <p>
                    We are so grateful for all of the design requests we get
                    every day and would love to work with you. Contact Us:&nbsp;
                    <a href="mailto:natalie@parkplaceabode.com">Email</a>
                </p>
                <h2>Services we offer</h2>
                <ul>
                    <li>Consultations</li>
                    <li>Design services</li>
                    <li>Build</li>
                </ul>
            </article>
        </main>
    )
}
