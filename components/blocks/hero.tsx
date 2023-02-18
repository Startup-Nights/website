import * as React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";

export const Hero = ({ data }) => {
    return (
        <Section>
            <Container className="relative max-w-full py-12 sm:py-24">

                {data.image && data.image.src && (
                    <div className='absolute inset-0'>
                        <img className="w-full h-full object-cover" src={data.image.src} />
                        <div className="absolute inset-0 mix-blend-multiply bg-slate-400" />
                    </div>
                )}

                {data.text && (
                    <div className="relative">
                        <Container>
                            <div className="sm:grid sm:grid-cols-2">
                                <div className="content-block">
                                    <TinaMarkdown content={data.text} />
                                </div>
                            </div>
                        </Container>
                    </div>
                )}
            </Container>
        </Section >
    );
};

export const heroBlockSchema: Template = {
    name: "hero",
    label: "Hero",
    fields: [
        {
            label: "Text",
            name: "text",
            type: "rich-text",
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
