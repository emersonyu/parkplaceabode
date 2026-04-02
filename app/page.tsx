import Link from 'next/link'
import { playfairDisplay } from '../utils/fonts'
import { getFeaturedProjects, urlFor } from '../lib/sanity'
import { PageCTA } from '../components/PageCTA'
import styles from './page.module.css'

export default async function Home() {
    let projects: any[] = []
    try {
        projects = await getFeaturedProjects()
    } catch {
        // Render gracefully if Sanity is unavailable at build time
    }

    return (
        <main className={`full ${styles.home}`}>
            {/* ── Hero ── */}
            <section className={styles.hero}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/office_1.jpg"
                    alt="Park Place Abode studio"
                    className={styles.heroImage}
                />
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <p className={styles.heroEyebrow}>San Jose, California</p>
                    <h1
                        className={`${playfairDisplay.className} ${styles.heroTitle}`}
                    >
                        Park Place Abode
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Custom Cabinetry &nbsp;·&nbsp; Design &nbsp;·&nbsp; Build
                        &nbsp;·&nbsp; Install
                    </p>
                </div>
                <a href="#work" className={styles.heroScroll} aria-label="Scroll to work">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </a>
            </section>

            {/* ── Featured Work ── */}
            <section id="work" className={`${styles.section} ${styles.featuredWork}`}>
                <header className={styles.sectionHeader}>
                    <span className={styles.eyebrow}>Portfolio</span>
                    <h2
                        className={`${playfairDisplay.className} ${styles.sectionHeading}`}
                    >
                        Recent Work
                    </h2>
                </header>

                {projects.length > 0 ? (
                    <div className={styles.workGrid}>
                        {projects.slice(0, 4).map((project, i) => (
                            <article
                                key={project._id}
                                className={`${styles.projectCard} ${i === 0 ? styles.projectCardFeatured : ''}`}
                            >
                                <div className={styles.projectImage}>
                                    {project.images?.[0] ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={urlFor(project.images[0])
                                                .width(900)
                                                .height(600)
                                                .url()}
                                            alt={project.name}
                                        />
                                    ) : (
                                        <div className={styles.projectImagePlaceholder} />
                                    )}
                                </div>
                                <div className={styles.projectMeta}>
                                    <h3
                                        className={`${playfairDisplay.className} ${styles.projectName}`}
                                    >
                                        {project.name}
                                    </h3>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className={styles.workPlaceholder}>
                        <div className={styles.workGrid}>
                            {[1, 2, 3].map((n) => (
                                <div
                                    key={n}
                                    className={`${styles.projectCard} ${n === 1 ? styles.projectCardFeatured : ''}`}
                                >
                                    <div
                                        className={`${styles.projectImage} ${styles.projectImagePlaceholder}`}
                                    />
                                    <div className={styles.projectMeta}>
                                        <div className={styles.skeletonLine} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className={styles.sectionFooter}>
                    <Link href="/portfolio" className={styles.textLink}>
                        View All Work
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* ── About Preview ── */}
            <section className={`${styles.section} ${styles.aboutSection}`}>
                <div className={styles.aboutImageWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/natalie_about.jpeg"
                        alt="Natalie Park"
                        className={styles.aboutImage}
                    />
                </div>
                <div className={styles.aboutContent}>
                    <span className={styles.eyebrow}>About</span>
                    <h2
                        className={`${playfairDisplay.className} ${styles.aboutHeading}`}
                    >
                        Crafted with care,
                        <br />
                        <em>built to last</em>
                    </h2>
                    <p className={styles.aboutBody}>
                        Natalie Park brings a designer&rsquo;s eye and a builder&rsquo;s
                        precision to every project. Based in San Jose, CA, Park Place
                        Abode specializes in custom cabinetry &mdash; from initial
                        concept and detailed design through expert build and seamless
                        installation.
                    </p>
                    <Link href="/about" className={styles.textLink}>
                        Meet Natalie
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* ── Services ── */}
            <section className={styles.servicesSection}>
                <div className={styles.servicesInner}>
                    <header className={`${styles.sectionHeader} ${styles.sectionHeaderCenter}`}>
                        <span className={`${styles.eyebrow} ${styles.eyebrowInverse}`}>
                            Services
                        </span>
                        <h2
                            className={`${playfairDisplay.className} ${styles.sectionHeadingInverse}`}
                        >
                            What We Do
                        </h2>
                    </header>

                    <div className={styles.servicesGrid}>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceNumber}>01</div>
                            <h3
                                className={`${playfairDisplay.className} ${styles.serviceName}`}
                            >
                                Design Consultation
                            </h3>
                            <p className={styles.serviceDesc}>
                                Space planning, material selection, and detailed
                                drawings — tailored to your vision and lifestyle.
                            </p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceNumber}>02</div>
                            <h3
                                className={`${playfairDisplay.className} ${styles.serviceName}`}
                            >
                                Custom Build
                            </h3>
                            <p className={styles.serviceDesc}>
                                Handcrafted cabinetry built to exact specifications
                                with premium materials and meticulous attention to
                                detail.
                            </p>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceNumber}>03</div>
                            <h3
                                className={`${playfairDisplay.className} ${styles.serviceName}`}
                            >
                                Installation
                            </h3>
                            <p className={styles.serviceDesc}>
                                Precise, professional installation that brings the
                                finished design to life exactly as envisioned.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.sectionFooter} ${styles.sectionFooterCenter}`}>
                        <Link href="/services" className={styles.textLinkInverse}>
                            Our Services
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <PageCTA />
        </main>
    )
}
