import './globals.css'
import '@radix-ui/themes/styles.css'
import type { Metadata } from 'next'
import { dmSans, playfairDisplay } from '../utils/fonts'
import { ParkPlaceAbode } from '../components/ParkPlaceAbode'

export const metadata: Metadata = {
    title: 'Park Place Abode | Custom Cabinetry & Interior Design',
    description:
        'Park Place Abode is a custom cabinetry design, build, and installation studio founded by Natalie Park in San Jose, CA.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${dmSans.className} ${dmSans.variable} ${playfairDisplay.variable}`}
            >
                <ParkPlaceAbode>{children}</ParkPlaceAbode>
            </body>
        </html>
    )
}
