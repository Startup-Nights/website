import Image from "next/image";
import React from "react";
import type { Template } from "tinacms";
import { placeholderBox } from "../items/placeholder";

export const Imagegrid = ({ data }) => {
    return (
        <div
            className={data.background_color ? data.background_color : "bg-sn-black"}
            id={data.id ? data.id : ''}
        >
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                        {data.subtitle}
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data.title}
                    </h1>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
                    {data?.images &&
                        data.images.map((data: any, i: number) => (
                            <div key={`image-${i}`} className="relative grid content-start mx-12">
                                <Image
                                    width={450}
                                    height={450}
                                    className="rounded-full"
                                    alt={data?.image?.alt}
                                    src={data?.image?.src}
                                    placeholder="blur"
                                    blurDataURL={placeholderBox}
                                />
                                <div className="relative grid content-center justify-center text-center -mt-2 md:-mt-6">
                                    <span className="bg-sn-yellow -skew-x-6 rounded-sm">
                                        <p className="text-sm md:text-md m-0 px-2 py-1 skew-x-6 md:px-4 md:py-3 text-black">
                                            {data?.name}
                                        </p>
                                    </span>
                                </div>
                                {data?.position && (
                                    <div className="relative grid content-center justify-end text-center -mt-1">
                                        <span className="bg-white -skew-x-6 rounded-sm">
                                            <p className="text-sm md:text-md m-0 px-2 skew-x-6 py-1 md:px-4 md:py-2 text-black">
                                                {data?.position}
                                            </p>
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export const imagegridBlockSchema: Template = {
    name: "imagegrid",
    label: "Imagegrid",
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
            label: "ID",
            name: "id",
        },
        {
            type: "object",
            label: "Images",
            name: "images",
            list: true,
            fields: [
                {
                    type: "string",
                    label: "Name",
                    name: "name",
                },
                {
                    type: "string",
                    label: "Position",
                    name: "position",
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
        },
    ],
};
