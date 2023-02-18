import React from "react";
import type { Template } from "tinacms";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const Gif = ({ data }) => {
    return (
        <Section>
            <Container className={`content-block`} >
                <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <img className='rounded w-full h-auto' src={data.gif} />
                    <div>
                        <TinaMarkdown content={data.body} />
                    </div>
                </div>
            </Container>
        </Section >
    );
};

export const gifBlockSchema: Template = {
    name: "gif",
    label: "Gif",
    fields: [
        {
            type: "string",
            label: "Gif",
            name: "gif",
        },
        {
            type: "rich-text",
            label: "Body",
            name: "body",
            templates: []
        },
    ],
}
