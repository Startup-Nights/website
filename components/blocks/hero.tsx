import * as React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import CTA from "./cta";

export const Hero = ({ data }) => {
    return (
        <div className="relative">
            {data.image && !data.video && data.image.src && (
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
                            src={data.video.src}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 mix-blend-multiply bg-slate-500" />
                </div>
            )}

            <div className="relative max-w-7xl mx-auto pb-12 pt-36 px-8 lg:pb-24 lg:pt-48 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-sm sm:text-base font-medium leading-7 text-sn-yellow uppercase">
                        {data?.subtitle}
                    </h2>
                    <h1 className="mt-2 text-6xl font-bold tracking-tight text-gray-200">
                        {data?.title}
                    </h1>
                </div>

                {data.cta && data.cta.text !== '' && (
                    <div className="mt-12">
                        <CTA data={data} />
                    </div>
                )}
            </div>
        </div>
    );
};

export const heroBlockSchema: Template = {
    name: "hero",
    label: "Hero",
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
                    type: "image",
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
