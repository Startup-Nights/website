import type { Template } from "tinacms";
import Image from "next/image";
import { Button, ButtonSecondary } from "../items/button";

export const Hero = ({ data }) => {
    return (
        <div className="relative">
            {data.image && data.image.src && data.image.src !== '' && (
                <div className='absolute inset-0'>
                    <Image
                        className="w-full h-full object-cover"
                        src={data.image.src}
                        alt={data.image.alt}
                        width="0"
                        height="0"
                        sizes="100vw"
                    />
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
                    <div className="absolute inset-0 mix-blend-multiply bg-slate-200" />
                </div>
            )}

            {data.video && data.video.src && (
                <div className="relative max-w-7xl mx-auto text-center h-[500px] md:h-[600px] lg:h-[800px]">
                    <div className="absolute bottom-0 left-0 right-0 pb-12 px-8">
                        <div className="max-w-3xl mx-auto">
                            {data?.subtitle && (
                                <h2 className="font-medium leading-7 text-gray-200 lg:text-2xl">
                                    {data?.subtitle}
                                </h2>
                            )}
                            <h1 className="mt-2 block text-6xl font-bold tracking-tight text-gray-200 lg:text-6xl">
                                {data?.title}
                            </h1>
                            {data?.title_line2 && (
                                <h2 className="mt-2 text-6xl font-bold tracking-tight text-gray-200 lg:text-6xl">
                                    {data?.title_line2}
                                </h2>
                            )}
                        </div>

                        {(data?.cta || data?.cta_secondary) && (
                            <div className="flex justify-center">
                                <div className="mt-8 grid grid-cols-1 gap-y-6 md:flex md:flex-wrap md:gap-x-4">
                                    {data?.cta && data.cta.text !== '' && (
                                        <div>
                                            <Button link={data?.cta?.link} new_tab={data?.cta?.new_tab} text={data?.cta?.text}>
                                            </Button>
                                        </div>
                                    )}

                                    {data?.cta_secondary && data.cta_secondary.text !== '' && (
                                        <div>
                                            <ButtonSecondary link={data?.cta_secondary?.link} without_background={data?.cta_secondary?.without_background} new_tab={data?.cta_secondary?.new_tab} text={data?.cta_secondary?.text}>
                                            </ButtonSecondary>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {!data.video && (
                <div className="relative max-w-7xl mx-auto py-32 px-8 lg:py-52 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-medium leading-7 text-gray-200 lg:text-2xl">
                            {data?.subtitle}
                        </h2>
                        <h1 className="mt-2 block text-6xl font-bold tracking-tight text-gray-200 lg:text-6xl">
                            {data?.title}
                        </h1>
                        <h2 className="mt-2 text-6xl font-bold tracking-tight text-gray-200 lg:text-6xl">
                            {data?.title_line2}
                        </h2>
                    </div>

                    {(data?.cta || data?.cta_secondary) && (
                        <div className="flex justify-center">
                            <div className="mt-8 grid grid-cols-1 gap-y-6 md:flex md:flex-wrap md:gap-x-4">
                                {data?.cta && data.cta.text !== '' && (
                                    <div>
                                        <Button link={data?.cta?.link} new_tab={data?.cta?.new_tab} text={data?.cta?.text}>
                                        </Button>
                                    </div>
                                )}

                                {data?.cta_secondary && data.cta_secondary.text !== '' && (
                                    <div>
                                        <ButtonSecondary link={data?.cta_secondary?.link} without_background={data?.cta_secondary?.without_background} new_tab={data?.cta_secondary?.new_tab} text={data?.cta_secondary?.text}>
                                        </ButtonSecondary>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}

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
            type: "string",
            label: "Title second line",
            name: "title_line2",
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
                },
                {
                    type: "boolean",
                    label: "Open in new tab",
                    name: "new_tab"
                }
            ]
        },
        {
            label: "Call to action (secondary)",
            name: "cta_secondary",
            type: "object",
            fields: [
                {
                    type: "string",
                    label: "Link",
                    name: "link",
                },
                {
                    type: "string",
                    label: "Text",
                    name: "text",
                },
                {
                    type: "boolean",
                    label: "Open in new tab",
                    name: "new_tab"
                },
                {
                    type: "boolean",
                    label: "Without background",
                    name: "without_background"
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
