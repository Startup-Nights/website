import * as React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

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

                {data.video && data.video.src && (
                    <div className='absolute inset-0'>
                        <video
                            autoPlay
                            loop={true}
                            muted
                            className="h-full w-full image object-cover"
                            poster={data.video.fallback}
                        >
                            <source
                                src="https://tinyrocket.fra1.digitaloceanspaces.com/background_video.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>

                        <div className="absolute inset-0 mix-blend-multiply bg-slate-400" />
                    </div>
                )}


                <div className="relative">
                    <Container>
                        <div className="md:grid md:grid-cols-3">
                            {data.text && (
                                <div className="content-block col-span-2">
                                    <TinaMarkdown content={data.text} />
                                </div>
                            )}
                        </div>

                        {data.cta && (
                            <div className='relative'>
                                <a className="h6 uppercase flex items-center hover:underline hover:underline-offset-4" href={data.cta.link}>
                                    <ArrowLongRightIcon className="h-6 w-6 mr-3" /> {data.cta.text}
                                </a>
                            </div>
                        )}
                    </Container>
                </div>
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
        {
            type: "object",
            label: "Background video",
            name: "video",
            fields: [
                {
                    name: "src",
                    label: "Video source",
                    type: "string",
                },
                {
                    name: "fallback",
                    label: "Fallback image",
                    type: "image",
                },
            ],
        },

    ],
};
