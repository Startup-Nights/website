import React from "react";
import type { Template } from "tinacms";
import CTA from "./cta";

export const PartnerInfo = ({ data }) => {
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

                    <div className=''>
                        <div className="mt-10 max-w-xl space-y-4 text-base leading-6 text-gray-500 lg:max-w-none">
                            {data.infopoints && data.infopoints.map((feature) => (
                                <a href={feature?.link} target="_blank" className="block">
                                    <div key={feature.name} className="relative bg-sn-black-light rounded-3xl p-8 border-2 border-transparent hover:border-white group">
                                        <div className="absolute invisible -top-3 -right-3 p-2 bg-white rounded-full text-black group-hover:visible">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </div>
                                        <div className="font-semibold text-xl text-gray-300">
                                            {feature.name}
                                        </div>
                                        <div className="text-md mt-4 leading-6 text-gray-400">{feature?.text}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const partnerinfoBlockSchema: Template = {
    name: "partnerinfo",
    label: "Partnerinfo",
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
            label: "Infopoints",
            name: "infopoints",
            list: true,
            fields: [
                {
                    type: "string",
                    label: "Name",
                    name: "name",
                },
                {
                    type: "string",
                    label: "Text",
                    name: "text",
                },
                {
                    type: "string",
                    label: "Link",
                    name: "link",
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
