import React from "react";
import type { Template } from "tinacms";
import CTA from "./cta";
import Image from "next/image";

export const About = ({ data }) => {
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

                    <div className="flex items-center">
                        <div className="relative rounded-3xl bg-sn-black-light p-12 overflow-hidden">
                            <div className='absolute -top-36 -right-36 text-sn-yellow'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-80 h-80">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                            </div>

                            <div className="grid grid-cols-1 text-center">
                                <div className="flex justify-center mb-6">
                                    <Image
                                        src={data.testimonial.image.src}
                                        alt={data.testimonial.image.alt}
                                        className="rounded-full"
                                        width={80}
                                        height={80}
                                    />
                                </div>

                                <p className="mt-6 text-md leading-6 text-gray-400">{data.testimonial.quote}</p>

                                <div className="mt-12 text-gray-400">
                                    <p className="">{data.testimonial.name}</p>
                                    <p className="italic">{data.testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const aboutBlockSchema: Template = {
    name: "about",
    label: "About",
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
            label: "Testimonial",
            name: "testimonial",
            fields: [
                {
                    type: "string",
                    label: "Name",
                    name: "name",
                },
                {
                    type: "string",
                    label: "position",
                    name: "position",
                },
                {
                    type: "string",
                    label: "quote",
                    name: "quote",
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
