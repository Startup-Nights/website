import { Button, ButtonSecondary } from "./button"

export const ContentBlock = ({ data }) => {
    return (
        <div className="max-w-md py-8">
            <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase">
                {data?.subtitle}
            </h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                {data?.title}
            </h1>

            {data?.content && data.content.map((content, i) => (
                <p key={content?.title} className="mt-6 text-md leading-6 text-gray-300">
                    {content}
                </p>
            ))}

            <div className="mt-20 space-x-4">
                {data?.cta && data.cta.text !== '' && (
                    <Button link={data?.cta?.link} text={data?.cta?.text}>
                    </Button>
                )}

                {data?.cta_secondary && data.cta_secondary.text !== '' && (
                    <ButtonSecondary link={data?.cta_secondary.link} text={data?.cta_secondary.text}>
                    </ButtonSecondary>
                )}
            </div>
        </div>
    )
}

export const ContentBlockSchema: any = {
    label: "Content block",
    name: "content_block",
    type: "object",
    fields: [
        {
            type: "string",
            label: "Subtitle",
            name: "subtitle",
        },
        {
            type: "string",
            label: "Title",
            name: "title",
        },
        {
            type: "string",
            label: "Content",
            list: true,
            name: "content",
        },
        {
            label: "Call to action",
            name: "cta",
            type: "object",
            fields: [
                {
                    type: "string",
                    label: "Link",
                    name: "link",
                },
                {
                    type: "string",
                    label: "Text",
                    name: "text",
                }
            ]
        },
        {
            label: "Call to action (secondary)",
            name: "cta_secondary",
            type: "object",
            fields: [
                {
                    type: "string",
                    label: "Link",
                    name: "link",
                },
                {
                    type: "string",
                    label: "Text",
                    name: "text",
                }
            ]
        },
    ]
}