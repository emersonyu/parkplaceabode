'use client'
import Image from 'next/image'
import styles from './about.module.css'
import { InstagramEmbed } from 'react-social-media-embed'

export default function About() {
    return (
        <main>
            <article className={styles.container}>
                <Image src="natalie_about.jpeg" width="400" height="500" />
                <div class="about">
                    <h1>About Natalie</h1>
                    <p>
                        Cupcake ipsum dolor sit amet muffin gummi bears. Danish
                        I love sugar plum brownie caramels pudding. Tart sugar
                        plum I love cookie I love. Lemon drops powder I love
                        liquorice shortbread pie. Icing muffin gummi bears
                        sesame snaps I love cake candy canes muffin. Dessert pie
                        I love biscuit gingerbread donut.
                    </p>

                    <h2>How it began</h2>
                    <p>
                        Pie tootsie roll sugar plum sugar plum toffee
                        gingerbread. I love sweet I love biscuit I love cotton
                        candy I love. Tiramisu tiramisu sweet muffin I love
                        powder bear claw jelly beans. Tootsie roll halvah I love
                        lollipop apple pie I love muffin sweet tiramisu.
                    </p>

                    <h2>Natalie now</h2>
                    <p>
                        Oat cake tart gummi bears I love cotton candy I love
                        macaroon brownie cookie. Jujubes donut bear claw candy
                        canes wafer soufflé danish. Soufflé I love sweet
                        shortbread shortbread cake gingerbread.
                    </p>
                </div>
            </article>
            {/*
            <section className="full-bleed">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <InstagramEmbed
                        url="https://www.instagram.com/p/CkzQpPqpuyJ/"
                        width={'490'}
                    />
                </div>
            </section>
            */}
        </main>
    )
}
