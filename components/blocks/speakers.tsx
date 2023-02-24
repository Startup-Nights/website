import * as React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { Template } from "tinacms";
import SpeakerModal from "./speakermodal";

export const Speakers = ({ data }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [currentSpeaker, setCurrentSpeaker] = React.useState({})

    function update(speaker) {
        setCurrentSpeaker(speaker);
        setIsOpen(true);
    }

    return (
        <Section>
            <Container className="relative py-12 sm:py-24">

                <SpeakerModal isOpen={isOpen} setIsOpen={setIsOpen} speaker={currentSpeaker} />

                <h2 className="h2 text-center mb-16">{data?.speakers_title}</h2>

                <div className="grid grid-cols-4 gap-2">
                    {data.speakers && data.speakers.map((speaker, i: number) => (
                        <div key={`speaker-${i}`} className='relative h-[400px] group transition-all hover:scale-95' onClick={() => update(speaker)}>
                            <div className='absolute inset-0 w-full'>
                                <img className="w-full h-full object-cover" src={speaker?.image?.src} />
                                <div className="absolute inset-0 mix-blend-multiply bg-slate-400 group-hover:bg-slate-500" />
                            </div>
                            <div className='relative grid content-end p-4 h-full'>
                                <p className="font-extrabold uppercase">{speaker?.name}</p>
                                <p className="text-sm font-light uppercase">{speaker?.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section >
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
            label: "Speakers title",
            name: "speakers_title",
            type: "string",
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



