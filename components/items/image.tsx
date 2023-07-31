import Image from "next/image"

export const RoundImage = ({ data }) => {
    return (
        <div className="relative">
            <Image
                src={data.src}
                alt={data.alt}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-3xl"
            />
        </div>
    )
}

export const RoundImageBlockschema: any = {
    type: "object",
    label: "Image",
    name: "image",
    fields: [
        {
            name: "src",
            label: "Image Source",
            type: "image",
        },
        {
            name: "alt",
            label: "Alt Text",
            type: "string",
        },

    ],
}
