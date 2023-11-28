'use client'
import { InstagramEmbed } from 'react-social-media-embed'
export default function About() {
    return (
        <main>
            <h1>About</h1>
            <section className="full-bleed">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <InstagramEmbed
                        url="https://www.instagram.com/p/CkzQpPqpuyJ/"
                        width={'490'}
                    />
                </div>
            </section>
        </main>
    )
}
