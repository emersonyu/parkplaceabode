import { createClient } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import styles from './portfolio.module.css'

const client = createClient({
    projectId: 'w9ib5hjc',
    dataset: 'production',
    apiVersion: '2023-09-22',
    useCdn: false,
})

const builder = imageUrlBuilder(client)

const getProjects = async () => {
    const projects = await client.fetch(`*[_type == "project"]`)
    return projects
}

export const getProject = async (slug: string) => {
    console.log('===GETTING', slug)
    const project = await client.fetch(
        `*[_type == "project" && name == "${slug}"]`
    )
    return project
}

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export const urlFor = (source: unknown) => {
    return builder.image(source)
}

const ProjectGallery = (images: any) => {
    return (
        <section>
            <h6>Gallery</h6>
            {images.map((image: any) => {
                return null
            })}
        </section>
    )
}

const Project = ({ project }: Record<string, any>) => {
    return (
        <div className={styles.projectItem}>
            <div className={styles.projectSummary}>
                <h2>{project.name}</h2>
                <PortableText value={project.description} />
                {/*<Link href={`/portfolio/${project.name}`}>More...</Link>*/}
            </div>
            <div className={styles.projectGallery}>
                {project.images &&
                    project.images.map((image: any, i: number) => {
                        return (
                            // eslint-disable-next-line
                            <img
                                key={i}
                                src={urlFor(image).width(420).url()}
                                alt=""
                            />
                        )
                    })}
            </div>
        </div>
    )
}

export default async function Portfolio() {
    const projects = await getProjects()
    return (
        <main>
            <h1 className="sr-only">Portfolio</h1>
            {projects.map((project: unknown) => {
                return <Project key={project._id} project={...project} />
            })}
        </main>
    )
}
