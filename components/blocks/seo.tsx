import { DefaultSeo } from 'next-seo'
import { Template } from 'tinacms'

export const SEO = ({ data }) => {
    const config = {
        title: data?.title ? data?.title : 'Startup Nights - the biggest startup event in Switzerland',
        description: data?.description ? data?.description : 'Meet inspiring founders, industry-leading experts and your potential co-founder.',
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: data?.openGraph?.url ? data?.openGraph?.url : 'https://startup-nights-sigma.vercel.app',
            site_name: data?.openGraph?.site_name ? data?.openGraph?.site_name : 'Startup Nights',
            images: data?.opengraph?.images ? data?.opengraph?.images : [{
                url: 'https://startup-nights-sigma.vercel.app/og_image.png',
                alt: 'Startup Nights Stage',
            }],
        },
    }

    return <DefaultSeo {...config} />
}

export const seoBlockSchema: Template = {
    name: "seo",
    label: "SEO Configuration",
    fields: [
        {
            type: "string",
            name: "title",
            label: "Title"
        },
        {
            type: "string",
            name: "description",
            label: "Description"
        },
        {
            type: "object",
            name: "openGraph",
            label: "Open Graph Settings",
            fields: [
                {
                    type: "string",
                    name: "url",
                    label: "URL"
                },
                {
                    type: "string",
                    name: "site_name",
                    label: "Sitename"
                },
                {
                    type: "object",
                    list: true,
                    name: "images",
                    label: "Images",
                    fields: [
                        {
                            type: "image",
                            name: "url",
                            label: "Image URL",
                        },
                        {
                            type: "string",
                            name: "alt",
                            label: "Alt Text",
                        },
                    ]
                },
            ]
        },
    ]
}