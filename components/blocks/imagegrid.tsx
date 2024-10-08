'use client'

import Image from "next/image";
import React from "react";
import { ColorPickerInput } from "../fields/color";
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

export const Imagegrid = ({ data }) => {
    const [open, setOpen] = useState(false)
    const [selectedSpeaker, setSelectedSpeaker] = useState(data?.images[0])

    return (
        <div
            className={data.background_color ? data.background_color : "bg-sn-black"}
            id={data.id ? data.id : ''}
        >
            <div className="max-w-7xl mx-auto py-4 md:py-12 px-2 sm:px-8 lg:px-12">
                {data?.subtitle && data?.title && (
                    <div className="text-center mb-20">
                        <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                            {data.subtitle}
                        </h2>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                            {data.title}
                        </h1>
                        {data.paragraph && (
                            <p className="max-w-2xl mx-auto mt-8 text-left text-base font-regular tracking-normal text-gray-200">
                                {data.paragraph}
                            </p>
                        )}
                    </div>
                )}

                <Modal open={open} setOpen={setOpen} selectedSpeaker={selectedSpeaker} />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-8">
                    {data?.images &&
                        data.images.map((data: any, i: number) => (
                            <div
                                key={`image-${i}`}
                                className="relative grid content-start mx-6 md:mx-12 aspect-square rounded-full group"
                                onClick={() => {
                                    setSelectedSpeaker(data)
                                    setOpen(true)
                                }}
                            >
                                <div className="relative grid content-center justify-center text-center h-[150px] w-[150px] md:h-[200px] md:w-[200px] mx-auto">
                                    <div className="absolute inset-0 w-full h-full">
                                        <Image
                                            width={600}
                                            height={600}
                                            className="w-full h-full object-cover rounded-full border-4 border-transparent group-hover:border-sn-yellow group-hover:cursor-pointer transition-all"
                                            alt={data?.image?.alt}
                                            src={data?.image?.src}
                                        />
                                    </div>
                                </div>
                                <div className="relative grid content-center justify-center text-center -mt-2 md:-mt-6">
                                    <span className="bg-sn-yellow -skew-x-6 rounded-sm">
                                        <p className="text-sm md:text-md m-0 px-2 py-1 skew-x-6 md:px-3 md:py-2 text-black">
                                            {data?.name}
                                        </p>
                                    </span>
                                </div>
                                {data?.position && (
                                    <div className="relative grid content-center justify-end text-center -mt-1">
                                        <span className="bg-white -skew-x-6 rounded-sm">
                                            <p className="text-sm md:text-md m-0 px-2 skew-x-6 py-1 md:px-3 md:py-2 text-black">
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

export const imagegridBlockSchema: any = {
    type: "object",
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
            label: "Text",
            name: "paragraph",
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
            ui: {
                itemProps: (item) => {
                    return { label: item?.name }
                },
            },
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
                    type: "string",
                    label: "Description",
                    name: "description",
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

function Modal({ open, setOpen, selectedSpeaker }) {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-sn-black-light bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-2xl bg-sn-black px-8 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-4 sm:w-full sm:max-w-xl sm:p-12 sm:py-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div>
                            <div className="text-center sm:mt-5 space-y-8">
                                <div className="relative grid content-center justify-center text-center h-[150px] w-[150px] md:h-[200px] md:w-[200px] mx-auto">
                                    <div className="absolute inset-0 w-full h-full">
                                        <Image
                                            width={600}
                                            height={600}
                                            className="w-full h-full object-cover rounded-full border-2 border-sn-yellow"
                                            alt={selectedSpeaker?.image?.alt}
                                            src={selectedSpeaker?.image?.src}
                                        />
                                    </div>
                                </div>

                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-100">
                                    {selectedSpeaker.name}
                                </DialogTitle>

                                <p className="text-sm text-gray-400 italic">
                                    {selectedSpeaker.position}
                                </p>

                                <p className="mt-2 text-left text-sm text-gray-400 leading-6">
                                    {selectedSpeaker.description}
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 sm:mt-6">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="inline-flex w-full justify-center rounded-md bg-sn-yellow px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-sn-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sn-yellow"
                            >
                                Close
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
