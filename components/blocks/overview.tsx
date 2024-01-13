import React from "react";
import type { Template } from "tinacms";
import { ColorPickerInput } from "../fields/color";
import Image from "next/image";
import { getIcon } from "../util/icons";

export const Overview = ({ data }) => {
    return (
        <div className={data.background_color ? data.background_color : 'bg-sn-black'}>
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-12 sm:mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                        {data.subtitle}
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data.title}
                    </h1>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data?.benefit_items && data.benefit_items.map((benefit: any, i: number) => (
                        <li key={i} className={'relative text-left bg-gradient-to-tr from-sn-black-lightest to-gray-900' +
                            ' rounded-3xl py-8 px-6 md:py-16 md:px-12 overflow-hidden'}>
                            {benefit.image && benefit.image.src && benefit.image.src !== '' && (
                                <div className='absolute inset-0'>
                                    <Image
                                        className="w-full h-full object-cover blur-[2px]"
                                        src={benefit.image.src}
                                        alt={benefit.image.alt}
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                    />
                                    <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-tr from-sn-black-lightest to-gray-600" />
                                </div>
                            )}

                            <div className="relative">
                                <div className="flex justify-center mb-6">{getIcon(benefit.icon ? benefit.icon : 'cog', 'mr-1.5 h-10 w-10 md:h-10 md:w-10 flex-shrink-0 text-gray-200 ')}</div>
                                <p className="font-semibold text-2xl text-center text-gray-300 mb-6">{benefit.title}</p>
                                <div className="space-y-4">
                                    {benefit?.description && benefit.description.map((description: any, key: number) => (
                                        <p key={`description-${i}-${key}`} className="text-md leading-6 text-gray-300">{description}</p>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export const overviewBlockSchema: Template = {
    name: "overview",
    label: "Overview",
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
            type: "object",
            label: "Benefit items",
            name: "benefit_items",
            list: true,
            fields: [
                {
                    type: "string",
                    label: "Icon",
                    name: "icon",
                },
                {
                    type: "string",
                    label: "Title",
                    name: "title",
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
                    type: "string",
                    label: "Description",
                    name: "description",
                    list: true
                },
            ],
        },
        {
            type: "string",
            name: "background_color",
            label: "Background color",
            ui: {
                component: ColorPickerInput as any
            }
        },
    ],
};

