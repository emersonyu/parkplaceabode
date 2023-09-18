import Link from 'next/link'
import Image from 'next/image'
export const Footer = () => {
    return (
        <footer>
            <section className="content-container">
                <div className="logo">
                    <Link href="/">
                        <Image
                            src="/ppa_logo_circle_200x200.png"
                            alt="Park Place Abode logo"
                            priority
                            width="100"
                            height="100"
                        />
                    </Link>
                </div>
                <div className="socials">
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/parkplaceabode/">
                                Instagram
                            </a>
                        </li>
                        <li>Amazon</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
