import Link from 'next/link'
import { playfairDisplay } from '../../utils/fonts'
import { PageCTA } from '../../components/PageCTA'
import styles from './services.module.css'

export default function Services() {
    return (
        <main>
            {/* ── Page Header ── */}
            <header className={styles.pageHeader}>
                <span className={styles.eyebrow}>What We Offer</span>
                <h1
                    className={`${playfairDisplay.className} ${styles.pageTitle}`}
                >
                    Services
                </h1>
                <p className={styles.pageSubtitle}>
                    From first sketch to final installation — every step, done
                    well.
                </p>
            </header>

            {/* ── Services Detail ── */}
            <section className={styles.servicesSection}>
                <div className={styles.serviceRow}>
                    <div className={styles.serviceLabel}>
                        <span className={styles.serviceNumber}>01</span>
                        <h2
                            className={`${playfairDisplay.className} ${styles.serviceName}`}
                        >
                            Design Consultation
                        </h2>
                    </div>
                    <div className={styles.serviceBody}>
                        <p>
                            Every great project starts with a clear vision. In a
                            design consultation, Natalie will work with you to
                            understand how you use your space, what you love, and
                            what you want to change. She&rsquo;ll develop space
                            plans, material palettes, and detailed drawings that
                            give you a precise picture of the finished result before
                            a single piece of wood is cut.
                        </p>
                        <ul className={styles.serviceList}>
                            <li>Space planning &amp; layout</li>
                            <li>Material and finish selection</li>
                            <li>Detailed CAD drawings</li>
                            <li>3D renderings upon request</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.serviceRow}>
                    <div className={styles.serviceLabel}>
                        <span className={styles.serviceNumber}>02</span>
                        <h2
                            className={`${playfairDisplay.className} ${styles.serviceName}`}
                        >
                            Custom Build
                        </h2>
                    </div>
                    <div className={styles.serviceBody}>
                        <p>
                            Every cabinet, shelf, and panel is built by hand to
                            exact specifications. Park Place Abode works with
                            premium hardwoods, plywood, and specialty finishes —
                            selected for each project&rsquo;s particular needs and
                            aesthetic. No flat-pack components, no shortcuts.
                        </p>
                        <ul className={styles.serviceList}>
                            <li>Full custom cabinetry</li>
                            <li>Kitchen, bath, and living spaces</li>
                            <li>Built-ins, shelving &amp; storage</li>
                            <li>Premium solid wood and veneer options</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.serviceRow}>
                    <div className={styles.serviceLabel}>
                        <span className={styles.serviceNumber}>03</span>
                        <h2
                            className={`${playfairDisplay.className} ${styles.serviceName}`}
                        >
                            Installation
                        </h2>
                    </div>
                    <div className={styles.serviceBody}>
                        <p>
                            A beautiful piece deserves a perfect fit. Natalie
                            handles installation personally, ensuring every unit is
                            level, plumb, and precisely placed. She coordinates with
                            contractors and tradespeople when needed to deliver a
                            seamless finished result.
                        </p>
                        <ul className={styles.serviceList}>
                            <li>Professional on-site installation</li>
                            <li>Site prep and protection</li>
                            <li>Trade coordination</li>
                            <li>Post-install walkthrough</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── Process ── */}
            <section className={styles.processSection}>
                <header className={styles.processSectionHeader}>
                    <span className={styles.eyebrow}>How it works</span>
                    <h2
                        className={`${playfairDisplay.className} ${styles.processSectionHeading}`}
                    >
                        The Process
                    </h2>
                </header>
                <ol className={styles.processList}>
                    <li className={styles.processStep}>
                        <span className={styles.processStepNumber}>1</span>
                        <div>
                            <h3
                                className={`${playfairDisplay.className} ${styles.processStepName}`}
                            >
                                Discovery call
                            </h3>
                            <p>
                                A 30-minute call to discuss your project, timeline,
                                and budget.
                            </p>
                        </div>
                    </li>
                    <li className={styles.processStep}>
                        <span className={styles.processStepNumber}>2</span>
                        <div>
                            <h3
                                className={`${playfairDisplay.className} ${styles.processStepName}`}
                            >
                                Design &amp; proposal
                            </h3>
                            <p>
                                Natalie develops drawings and a detailed proposal
                                with materials and pricing.
                            </p>
                        </div>
                    </li>
                    <li className={styles.processStep}>
                        <span className={styles.processStepNumber}>3</span>
                        <div>
                            <h3
                                className={`${playfairDisplay.className} ${styles.processStepName}`}
                            >
                                Build
                            </h3>
                            <p>
                                Your pieces are built in the studio with regular
                                progress updates.
                            </p>
                        </div>
                    </li>
                    <li className={styles.processStep}>
                        <span className={styles.processStepNumber}>4</span>
                        <div>
                            <h3
                                className={`${playfairDisplay.className} ${styles.processStepName}`}
                            >
                                Installation &amp; reveal
                            </h3>
                            <p>
                                Professional installation and a final walkthrough to
                                make sure everything is perfect.
                            </p>
                        </div>
                    </li>
                </ol>
            </section>

            <PageCTA showInstagram={false} />
        </main>
    )
}
