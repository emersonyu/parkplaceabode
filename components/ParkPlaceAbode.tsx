'use client'
import { Header } from './Header'
import { Footer } from './Footer'
import { Theme } from '@radix-ui/themes'

type PageProps = {
    children: React.ReactNode
}

export const ParkPlaceAbode = ({ children }: PageProps) => {
    return (
        <Theme accentColor="brown" hasBackground={false}>
            <Header />
            <section className="layout-container">{children}</section>
            <Footer />
        </Theme>
    )
}
