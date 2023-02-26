import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { Section } from "../util/section";
import { Container } from "../util/container";

export const Content = ({ data }) => {
    return (
        <Section >
            <Container className={``} >
                <div className="content-block grid md:grid-cols-2 md:gap-x-24">
                    <div>
                        <TinaMarkdown content={data.first_row} />
                    </div>

                    <div>
                        <TinaMarkdown content={data.second_row} />
                    </div>
                </div>
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
            type: "rich-text",
            label: "Second row",
            name: "second_row",
            templates: []
        },
    ],
};
