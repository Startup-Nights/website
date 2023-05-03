import type { Template } from "tinacms";
import CTA from "./cta";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Preregister from "./preregister";

export const Hero = ({ data }) => {
    // modal for the preregistration until we have tito ready
    const [open, setOpen] = useState(false)

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
                    <div className="absolute inset-0 mix-blend-multiply bg-slate-500" />
                </div>
            )}

            <div className="relative max-w-7xl mx-auto pb-12 pt-36 px-8 lg:pb-24 lg:pt-48 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-sm font-medium leading-7 text-gray-200 lg:text-2xl">
                        {data?.subtitle}
                    </h2>
                    <h1 className="mt-2 text-6xl font-bold tracking-tight text-gray-200 lg:text-8xl">
                        {data?.title}
                    </h1>
                </div>

                {data.cta && data.cta.text !== '' && (
                    <div className="mt-12">
                        <CTA data={data} />
                    </div>
                )}

                {/* special modal until ticketing is ready */}
                {data.ticket_cta && data.ticket_cta.text !== '' && (
                    <div className="mt-12">
                        <Modal open={open} setOpen={setOpen} />
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="rounded-full transition-all bg-sn-yellow px-6 py-3 text-black hover:bg-sn-yellow-dark text-base font-semibold leading-7 sm:text-sm sm:leading-6 tracking-wide"
                        >
                            {data.ticket_cta.text}
                        </button>
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
            label: "Ticket CTA",
            name: "ticket_cta",
            type: "object",
            fields: [
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


const Modal = ({ open, setOpen }) => {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-sn-black bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-sn-black-lightest p-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                <div>
                                    <div className="text-center">
                                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-200">
                                            Preregister for the Startup Nights 2023 and subscribe our newsletter
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <Preregister data={{}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-xl bg-sn-yellow px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-sn-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sn-yellow-dark"
                                        onClick={() => setOpen(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
