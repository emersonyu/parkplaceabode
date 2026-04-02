import { DM_Sans, Playfair_Display } from 'next/font/google'

export const dmSans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-sans-serif',
})

export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    variable: '--font-serif',
})
