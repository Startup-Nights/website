import * as React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import CTA from "./cta";
import Image from "next/image";
import { placeholderBox } from "../items/placeholder";

export const Partners = ({ data }) => {
    return (
        <Section className="bg-white">
            <Container className="relative text-black">
                {data.text && (
                    <Container paddx="none" paddy="none" className="content-block">
                        <TinaMarkdown content={data.text} />
                    </Container>
                )}

                {data.cta && data.cta.text !== '' && (
                    <CTA data={data} />
                )}

                <ul className="grid grid-cols-3 gap-4 md:gap-24 py-4 md:py-12">
                    {data.partners && data.partners.map((partner, i: number) => (
                        <li key={`partner-${i}`}>
                            <a href={partner?.link} target={'_blank'} className='relative'>
                                <Image
                                    width={300}
                                    height={200}
                                    alt={partner?.alt}
                                    src={partner?.src}
                                    placeholder="blur"
                                    blurDataURL={placeholderBox}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </Container>
        </Section >
    );
};

export const partnersBlockSchema: Template = {
    name: "partner_list",
    label: "Partners",
    fields: [
        {
            label: "Text",
            name: "text",
            type: "rich-text",
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
            label: "Partners",
            name: "partners",
            type: "object",
            list: true,
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
                {
                    name: "link",
                    label: "Partner website",
                    type: "string",
                },
            ]
        },
    ],
};
