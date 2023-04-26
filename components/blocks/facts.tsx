import React from "react";
import type { Template } from "tinacms";
import CTA from "./cta";
import { ContentBlock, ContentBlockSchema } from "../items/contentblock";

export const Facts = ({ data }) => {
    return (
        <div className="bg-sn-black-light">
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">

                {/* ugly hack because tailwind otherwise would not generate the necessary classes */}
                <div className="col-span-2 col-span-3 col-span-4 col-span-5"></div>
                <div className="row-span-2 row-span-3 row-span-4 row-span-5"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-24 items-center">
                    <div className={`grid grid-rows-${data?.figures?.length} grid-flow-col gap-4`}>
                        {data.figures && data.figures.map((figure, i) => (
                            <div key={`facts-${i}`} className={`${figure.rows > 1 ? ('row-span-' + figure.rows) : ('')} ${figure.cols > 1 ? ('col-span-' + figure.cols) : ('')} rounded-3xl bg-sn-black-lightest p-4 md:p-6 lg:p-8 `}>
                                <div className={`h-full grid gap-2 lg:gap-4 content-center ${figure.rows > 1 ? ('grid-cols-1') : ('grid-cols-2')}`}>
                                    <div className="text-sn-yellow flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-center grid grid-cols-1 content-center">
                                        <p className="text-3xl md:text-4xl lg:text-5xl">{figure.number}</p>
                                        <p className="mt-1 lg:mt-2 text-sm md:text-lg lg:text-xl text-gray-400">{figure.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <ContentBlock data={data?.content_block} />
                </div>
            </div>
        </div>
    );
};

export const factsBlockSchema: Template = {
    name: "facts",
    label: "Facts",
    fields: [
        ContentBlockSchema,
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
    ],
};
