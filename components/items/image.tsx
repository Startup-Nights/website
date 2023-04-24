import Image from "next/image"

export const RoundImage = ({ data }) => {
    return (
        <div className="grid grid-cols-1 justify-items-center gap-y-8">
            <div className="relative h-[400px] md:h-[500px] w-[400px] md:w-[500px]  rounded-full overflow-hidden">
                <div className='absolute inset-0 w-full h-full'>
                    <Image
                        src={data.src}
                        alt={data.alt}
                        className="w-full h-full object-cover"
                        width={500}
                        height={500}
                    />
                </div>
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
