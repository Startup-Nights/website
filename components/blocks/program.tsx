import { useEffect, useState } from "react";
import useSWR from 'swr';
import type { Template } from "tinacms";
import { ColorPickerInput } from "../fields/color";
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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Program = ({ data }) => {
    const [formats, setFormats] = useState([])
    const [selectedFormat, setSelectedFormat] = useState('All');

    const eventData = useSWR('/program_data.json', fetcher)

    const events = eventData.data || []

    useEffect(() => {
        const tmp: string[] = ['All']
        events.forEach((event: any) => {
            if (tmp.indexOf(event.format) === -1) {
                tmp.push(event.format)
            }
        })

        setFormats(tmp)
    }, [eventData.isLoading])

    if (eventData.error) return <div>failed to load</div>
    if (eventData.isLoading) return <div>loading...</div>

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

                <iframe className="w-full h-[1000px]" src="https://portal.startup-nights.ch/components/28350" />

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
            return 'text-amber-400'
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
            color = 'bg-amber-600'
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
            color = 'hover:bg-amber-400'
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

