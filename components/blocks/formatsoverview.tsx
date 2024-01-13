import Image from "next/image";
import React from "react";
import type { Template } from "tinacms";
import { placeholderBox } from "../items/placeholder";

export const FormatsOverview = ({ data }) => {
    return (
        <div className="bg-sn-black">
            <div className="max-w-8xl mx-auto p-24">
                <div className="text-center mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase">
                        {data.subtitle}
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data.title}
                    </h1>
                </div>

                <div className="relative">
                    <div
                        id={'formatsinfo'}
                        className="relative w-full flex gap-12 md:gap-16 snap-x overflow-auto scrollbar-hide snap-mandatory mb-8 md:mb-12 md:px-12"
                    >
                        {data.options && data.options.map((format, i: number) => (
                            <div
                                key={`format-${i}`} id={`format-${i}`}
                                className='relative grid content-start'
                            >
                                <div
                                    className={'snap-always snap-center shrink-0 relative h-[200px] md:h-[250px] w-[200px] md:w-[250px]' +
                                        ' group transition-all grid grid-cols-1 md:grid-cols-2'}
                                >
                                    <div className='absolute inset-0 w-full transition-all group-hover:scale-95'>
                                        <Image
                                            width={350}
                                            height={450}
                                            className="w-full h-full object-cover rounded-full"
                                            alt={format?.image?.alt}
                                            src={format?.image?.src}
                                            placeholder="blur"
                                            blurDataURL={placeholderBox}
                                        />
                                    </div>
                                    <div>
                                        <svg
                                            className="h-[200px] md:h-[250px] w-[200px] md:w-[250px] transition-all invisible group-hover:visible"
                                            stroke="#fdc900" strokeWidth={7} fill="#121212" strokeMiterlimit={10} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 429.93 429.93">
                                            <polyline className="st0" points="54,3.5 3.5,3.5 3.5,54 " />
                                            <polyline className="st0" points="380,426.4 426.4,426.4 426.4,380 " />
                                            <polyline className="st0" points="426.4,54 426.4,3.5 375.9,3.5 " />
                                            <polyline className="st0" points="3.5,384.9 3.5,426.4 45,426.4 " />
                                        </svg>
                                    </div>
                                </div>
                                <div className='relative grid content-center justify-center text-center -mt-2 md:-mt-8'>
                                    <span className='bg-sn-yellow -skew-x-6 rounded-sm'>
                                        <p className="h5 m-0 px-2 py-1 skew-x-6 md:px-4 md:py-3 text-black">{format?.name}</p>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const formatsoverviewBlockSchema: Template = {
    name: "formatsoverview",
    label: "Formats overview",
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
            label: "Options",
            name: "options",
            list: true,
            fields: [
                {
                    type: "string",
                    label: "Name",
                    name: "name",
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
