import { getProject } from '../page'
import { PortableText } from '@portabletext/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default async function Project({
    params,
}: {
    params: { slug: string }
}) {
    const project = await getProject(decodeURIComponent(params.slug))
    console.log('====PROJ', project)
    const [proj] = project
    if (!proj) {
        return '404'
    }

    return (
        <main>
            <h1>{proj.name}</h1>
            <div key={proj._id} className="list-item">
                <PortableText value={proj.description} />
            </div>
        </main>
    )
}
