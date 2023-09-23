import React from "react";
import type { Template } from "tinacms";
import { ColorPickerInput } from "../fields/color";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export const Quotes = ({ data }) => {
    return (
        <div className={data.background_color ? data.background_color : 'bg-sn-black'}>
            <div className="pb-12 px-8 lg:pb-24">
                <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-200">
                        {data.title}
                    </h1>
                </div>

                <div className="snap-x w-full scroll-smoth flex gap-8 overflow-x-scroll transition-all py-8">
                    {data?.videos && data.videos.map((item: any, i: number) => (
                        <div className="group relative h-[200px] w-[240px] snap-center rounded-3xl shrink-0  border-2 border-transparent hover:border-white">
                            <div className="absolute -top-3 -right-3 p-2 bg-white rounded-full text-black z-10 invisible group-hover:visible">
                                <ArrowTopRightOnSquareIcon className="w-5 h-5" strokeWidth={2} />
                            </div>

                            <div className="absolute inset-0">
                                <video
                                    autoPlay
                                    loop={true}
                                    muted
                                    className="h-full w-full image object-cover rounded-3xl"
                                    poster={item.video.fallback}
                                >
                                    <source
                                        src={item.video.src}
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="absolute top-0 bottom-0 left-0 right-0">
                                <Link
                                    href={item.video.src}
                                    target="_blank"
                                    className="font-semibold leading-7 text-gray-200 text-xl invisible group-hover:visible">

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

