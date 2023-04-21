import React from "react";
import type { Template } from "tinacms";
import Image from "next/image";
import CTA from "./cta";

export const Facts = ({ data }) => {
    return (
        <div className="max-w-8xl mx-auto p-24">
            <div className="grid grid-cols-2 gap-24">
                <div className="max-w-md">
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
            </div>
        </div>
    );
};

export const factsBlockSchema: Template = {
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
            label: "Figures",
            name: "figures",
            list: true,
            fields: [
                {
                    type: "string",
                    label: "Name",
                    name: "name",
                },
                {
                    type: "string",
                    label: "Number",
                    name: "number",
                },
                {
                    type: "string",
                    label: "Icon",
                    name: "icon",
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
