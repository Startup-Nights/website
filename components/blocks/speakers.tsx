import type { Template } from "tinacms";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { ButtonSecondary } from "../items/button";
import { ColorPickerInput } from "../fields/color";

export const Speakers = ({ data }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const [selected, setSelected] = useState(0)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on('scroll', () => {
                setSelected(emblaApi.selectedScrollSnap)
            })
        }
    })

    return (
        <div className={`max-w-8xl mx-auto pt-12 lg:pt-24 pb-16 ${data.background_color ? data.background_color : 'bg-sn-black'}`}>
            <div className="text-center mb-20 px-8">
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

            <div className="overflow-hidden py-4" ref={emblaRef}>
                <div className="flex">
                    {data.speakers && data.speakers.map((speaker, i: number) => (
                        <div
                            key={`speaker-${i}`} id={`speaker-${i}`}
                            className='relative grid content-start mx-12'
                        >
                            <div
                                className={'snap-always snap-center shrink-0 relative h-[200px] md:h-[250px] w-[200px] md:w-[250px]' +
                                    ' group transition-all grid grid-cols-1 md:grid-cols-2 py-6'}
                            >
                                <div className={`absolute inset-0 w-full transition-all ${selected === i ? 'scale-100' : 'scale-75'}`}>
                                    <Image
                                        width={350}
                                        height={350}
                                        className="w-full h-full object-cover rounded-full"
                                        alt={speaker?.image?.alt ? speaker?.image?.alt : 'unknown'}
                                        src={speaker?.image?.src ? speaker?.image?.src : '/user.svg'}
                                    />
                                </div>
                            </div>
                            <div className={`relative grid content-center justify-center text-center -mt-2 md:-mt-8`}>
                                <span className='bg-sn-yellow -skew-x-6 rounded-sm'>
                                    <p className="h5 m-0 px-2 py-1 skew-x-6 md:px-4 md:py-3 text-black">{speaker?.name}</p>
                                </span>
                            </div>
                            {speaker?.position && (
                                <div className='relative grid content-center justify-end text-center -mt-2'>
                                    <span className='bg-white -skew-x-6 rounded-sm'>
                                        <p className="h6 m-0 px-2 skew-x-6 py-1 md:px-4 md:py-2 text-black">{speaker?.position}</p>
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center gap-x-8 mt-8 sm:mt-12">
                <button onClick={scrollPrev} className="rounded-full p-3 hover:bg-sn-black-lightest">
                    <ArrowLongLeftIcon className="h-6 w-6" />
                </button>


                {data?.cta && (
                    <div className="h-auto">
                        <ButtonSecondary link={data?.cta?.link} text={data?.cta?.text}>
                        </ButtonSecondary>
                    </div>
                )}

                <button onClick={scrollNext} className="rounded-full p-3 hover:bg-sn-black-lightest">
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
            type: "string",
            label: "Text",
            name: "paragraph",
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


