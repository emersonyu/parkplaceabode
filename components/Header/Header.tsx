import Link from 'next/link'
import { playfairDisplay } from '../../utils/fonts'
import styles from './header.module.css'

export const Header = (props: any) => {
    return (
        <header className={`content-container ${styles.header}`} {...props}>
            <div className={styles.logo}>
                <Link href="/">[logo placeholder]</Link>
            </div>
            <nav className={`${playfairDisplay.className} ${styles.nav}`}>
                <ul className={styles.toolbar}>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
