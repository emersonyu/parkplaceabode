import { createClient } from 'next-sanity'

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

export default async function Portfolio() {
    const projects = await getProjects()
    return (
        <main>
            <h1>Portfolio</h1>
            {projects.map((project: any) => {
                return (
                    <div key={project._id}>
                        <h2>{project.name}</h2>
                    </div>
                )
            })}
        </main>
    )
}
