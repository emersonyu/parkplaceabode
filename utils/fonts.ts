import { DM_Sans, Playfair_Display } from 'next/font/google'

export const dmSans = DM_Sans({ subsets: ['latin'] })
export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-serif',
})
