import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { playfairDisplay } from '../../../utils/fonts'
import { sanityClient, urlFor } from '../../../lib/sanity'
import styles from './slug.module.css'

export async function generateStaticParams() {
    try {
        const projects = await sanityClient.fetch(
            `*[_type == "project"]{ name }`
        )
        return projects.map((p: { name: string }) => ({
            slug: encodeURIComponent(p.name),
        }))
    } catch {
        return []
    }
}

const getProject = async (name: string) => {
    return sanityClient.fetch(
        `*[_type == "project" && name == $name][0] {
            _id, name, description, images
        }`,
        { name }
    )
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const name = decodeURIComponent(slug)

    let project: any = null
    try {
        project = await getProject(name)
    } catch {
        // fall through to 404
    }

    if (!project) {
        return (
            <main className={styles.notFound}>
                <p>Project not found.</p>
                <Link href="/portfolio" className={styles.backLink}>
                    ← Back to Portfolio
                </Link>
            </main>
        )
    }

    const images: any[] = project.images ?? []

    return (
        <main>
            {/* ── Hero Image ── */}
            {images[0] && (
                <div className={styles.hero}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={urlFor(images[0]).width(2000).url()}
                        alt={project.name}
                        className={styles.heroImage}
                    />
                </div>
            )}

            {/* ── Header ── */}
            <header className={styles.projectHeader}>
                <Link href="/portfolio" className={styles.backLink}>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Portfolio
                </Link>
                <h1
                    className={`${playfairDisplay.className} ${styles.projectTitle}`}
                >
                    {project.name}
                </h1>
            </header>

            {/* ── Content ── */}
            <section className={styles.projectContent}>
                {project.description && (
                    <div className={styles.description}>
                        <PortableText value={project.description} />
                    </div>
                )}

                {/* ── Gallery ── */}
                {images.length > 1 && (
                    <div className={styles.gallery}>
                        {images.slice(1).map((image: any, i: number) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                key={i}
                                src={urlFor(image).width(1400).url()}
                                alt={`${project.name} — image ${i + 2}`}
                                className={styles.galleryImage}
                            />
                        ))}
                    </div>
                )}
            </section>

        </main>
    )
}
