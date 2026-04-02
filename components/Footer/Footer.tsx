import Link from 'next/link'
import Image from 'next/image'
import { playfairDisplay } from '../../utils/fonts'
import styles from './footer.module.css'

export const Footer = ({ hideContactCTA = false }: { hideContactCTA?: boolean }) => {
    return (
        <footer className={styles.footer}>
            {/* ── Get in Touch ── */}
            {!hideContactCTA && (
                <div className={styles.cta}>
                    <div className={styles.ctaInner}>
                        <span className={styles.ctaEyebrow}>Get in Touch</span>
                        <h2
                            className={`${playfairDisplay.className} ${styles.ctaHeading}`}
                        >
                            Let&rsquo;s build something beautiful
                        </h2>
                        <p className={styles.ctaBody}>
                            Ready to transform your space? Tell Natalie about
                            your project.
                        </p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Start a Conversation
                        </Link>
                    </div>
                </div>
            )}

            {/* ── Nav / Brand ── */}
            <div className={styles.footerInner}>
                <div className={styles.footerBrand}>
                    <Link href="/" className={styles.footerLogo}>
                        <Image
                            src="/ppa_logo_full.png"
                            alt="Park Place Abode"
                            width={40}
                            height={40}
                        />
                        <span
                            className={`${playfairDisplay.className} ${styles.footerSiteTitle}`}
                        >
                            Park Place Abode
                        </span>
                    </Link>
                    <p className={styles.footerTagline}>
                        Custom cabinetry, designed and built for how you live.
                    </p>
                </div>

                <nav className={styles.footerNav} aria-label="Footer navigation">
                    <span className={styles.footerNavLabel}>Explore</span>
                    <ul className={styles.footerNavList}>
                        <li>
                            <Link href="/about" className={styles.footerNavLink}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/portfolio"
                                className={styles.footerNavLink}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                className={styles.footerNavLink}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={styles.footerNavLink}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className={styles.footerConnect}>
                    <span className={styles.footerNavLabel}>Connect</span>
                    <ul className={styles.footerNavList}>
                        <li>
                            <a
                                href="https://www.instagram.com/parkplaceabode/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.footerNavLink}
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:natalie@parkplaceabode.com"
                                className={styles.footerNavLink}
                            >
                                natalie@parkplaceabode.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p className={styles.footerCopyright}>
                    &copy; {new Date().getFullYear()} Park Place Abode. San Jose,
                    CA.
                </p>
            </div>
        </footer>
    )
}

export const MobileFooter = () => null
