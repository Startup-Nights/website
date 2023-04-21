import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { Section } from "../util/section";
import { Container } from "../util/container";
import CTA from "./cta";

export const Content = ({ data }) => {
    return (
        <Section>
            <Container width="full" className="relative" paddy="large">
                {data.image && data.image.src && (
                    <div className='absolute inset-0'>
                        <img className="w-full h-full object-cover" src={data.image.src} />
                        <div className="absolute inset-0 mix-blend-multiply opacity-50 bg-gradient-to-br from-slate-900 to-transparent" />
                    </div>
                )}

                <Container>
                    <div className="relative content-block grid md:grid-cols-2">
                        <div>
                            <TinaMarkdown content={data.first_row} />

                            {data.cta && data.cta.text !== '' && (
                                <div className="mt-12">
                                    <CTA data={data} />
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </Container>
        </Section >
    );
};

export const contentBlockSchema: Template = {
    name: "content",
    label: "Content",
    fields: [
        {
            type: "rich-text",
            label: "First row",
            name: "first_row",
            templates: []
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
};
