import Link from 'next/link'
import Image from 'next/image'
import { playfairDisplay } from '../../utils/fonts'
export const Footer = () => {
    return (
        <footer className="content-container">
            <div className={`socials ${playfairDisplay.className}`}>
                <ul className="footer-links">
                    <li>
                        <a href="https://www.instagram.com/parkplaceabode/">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://www.amazon.com">Amazon</a>
                    </li>
                </ul>
            </div>
            <div className="logo">
                <Link href="/">
                    <Image
                        src="/ppa_logo_circle_200x200.png"
                        alt="Park Place Abode logo"
                        priority
                        width="40"
                        height="40"
                    />
                </Link>
            </div>
        </footer>
    )
}
