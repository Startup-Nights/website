import * as React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { Template } from "tinacms";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, } from 'react'
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { ArrowLongRightIcon, ArrowLongLeftIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { SocialIcon } from "../items/social";
import CTA from "./cta";
import Image from "next/image";
import { placeholderBox } from "../items/placeholder";

export const Speakers = ({ data }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [currentSpeaker, setCurrentSpeaker] = React.useState({})

    function update(speaker) {
        setCurrentSpeaker(speaker);
        setIsOpen(true);
    }

    return (
        <Section>
            <Container width="full" className="relative">
                <SpeakerModal isOpen={isOpen} setIsOpen={setIsOpen} speaker={currentSpeaker} />

                <Container paddx="none" paddy="" className="content-block text-center mb-16 sm:mb-24">
                    <TinaMarkdown content={data.text} />

                    {data.cta && data.cta.text !== '' && (
                        <CTA data={data} />
                    )}
                </Container>

                <div className="relative">
                    <div
                        id={'speakers'}
                        className="relative w-full flex gap-12 md:gap-16 snap-x overflow-auto scrollbar-hide snap-mandatory mb-8 md:mb-12 md:px-12"
                    >
                        {data.speakers && data.speakers.map((speaker, i: number) => (
                            <div
                                key={`speaker-${i}`} id={`speaker-${i}`}
                                className='relative grid content-start'
                            >
                                <div
                                    className={'snap-always snap-center shrink-0 relative h-[200px] md:h-[350px] w-[200px] md:w-[350px]' +
                                        ' group transition-all grid grid-cols-1 md:grid-cols-2'}
                                    onClick={() => update(speaker)}
                                >
                                    <div className='absolute inset-0 w-full transition-all group-hover:scale-95'>
                                        <Image
                                            width={350}
                                            height={450}
                                            className="w-full h-full object-cover rounded-full"
                                            alt={speaker?.image?.alt}
                                            src={speaker?.image?.src}
                                            placeholder="blur"
                                            blurDataURL={placeholderBox}
                                        />
                                    </div>
                                    <div>
                                        <svg 
                                        className="h-[200px] md:h-[350px] w-[200px] md:w-[350px] transition-all invisible group-hover:visible" 
                                        stroke="#fdc900" strokeWidth={4} fill="#121212" strokeMiterlimit={10} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 429.93 429.93">
                                            <polyline className="st0" points="54,3.5 3.5,3.5 3.5,54 " />
                                            <polyline className="st0" points="380,426.4 426.4,426.4 426.4,380 " />
                                            <polyline className="st0" points="426.4,54 426.4,3.5 375.9,3.5 " />
                                            <polyline className="st0" points="3.5,384.9 3.5,426.4 45,426.4 " />
                                        </svg>
                                    </div>
                                </div>
                                <div className='relative grid content-center justify-center text-center -mt-2 md:-mt-8'>
                                    <span className='bg-sn-yellow -skew-x-6'>
                                        <p className="h5 m-0 px-2 py-1 md:px-4 md:py-3 text-white">{speaker?.name}</p>
                                    </span>
                                </div>
                                <div className='relative grid content-center justify-end text-center -mt-2'>
                                    <span className='bg-white -skew-x-6'>
                                        <p className="h6 m-0 px-2 py-1 md:px-4 md:py-2 text-black">{speaker?.position}</p>
                                    </span>
                                </div>
                            </div>
                        ))}
                        <div className="snap-center shrink-0">
                            <div className="shrink-0 w-4 sm:w-48"></div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-x-4">
                    <button
                        onClick={() => document.querySelector('#speakers').scrollBy({ top: 0, left: -100, behavior: 'smooth' })}
                    >
                        <ArrowLongLeftIcon className="h-6 w-6" />
                    </button>
                    <button
                        onClick={() => document.querySelector('#speakers').scrollBy({ top: 0, left: 100, behavior: 'smooth' })}
                    >
                        <ArrowLongRightIcon className="h-6 w-6" />
                    </button>
                </div>

            </Container >
        </Section >
    );
};

function SpeakerModal({ isOpen, setIsOpen, speaker }: any) {
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-30" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex h-full w-full mx-auto items-center justify-center text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full h-full transform bg-sn-black p-6 text-left transition-all text-slate-100 overflow-auto">

                                    <div className="absolute top-3 right-3 md:top-5 md:right-5 z-30">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center text-sm font-medium text-slate-100"
                                            onClick={closeModal}
                                        >
                                            <XCircleIcon className="h-7 w-7 md:h-10 md:w-10" />
                                        </button>
                                    </div>

                                    <div className='z-30 grid grid-cols-1 md:grid-cols-2 h-full'>
                                        <div className="relative min-h-[200px] sm:min-h-[400px] md:h-full">
                                            <div className='absolute inset-0 w-full min-h-[200px] sm:min-h-[400px]'>
                                                <Image
                                                    width={700}
                                                    height={900}
                                                    className="w-full h-full object-cover"
                                                    alt={speaker?.image?.alt}
                                                    src={speaker?.image?.src}
                                                    placeholder="blur"
                                                    blurDataURL={placeholderBox}
                                                />
                                            </div>
                                        </div>
                                        <div className='py-4 md:p-16'>
                                            <h2 className='h1'>
                                                {speaker?.name}
                                            </h2>
                                            <h3 className='h5'>
                                                {speaker?.position}
                                            </h3>

                                            <div className="content-block">
                                                <TinaMarkdown content={speaker?.description} />
                                            </div>

                                            <div className="flex mt-8 justify-start gap-4">
                                                {speaker.social_links && speaker.social_links.linkedin && (
                                                    <a href={speaker.social_links.linkedin} target='_blank' className="text-gray-500 hover:text-gray-400">
                                                        <span className="sr-only">LinkedIn</span>
                                                        <SocialIcon name={'linkedin'} className="h-8 w-8" aria-hidden="true" />
                                                    </a>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export const speakersBlockSchema: Template = {
    name: "speakers",
    label: "Speakers",
    ui: {
        defaultItem: {
            speakers_title: "Speakers at Startup Nights",
            speakers: [
                {
                    name: "some random dude",
                    position: "some position",
                    social_links: {
                        linkdin: "",
                    },
                    image: {
                        src: "/media/ambient.jpg",
                        alt: "some alt text"
                    }
                }
            ]
        },
    },
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
            label: "Speakers",
            name: "speakers",
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
                    type: "rich-text",
                    label: "Description",
                    name: "description",
                },
                {
                    type: "object",
                    label: "Social links",
                    name: "social_links",
                    fields: [
                        {
                            type: "string",
                            label: "LinkedIn",
                            name: "linkedin",
                        },
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
            ],
        },
    ],
};


