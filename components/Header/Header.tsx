'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { playfairDisplay } from '../../utils/fonts'
import { MobileFooter } from '../Footer'
import styles from './header.module.css'

type HamburgerProps = {
    onClick: any
    isOpen: boolean
}

const Hamburger = ({ onClick, isOpen = false }: HamburgerProps) => {
    return (
        <button
            className={`unstyled ${styles.hamburger} ${
                isOpen && styles.hamburgerOpen
            }`}
            onClick={onClick}
            type="button"
        >
            {isOpen ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="32"
                    height="32"
                    viewBox="0 0 50 50"
                    fill="currentColor"
                >
                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="32"
                    height="32"
                    viewBox="0 0 50 50"
                    fill="currentColor"
                >
                    <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                </svg>
            )}
        </button>
    )
}

const Mask = ({ onClick }: any) => {
    return <div className={styles.mask} onClick={onClick} />
}

export const Header = (props: any) => {
    const pathname = usePathname()
    const [showMenu, setShowMenu] = useState(false)
    const handleToggle = (event: any) => {
        setShowMenu(!showMenu)
    }

    const handleLink = (event: any) => {
        const { target } = event
        if (showMenu && target.tagName.toUpperCase() === 'A') {
            setShowMenu(false)
        }
    }

    console.log(pathname)

    return (
        <header className={`content-container ${styles.header}`} {...props}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src="/ppa_logo_full.png"
                        alt="Park Place Abode logo"
                        priority
                        width="40"
                        height="40"
                    />
                </Link>
                <Link href="/">
                    <span
                        className={`${playfairDisplay.className} ${styles.siteTitle}`}
                    >
                        Park Place Abode
                    </span>
                </Link>
            </div>
            <Hamburger onClick={handleToggle} isOpen={showMenu} />
            {showMenu && <Mask onClick={handleToggle} />}
            <nav
                className={`${playfairDisplay.className} ${styles.nav} ${
                    showMenu && styles.navOpen
                }`}
            >
                <ul className={styles.toolbar} onClick={handleLink}>
                    <li
                        className={
                            pathname === '/about' ? styles.activeItem : ''
                        }
                    >
                        <Link href="/about">About</Link>
                    </li>
                    <li
                        className={
                            pathname === '/portfolio' ? styles.activeItem : ''
                        }
                    >
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li
                        className={
                            pathname === '/services' ? styles.activeItem : ''
                        }
                    >
                        <Link href="/services">Services</Link>
                    </li>
                    <li
                        className={
                            pathname === '/contact' ? styles.activeItem : ''
                        }
                    >
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>

                <div className={styles.mobileFooter}>
                    <MobileFooter />
                </div>
            </nav>
        </header>
    )
}
