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

                    {data.cta && data.cta.text !== '' && (
                        <div className="mt-12 text-center">
                            <CTA data={data} />
                        </div>
                    )}
                </div>

                <div className="space-y-24 text-center">
                    {data.partners && data.partners.map((category, i: number) => (
                        <div key={category.title}>
                            <div className="lg:grid-cols-3"></div>
                            <div className="lg:grid-cols-4"></div>
                            <div className="lg:grid-cols-5"></div>
                            <div className="lg:grid-cols-6"></div>

                            <h2 className="text-xl font-bold leading-7 text-sn-black-light uppercase">
                                {category.title}
                            </h2>

                            <ul className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-${category.grid_cols ? category.grid_cols : 4} gap-8 md:gap-18 py-4 md:py-8`}>
                                {category.partners && category.partners.map((partner, i: number) => (
                                    <Link href={partner?.link ? partner.link : '/'} key={`partner-${i}`} target={'_blank'} className='relative'>
                                        <li className="group relative p-2 sm:p-8 border-2 border-transparent rounded-xl sm:rounded-3xl transition-all hover:bg-gray-50">
                                            <Image
                                                width={300}
                                                height={200}
                                                alt={partner?.alt ? partner.alt : 'undefined' }
                                                src={partner?.src ? partner.src : '/user.svg' }
                                                placeholder="blur"
                                                className="select-none"
                                                blurDataURL={placeholderBox}
                                            />
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
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
            type: "object",
            label: "Partners",
            name: "partners",
            list: true,
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
                            name: "link",
                            label: "Partner website",
                        },
                    ]
                },
            ]
        },
    ],
};
