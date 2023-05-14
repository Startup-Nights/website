import React from "react";
import type { Template } from "tinacms";

export const ContentWide = ({ data }) => {
    return (
        <div className={data.background_color ? data.background_color : 'bg-sn-black-light'}>
            <div className="max-w-5xl mx-auto py-12 px-8 lg:p-24">
                <div className="mb-12">
                    <h3 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                        {data?.subtitle}
                    </h3>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data?.title}
                    </h2>
                </div>

                <div className="space-y-8">
                    {data?.content && data.content.map((content, i) => (
                        <div key={`content-block-${data?.title}-${i}`}>
                            <h4 className="text-xl font-medium leading-7 text-gray-300 uppercase mb-4">
                                {content.title}
                            </h4>

                            {content.text && content.text.map((paragraph, i) => (
                                <p key={`content-block-${data.title}-${i}`} className="mt-2 text-md leading-6 text-gray-400">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const contentWideBlockSchema: Template = {
    name: "content_wide",
    label: "Content wide",
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
            label: "Content",
            name: "content",
            list: true,
            fields: [
                {
                    type: "string",
                    label: "Title",
                    name: "title",
                },
                {
                    type: "string",
                    label: "Text",
                    list: true,
                    name: "text",
                },
            ]
        },
    ],
};
