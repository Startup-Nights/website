import { Button, ButtonSecondary } from "./button"

export const ContentBlock = ({ data }) => {
    return (
        <div className="max-w-md py-8">
            <h3 className="text-base font-medium leading-7 text-sn-yellow uppercase">
                {data?.subtitle}
            </h3>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                {data?.title}
            </h2>

            {data?.content && data.content.map((content, i) => (
                <p key={`content-block-${data?.title}-${i}`} className="mt-6 text-md leading-6 text-gray-300">
                    {content}
                </p>
            ))}

            {(data?.cta || data?.cta_secondary) && (
                <div className="mt-12 grid grid-cols-1 gap-y-6 md:flex md:flex-wrap md:gap-x-4">
                    {data?.cta && data.cta.text !== '' && (
                        <div>
                            <Button link={data?.cta?.link} text={data?.cta?.text}>
                            </Button>
                        </div>
                    )}

                    {data?.cta_secondary && data.cta_secondary.text !== '' && (
                        <div>
                            <ButtonSecondary link={data?.cta_secondary?.link} text={data?.cta_secondary?.text}>
                            </ButtonSecondary>
                        </div>
                    )}
                </div>
            )}
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