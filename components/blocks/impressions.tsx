import React, { useEffect, useState } from "react";
import type { Template } from "tinacms";
import CTA from "./cta";
import Image from "next/image";

export const Impressions = ({ data }) => {
    const [index, setIndex] = useState(0);

    const setter = (index: number) => {
        if (index === data.images?.length) {
            setIndex(0);
        } else if (index < 0) {
            setIndex(data.images?.length - 1);
        } else {
            setIndex(index);
        }
    }

    useEffect(() => {
        // change the images
        setTimeout(() => setter(index + 1), 5 * 1000)
    })

    return (
        <div className="bg-sn-black">
            <div className="max-w-7xl mx-auto p-24">
                <div className="grid grid-cols-2 gap-24 items-center">
                    <div className="max-w-md py-8">
                        <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase">
                            {data.subtitle}
                        </h2>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                            {data.title}
                        </h1>

                        <p className="mt-6 text-md leading-6 text-gray-300">
                            {data.content}
                        </p>

                        {data.cta && data.cta.text !== '' && (
                            <div className="mt-20">
                                <CTA data={data} />
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 justify-items-center gap-y-8">
                        {data.image && (
                            <div className="relative h-[400px] md:h-[500px] w-[400px] md:w-[500px]  rounded-full overflow-hidden">
                                <div className='absolute inset-0 w-full h-full'>
                                    <Image
                                        src={data.image.src}
                                        alt={data.image.alt}
                                        className="w-full h-full object-cover"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const impressionsBlockSchema: Template = {
    name: "impressions",
    label: "Impressions",
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
            name: "content",
        },
        {
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
    ],
};
