import { useEffect, useState } from "react";
import type { Template } from "tinacms";
import { ColorPickerInput } from "../fields/color";
import pako from 'pako';
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

type Event = {
    time: string
    location: string
    name: string
    speakers: string[]
    format: string
    link: string
}

const decode = (str: string): string => Buffer.from(str, 'base64').toString('binary');

export const Program = ({ data }) => {
    const [events, setEvents] = useState([])
    const [formats, setFormats] = useState([])

    const getEvents = async () => {
        const res = await fetch('https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-70cb3437-eee1-474d-8ad6-387035b15671/website/program', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url: 'https://portal.startup-nights.ch/components/28350',
            }),
        })
        const data = await res.json();
        try {
            const decoded = Uint8Array.from(Array.from(decode(data.data)).map(letter => letter.charCodeAt(0)))
            const programEvents = JSON.parse(pako.inflate(decoded, { to: 'string' }))
            setEvents(programEvents)

            const tmp: string[] = ['All']
            programEvents.forEach(event => {
                if (tmp.indexOf(event.format) === -1) {
                    tmp.push(event.format)
                }
            })
            setFormats(tmp)
        } catch (err) {
            console.log(err)
        }
    }

    const [selectedFormat, setSelectedFormat] = useState('All');

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <div className={data.background_color ? data.background_color : 'bg-sn-black'}>
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                        {data.subtitle}
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data.title}
                    </h1>
                </div>

                <div className='flex flex-wrap justify-center space-x-2 mb-4'>
                    {formats.map((department: string, i: number) => (
                        <a
                            onClick={() => setSelectedFormat(department)}
                            key={`department-${i}`}
                            className={`rounded-full px-3 py-0.5 my-1 text-sm font-semibold transition-all hover:text-black leading-5 ${formatBgHoverColor(department)} ${selectedFormat === department ? formatBgColor(department) : ''}`}>
                            {department}
                        </a>
                    ))}
                </div>

                <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-4">
                    {events.length > 0 && events.filter(event => selectedFormat === 'All' || selectedFormat == event.format).map((event: Event, i: number) => (
                        <Link key={`position-${i}`} href={event.link} target="_blank" className="block group">
                            <li key={i} className='relative grid grid-cols-1 justify-start items-center bg-sn-black-light rounded-3xl px-8 py-4 border-2 border-transparent hover:border-white'>
                                <div className="absolute invisible -top-3 -right-3 p-2 bg-white rounded-full text-black group-hover:visible">
                                    <ArrowTopRightOnSquareIcon className="w-5 h-5" strokeWidth={2} />
                                </div>

                                <div className="flex justify-between justify-items-center items-center">
                                    <div>
                                        <div className="hidden md:block mb-2">
                                            {event.format !== "" && (<span className={`inline-flex flex-shrink-0 items-center rounded-full px-1.5 py-0.5 font-normal text-xs ${statuses[event.format]}`}>{event.format}</span>)}
                                            <span className={`inline-flex flex-shrink-0 items-center rounded-full px-1.5 py-0.5 font-normal text-xs`}>{event.location}</span>
                                        </div>
                                        <p className={`font-medium text-gray-300`}><span className="font-bold">{event.time}</span> - {event.name}</p>
                                        {event.speakers.length > 0 && (
                                            <p className={`mt-2 font-regular italic text-gray-300`}>With {event.speakers.join(', ')}</p>
                                        )}
                                    </div>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export const programBlockSchema: Template = {
    name: "program",
    label: "Program",
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
            name: "background_color",
            label: "Background color",
            ui: {
                component: ColorPickerInput as any
            }
        },
    ],
};

const statuses = {
    'Keynote': 'text-green-200 bg-green-800 ring-green-600/20',
    'Panel Discussion': 'text-gray-200 bg-gray-800 ring-gray-500/10',
    'Workshop': 'text-yellow-200 bg-yellow-800 ring-yellow-600/20',
    'Pitching Session': 'text-emerald-200 bg-emerald-800 ring-emerald-600/20',
    'Fireside Chat': 'text-pink-200 bg-pink-800 ring-pink-600/20',
}

function formatTextColor(department: string): string {
    switch (department) {
        case 'Keynote': {
            return 'text-rose-400'
        }

        case 'Panel Discussion': {
            return 'text-violet-400'
        }

        case 'Workshop': {
            return 'text-violet-400'
        }

        case 'Pitching Session': {
            return 'text-cyan-400'
        }

        case 'Fireside Chat': {
            return 'text-emerald-400'
        }

        case 'Operations': {
            return 'text-amber-400'
        }
    }

    return 'text-sky-400'
}

function formatBgColor(department: string): string {
    let color = 'bg-sky-600'

    switch (department) {
        case 'Keynote': {
            color = 'bg-rose-600'
            break
        }

        case 'Panel Discussion': {
            color = 'bg-violet-600'
            break
        }

        case 'Workshop': {
            color = 'bg-violet-600'
            break
        }

        case 'Pitching Session': {
            color = 'bg-cyan-600'
            break
        }

        case 'Fireside Chat': {
            color = 'bg-emerald-600'
            break
        }

        case 'Operations': {
            color = 'bg-amber-600'
            break
        }
    }

    return color + ' text-black'
}

function formatBgHoverColor(department: string): string {
    let color = 'hover:bg-sky-400';

    switch (department) {
        case 'Keynote': {
            color = 'hover:bg-rose-400'
            break
        }

        case 'Panel Discussion': {
            color = 'hover:bg-violet-400'
            break
        }

        case 'Workshop': {
            color = 'hover:bg-violet-400'
            break
        }

        case 'Pitching Session': {
            color = 'hover:bg-cyan-400'
            break
        }

        case 'Fireside Chat': {
            color = 'hover:bg-emerald-400'
            break
        }

        case 'Operations': {
            color = 'hover:bg-amber-400'
            break
        }
    }

    return color + ' text-gray hover:text-black'
}

