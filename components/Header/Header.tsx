'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { playfairDisplay } from '../../utils/fonts'
import styles from './header.module.css'

const Hamburger = ({
    onClick,
    isOpen,
    transparent,
}: {
    onClick: () => void
    isOpen: boolean
    transparent: boolean
}) => (
    <button
        className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''} ${transparent ? styles.hamburgerTransparent : ''}`}
        onClick={onClick}
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
        {isOpen ? (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 50 50"
                fill="currentColor"
            >
                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
            </svg>
        ) : (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 50 50"
                fill="currentColor"
            >
                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z" />
            </svg>
        )}
    </button>
)

export const Header = () => {
    const pathname = usePathname()
    const [showMenu, setShowMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [showMenu])

    const isHomepage = pathname === '/'
    const transparent = isHomepage && !scrolled

    const navLinks = [
        { href: '/about', label: 'About' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <>
            <header
                className={`${styles.header} ${transparent ? styles.headerTransparent : styles.headerSolid}`}
            >
                <div className={styles.headerInner}>
                    <Link href="/" className={styles.logo} onClick={() => setShowMenu(false)}>
                        <Image
                            src="/ppa_logo_full.png"
                            alt="Park Place Abode"
                            priority
                            width={36}
                            height={36}
                            className={styles.logoImage}
                        />
                        <span
                            className={`${playfairDisplay.className} ${styles.siteTitle}`}
                        >
                            Park Place Abode
                        </span>
                    </Link>

                    <nav className={styles.desktopNav} aria-label="Main navigation">
                        <ul className={styles.navList}>
                            {navLinks.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={`${styles.navLink} ${pathname === href ? styles.navLinkActive : ''}`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <Hamburger
                        onClick={() => setShowMenu(!showMenu)}
                        isOpen={showMenu}
                        transparent={transparent}
                    />
                </div>
            </header>

            {/* Mobile drawer */}
            {showMenu && (
                <div
                    className={styles.drawerOverlay}
                    onClick={() => setShowMenu(false)}
                    aria-hidden="true"
                />
            )}
            <nav
                className={`${styles.drawer} ${showMenu ? styles.drawerOpen : ''}`}
                aria-label="Mobile navigation"
            >
                <ul className={styles.drawerList}>
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`${playfairDisplay.className} ${styles.drawerLink} ${pathname === href ? styles.drawerLinkActive : ''}`}
                                onClick={() => setShowMenu(false)}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={styles.drawerFooter}>
                    <a
                        href="https://www.instagram.com/parkplaceabode/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.drawerSocial}
                    >
                        Instagram
                    </a>
                    <a
                        href="mailto:natalie@parkplaceabode.com"
                        className={styles.drawerSocial}
                    >
                        natalie@parkplaceabode.com
                    </a>
                </div>
            </nav>
        </>
    )
}
