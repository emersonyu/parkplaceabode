import { createClient } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

const client = createClient({
    projectId: 'w9ib5hjc',
    dataset: 'production',
    apiVersion: '2023-09-22',
    useCdn: false,
})

const getProjects = async () => {
    const projects = await client.fetch(`*[_type == "project"]`)
    return projects
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

export default async function Portfolio() {
    const projects = await getProjects()
    return (
        <main>
            <h1>Portfolio</h1>
            {projects.map((project: any) => {
                console.log(project)
                const { images } = project
                return (
                    <div key={project._id} className="list-item">
                        <h2>{project.name}</h2>
                        <PortableText value={project.description} />
                        <Link href="/portfolio/">More...</Link>
                    </div>
                )
            })}
        </main>
    )
}
