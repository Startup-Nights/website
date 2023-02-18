import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { Section } from "../util/section";
import { Container } from "../util/container";

export const Content = ({ data }) => {
    return (
        <Section >
            <Container className={`content-block`} >
                <TinaMarkdown content={data.body} />
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
            label: "Body",
            name: "body",
            templates: []
        },
    ],
};
