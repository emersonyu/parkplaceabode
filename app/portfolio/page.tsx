import Link from 'next/link'
import { playfairDisplay } from '../../utils/fonts'
import { sanityClient, urlFor } from '../../lib/sanity'
import { PageCTA } from '../../components/PageCTA'
import styles from './portfolio.module.css'

const getProjects = async () => {
    try {
        return await sanityClient.fetch(
            `*[_type == "project"] | order(_createdAt desc) {
                _id, name, description, images
            }`
        )
    } catch {
        return []
    }
}

export default async function Portfolio() {
    const projects = await getProjects()

    return (
        <main>
            {/* ── Page Header ── */}
            <header className={styles.pageHeader}>
                <span className={styles.eyebrow}>Our Work</span>
                <h1
                    className={`${playfairDisplay.className} ${styles.pageTitle}`}
                >
                    Portfolio
                </h1>
            </header>

            {/* ── Grid ── */}
            <section className={styles.gridSection}>
                {projects.length > 0 ? (
                    <div className={styles.grid}>
                        {projects.map((project: any, i: number) => (
                            <Link
                                key={project._id}
                                href={`/portfolio/${project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                                className={styles.gridItem}
                            >
                                <div className={styles.imageWrap}>
                                    {project.images?.[0] ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={urlFor(project.images[0])
                                                .width(1200)
                                                .url()}
                                            alt={project.name}
                                            className={styles.image}
                                        />
                                    ) : (
                                        <div className={styles.imagePlaceholder} />
                                    )}
                                    <div className={styles.imageOverlay}>
                                        <span className={styles.overlayArrow}>
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                                            </svg>
                                        </span>
                                    </div>
                                    <span className={styles.projectIndex}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <div className={styles.projectMeta}>
                                    <h2
                                        className={`${playfairDisplay.className} ${styles.projectName}`}
                                    >
                                        {project.name}
                                    </h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <p>Projects coming soon.</p>
                        <Link href="/contact" className={styles.emptyLink}>
                            Interested in working together?
                        </Link>
                    </div>
                )}
            </section>

            <PageCTA />
        </main>
    )
}
