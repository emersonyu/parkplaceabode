import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { DM_Sans, Playfair_Display } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'] });
const playfiarDisplay = Playfair_Display({ subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Park Place Abode',
  description: 'ParkPlaceAbode is Natalie Han\'s design/build & DIY showcase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <header className="content-container">
          <div className="logo">
            PARK PLACE ABODE
          </div>
          <nav className={playfiarDisplay.className}>
            <ul className="toolbar">
              <li>Link One</li>
              <li>Link One</li>
              <li>Link One</li>
              <li>Link One</li>
            </ul>
          </nav>
        </header>
        {children}

        <footer>

        </footer>
      </body>
    </html>
  )
}
