'use client'
import Image from 'next/image'
import { InstagramEmbed } from 'react-social-media-embed'
import styles from './page.module.css'

export default function Home() {
    return (
        <main>
            <article id="welcome">
                <h1>Hello, welcome to Park Place Abode!</h1>
                <p>
                    {
                        "My name is Natalie Han, and I'm a DIYer... Here are some featured projects!"
                    }
                </p>
            </article>
            <section className="full-bleed">
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 32,
                    }}
                >
                    <InstagramEmbed
                        url="https://www.instagram.com/p/CvfHb6JNscF/"
                        width={'50%'}
                    />
                    <InstagramEmbed
                        url="https://www.instagram.com/p/Chk_imll_5K/"
                        width={'50%'}
                    />
                </div>
            </section>
        </main>
    )
}
