import Image from "next/image"

export const RoundImage = ({ data }) => {
    return (
        <div className="relative aspect-video overflow-hidden rounded-3xl">
            <div className='absolute inset-0'>
                <Image
                    className="w-full h-full object-cover"
                    src={data.src}
                    alt={data.alt}
                    width="0"
                    height="0"
                    sizes="100vw"
                />
            </div>
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
