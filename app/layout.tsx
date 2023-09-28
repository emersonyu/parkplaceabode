import './globals.css'
import type { Metadata } from 'next'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { dmSans, playfairDisplay } from '../utils/fonts'

export const metadata: Metadata = {
    title: 'Park Place Abode',
    description:
        "ParkPlaceAbode is Natalie Han's design/build & DIY showcase. Natalie is from San Jose, CA",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${dmSans.className} ${playfairDisplay.variable}`}>
                <Header />
                <section className="layout-container">{children}</section>
                <Footer />
            </body>
        </html>
    )
}
