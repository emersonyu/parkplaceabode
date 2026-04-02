import Image from 'next/image'
import { playfairDisplay } from '../../utils/fonts'
import { PageCTA } from '../../components/PageCTA'
import styles from './about.module.css'

export default function About() {
    return (
        <main>
            {/* ── Page Header ── */}
            <header className={styles.pageHeader}>
                <span className={styles.eyebrow}>Our Story</span>
                <h1
                    className={`${playfairDisplay.className} ${styles.pageTitle}`}
                >
                    About Natalie
                </h1>
            </header>

            {/* ── Intro Split ── */}
            <section className={styles.introSection}>
                <div className={styles.introImageWrap}>
                    <Image
                        src="/natalie_about.jpeg"
                        width={600}
                        height={750}
                        alt="Natalie Park in her workshop"
                        className={styles.introImage}
                    />
                </div>
                <div className={styles.introContent}>
                    <h2
                        className={`${playfairDisplay.className} ${styles.introHeading}`}
                    >
                        Designed with intention,
                        <br />
                        <em>built by hand</em>
                    </h2>
                    <p>
                        Natalie Park is the founder and maker behind Park Place
                        Abode — a San Jose-based studio specializing in custom
                        cabinetry that bridges fine design and skilled craft. Every
                        piece she creates starts with a conversation and ends with
                        something that feels like it was always meant to be there.
                    </p>
                    <p>
                        Cupcake ipsum dolor sit amet muffin gummi bears. Danish I
                        love sugar plum brownie caramels pudding. Tart sugar plum I
                        love cookie I love. Lemon drops powder I love liquorice
                        shortbread pie.
                    </p>
                </div>
            </section>

            {/* ── Story Sections ── */}
            <section className={styles.storySection}>
                <div className={styles.storyGrid}>
                    <div className={styles.storyItem}>
                        <span className={styles.storyNumber}>01</span>
                        <h2
                            className={`${playfairDisplay.className} ${styles.storyHeading}`}
                        >
                            How it began
                        </h2>
                        <p>
                            Pie tootsie roll sugar plum sugar plum toffee
                            gingerbread. I love sweet I love biscuit I love cotton
                            candy I love. Tiramisu tiramisu sweet muffin I love
                            powder bear claw jelly beans. Tootsie roll halvah I
                            love lollipop apple pie I love muffin sweet tiramisu.
                        </p>
                        <p>
                            Oat cake tart gummi bears I love cotton candy I love
                            macaroon brownie cookie. Jujubes donut bear claw candy
                            canes wafer soufflé danish. Soufflé I love sweet
                            shortbread shortbread cake gingerbread.
                        </p>
                    </div>

                    <div className={styles.storyItem}>
                        <span className={styles.storyNumber}>02</span>
                        <h2
                            className={`${playfairDisplay.className} ${styles.storyHeading}`}
                        >
                            The craft
                        </h2>
                        <p>
                            Jujubes chocolate bar tootsie roll tiramisu bonbon
                            fruitcake. Marshmallow jelly-o lemon drops wafer
                            halvah jelly-o brownie danish. Jujubes oat cake
                            chocolate bar chocolate cake fruitcake ice cream
                            caramels.
                        </p>
                        <p>
                            Fruitcake jelly-o marzipan toffee icing. Oat cake
                            cake cake lemon drops. Cake cupcake candy canes
                            gingerbread fruitcake pie powder muffin biscuit.
                        </p>
                    </div>

                    <div className={styles.storyItem}>
                        <span className={styles.storyNumber}>03</span>
                        <h2
                            className={`${playfairDisplay.className} ${styles.storyHeading}`}
                        >
                            Natalie today
                        </h2>
                        <p>
                            Oat cake tart gummi bears I love cotton candy I love
                            macaroon brownie cookie. Jujubes donut bear claw candy
                            canes wafer soufflé danish. Soufflé I love sweet
                            shortbread shortbread cake gingerbread.
                        </p>
                        <p>
                            Based in San Jose, CA, she works with homeowners and
                            designers across the Bay Area. Follow along on{' '}
                            <a
                                href="https://www.instagram.com/parkplaceabode/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @parkplaceabode
                            </a>{' '}
                            to see projects in progress.
                        </p>
                    </div>
                </div>
            </section>

            <PageCTA />
        </main>
    )
}
