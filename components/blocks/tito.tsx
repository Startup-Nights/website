'use client'

import type { Template } from "tinacms";

export const Tito = ({ data }) => {
    return (
        <div className="bg-sn-black-light">
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                        {data.subtitle}
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data.title}
                    </h1>
                </div>

                <iframe className="w-full h-[800px] rounded-xl" src="https://www.b2match.com/e/startup-nights-2024/sign-up" />
            </div>
        </div>
    );
};

export const titoBlockSchema: Template = {
    name: "tito",
    label: "Tito",
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
            label: "Note",
            name: "note",
            fields: [
                {
                    type: "string",
                    label: "Title",
                    name: "title",
                },
                {
                    type: "string",
                    label: "Text",
                    name: "text",
                },
            ]
        }
    ],
};
