import React from "react";
import type { Template } from "tinacms";
import CTA from "./cta";

export const Facts = ({ data }) => {
    return (
        <div className="max-w-8xl mx-auto p-24 bg-sn-black-light">

            {/* ugly hack because tailwind otherwise would not generate the necessary classes */}
            <div className="col-span-2 col-span-3 row-span-2 row-span-3"></div>

            <div className="grid grid-cols-2 gap-24">
                <div className="grid grid-rows-3 grid-flow-col gap-4">
                    {data.figures && data.figures.map((figure, i) => (
                        <div className={`${figure.rows > 1 ? ('row-span-' + figure.rows) : ('')} ${figure.cols > 1 ? ('col-span-' + figure.cols) : ('')} rounded-3xl bg-sn-black-lightest p-8 `}>
                            <div className={`h-full grid gap-y-12 content-center ${figure.rows > 1 ? ('grid-cols-1') : ('grid-cols-2')}`}>
                                <div className="text-sn-yellow flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20 h-20">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                    </svg>
                                </div>
                                <div className="text-center">
                                    <p className="text-4xl">{figure.number}</p>
                                    <p className="mt-2 text-xl text-gray-400">{figure.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

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
    name: "facts",
    label: "Facts",
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
                {
                    type: "string",
                    label: "Row-span",
                    name: "rows",
                },
                {
                    type: "string",
                    label: "Col-span",
                    name: "cols",
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
