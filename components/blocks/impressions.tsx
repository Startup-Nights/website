import React, { useEffect, useState } from "react";
import type { Template } from "tinacms";
import CTA from "./cta";
import Image from "next/image";
import { ContentBlock, ContentBlockSchema } from "../items/contentblock";

export const Impressions = ({ data }) => {
    return (
        <div className="bg-sn-black">
            <div className="max-w-7xl mx-auto p-24">
                <div className="grid grid-cols-2 gap-24 items-center">
                    <ContentBlock data={data?.content_block} />

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
        ContentBlockSchema,
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
    ],
};
