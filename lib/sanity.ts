import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const sanityClient = createClient({
    projectId: 'w9ib5hjc',
    dataset: 'production',
    apiVersion: '2023-09-22',
    useCdn: false,
})

const builder = createImageUrlBuilder(sanityClient)

export const urlFor = (source: any) => builder.image(source)

export const getFeaturedProjects = async () => {
    return sanityClient.fetch(
        `*[_type == "project"] | order(_createdAt desc)[0...6] {
            _id,
            name,
            slug,
            description,
            images
        }`
    )
}
