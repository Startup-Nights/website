import type { Template } from "tinacms";
import Image from "next/image";
import { placeholderBox } from "../items/placeholder";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid";

export const Speakers = ({ data }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="max-w-8xl mx-auto pt-24 pb-16 bg-sn-black">
            {/* <SpeakerModal isOpen={isOpen} setIsOpen={setIsOpen} speaker={currentSpeaker} /> */}

            <div className="text-center mb-20">
                <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase">
                    {data.subtitle}
                </h2>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                    {data.title}
                </h1>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {data.speakers && data.speakers.map((speaker, i: number) => (
                        <div
                            key={`speaker-${i}`} id={`speaker-${i}`}
                            className='relative grid content-start mx-12'
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
                                        alt={speaker?.image?.alt}
                                        src={speaker?.image?.src}
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
                                    <p className="h5 m-0 px-2 py-1 skew-x-6 md:px-4 md:py-3 text-black">{speaker?.name}</p>
                                </span>
                            </div>
                            <div className='relative grid content-center justify-end text-center -mt-2'>
                                <span className='bg-white -skew-x-6 rounded-sm'>
                                    <p className="h6 m-0 px-2 skew-x-6 py-1 md:px-4 md:py-2 text-black">{speaker?.position}</p>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-x-4 mt-12">
                <button onClick={scrollPrev} >
                    <ArrowLongLeftIcon className="h-6 w-6" />
                </button>
                <button onClick={scrollNext} >
                    <ArrowLongRightIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
};

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


