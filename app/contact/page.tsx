import { createClient } from 'next-sanity'

const client = createClient({
    projectId: 'w9ib5hjc',
    dataset: 'production',
    apiVersion: '2023-09-22',
    useCdn: false,
})

const getPets = async () => {
    const pets = await client.fetch(`*[_type == "pet"]`)
    return pets
}

export default async function Contact({}) {
    const pets = await getPets()
    console.log('oets', pets)
    return (
        <main>
            <h1>Contact</h1>
            <p>Some text</p>
        </main>
    )
}
