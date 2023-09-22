import React from "react";
import type { Template } from "tinacms";
import { ColorPickerInput } from "../fields/color";
import Link from "next/link";

export const Quotes = ({ data }) => {
    return (
        <div className={data.background_color ? data.background_color : 'bg-sn-black'}>
            <div className="py-12 px-8 lg:p-24">
                <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                        {data.subtitle}
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data.title}
                    </h1>
                </div>

                <div className="relative snap-x scroll-smoth flex gap-8 w-auto overflow-x-auto transition-all py-8">
                    {data?.videos && data.videos.map((item: any, i: number) => (
                        <div className="group relative h-[200px] w-[240px] sm:h-[400px] sm:w-[480px] snap-center rounded-3xl overflow-hidden shrink-0">
                            <div className="absolute inset-0">
                                <video
                                    autoPlay
                                    loop={true}
                                    muted
                                    className="h-full w-full image object-cover"
                                    poster={item.video.fallback}
                                >
                                    <source
                                        src={item.video.src}
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute inset-0 group-hover:mix-blend-multiply group-hover:bg-slate-400" />
                            </div>

                            <div className="absolute top-0 bottom-0 left-0 right-0">
                                <Link
                                    href={item.video.src}
                                    target="_blank"
                                    className="font-medium leading-7 text-gray-200 lg:text-2xl invisible group-hover:visible">

                                    <div className="h-full flex justify-center items-center">
                                        <p>
                                            Check out the full video
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const quotesBlockSchema: Template = {
    name: "quotes",
    label: "Quotes",
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
            label: "Videos",
            name: "videos",
            list: true,
            fields: [
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
        },
        {
            type: "string",
            name: "background_color",
            label: "Background color",
            ui: {
                component: ColorPickerInput as any
            }
        },
    ],
};

