import * as React from "react";
import type { Template } from "tinacms";
import Image from "next/image";
import { placeholderBox } from "../items/placeholder";
import Link from "next/link";
import CTA from "./cta";

// https://dev.to/holdmypotion/react-custom-cursor-no-extra-dependencies-25ki
export const Partners = ({ data }) => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-black-light uppercase tracking-widest">
                        {data.subtitle}
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-sn-black sm:text-6xl">
                        {data.title}
                    </h1>
                    {data.paragraph && (
                        <p className="max-w-2xl mx-auto mt-8 text-left text-base font-regular tracking-normal text-black">
                            {data.paragraph}
                        </p>
                    )}
                </div>

                <div className="space-y-24 text-center">
                    {data.partners && data.partners.map((category, i: number) => (
                        <div key={category.title}>
                            {category?.title && (
                                <h2 className="text-xl font-bold leading-7 text-sn-black-light uppercase">
                                    {category.title}
                                </h2>
                            )}

                            <ul className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-${category.grid_cols ? category.grid_cols : 4} gap-4 sm:gap-8 md:gap-12 py-4 md:py-8`}>
                                {category.partners && category.partners.map((partner, i: number) => (
                                    <li key={`partner-${i}`}>
                                        <Link href={partner?.link ? partner.link : '/'} target={'_blank'} className='p-4 grid grid-cols-1 group'>
                                            <div className="relative aspect-[3/2] w-full h-auto group-hover:bg-gray-100 rounded-xl ">
                                                <div className={`absolute inset-0 px-8 py-4 ${category.grid_cols == 2 ? 'lg:px-16 lg:py-4 ' : ''} `}>
                                                    <Image
                                                        width={300}
                                                        height={200}
                                                        alt={partner?.alt ? partner.alt : 'undefined'}
                                                        src={partner?.src ? partner.src : '/user.svg'}
                                                        placeholder="blur"
                                                        className="w-full h-full object-contain select-none"
                                                        blurDataURL={placeholderBox}
                                                    />
                                                </div>
                                            </div>
                                            <p className="invisible h-0 italic lg:mt-6 lg:visible lg:h-auto text-lg font-semibold leading-7 text-sn-black-light">
                                                {partner?.quote}
                                            </p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {data.cta && data.cta.text !== '' && (
                    <div className="text-center">
                        <div className="mt-12 text-center">
                            <CTA data={data} />
                        </div>
                    </div>
                )}

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
            type: "string",
            label: "Text",
            name: "paragraph",
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
            type: "object",
            label: "Partners",
            name: "partners",
            list: true,
            ui: {
                itemProps: (item) => {
                    return { label: item?.title }
                },
            },
            fields: [
                {
                    type: "string",
                    label: "Category title",
                    name: "title",
                },
                {
                    type: "number",
                    label: "Number of partners per line",
                    name: "grid_cols",
                },
                {
                    type: "object",
                    label: "Partners",
                    name: "partners",
                    list: true,
                    ui: {
                        itemProps: (item) => {
                            return { label: item?.alt }
                        },
                    },
                    fields: [
                        {
                            type: "image",
                            label: "Image Source",
                            name: "src",
                        },
                        {
                            type: "string",
                            label: "Alt Text",
                            name: "alt",
                        },
                        {
                            type: "string",
                            label: "Quote",
                            name: "quote",
                        },
                        {
                            type: "string",
                            name: "link",
                            label: "Partner website",
                        },
                    ]
                },
            ]
        },
    ],
};
