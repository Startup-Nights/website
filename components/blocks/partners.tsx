import * as React from "react";
import type { Template } from "tinacms";
import Image from "next/image";
import { placeholderBox } from "../items/placeholder";

import { useEffect, useState } from "react";
import Link from "next/link";

// https://dev.to/holdmypotion/react-custom-cursor-no-extra-dependencies-25ki
export const Partners = ({ data }) => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto p-24">
                <div className="text-center mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-black-light uppercase">
                        {data.subtitle}
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-sn-black sm:text-6xl">
                        {data.title}
                    </h1>
                </div>

                <ul className="grid grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 py-4 md:py-12">
                    {data.partners && data.partners.map((partner, i: number) => (
                        <li key={`partner-${i}`}>
                            <Link href={partner?.link} target={'_blank'} className='relative'>
                                <Image
                                    width={300}
                                    height={200}
                                    alt={partner?.alt}
                                    src={partner?.src}
                                    placeholder="blur"
                                    blurDataURL={placeholderBox}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export const partnersBlockSchema: Template = {
    name: "partner_list",
    label: "Partners",
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
            label: "Call to action",
            name: "cta",
            type: "object",
            fields: [
                {
                    label: "Link",
                    name: "link",
                    type: "string"
                },
                {
                    label: "Text",
                    name: "text",
                    type: "string"
                }
            ]
        },
        {
            label: "Partners",
            name: "partners",
            type: "object",
            list: true,
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
                {
                    name: "link",
                    label: "Partner website",
                    type: "string",
                },
            ]
        },
    ],
};
