import Link from "next/link";
import { useEffect, useState } from "react";
import type { Template } from "tinacms";

export const positionsBlockSchema: Template = {
    name: "positions",
    label: "Positions",
    ui: {
        previewSrc: "/blocks/content.png",
        defaultItem: {
            open_positions: [
                {
                    title: "Head of Branding and Design",
                    description: "Dieser Job ist verantwortlich für xxx.",
                    qualifications: ["kann zeichen"],
                    tasks: ["logo entwerfen"],
                    link: "https://startup-nights.ch",
                },
            ],
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
            type: "object",
            label: "Open positions",
            name: "open_positions",
            list: true,
            fields: [
                {
                    type: "string",
                    label: "Title",
                    name: "title",
                },
                {
                    type: "rich-text",
                    label: "Text",
                    name: "text",
                },
                {
                    type: "string",
                    label: "Department",
                    name: "department",
                },
                {
                    type: "string",
                    label: "Link",
                    name: "link",
                },
            ],
        },
    ]
}

function getDepartmentTextColor(department: string): string {
    switch (department) {
        case 'Marketing': {
            return 'text-rose-400'
        }

        case 'General': {
            return 'text-yellow-400'
        }

        case 'Program': {
            return 'text-violet-400'
        }

        case 'Infrastructure': {
            return 'text-cyan-400'
        }

        case 'Partnerships': {
            return 'text-emerald-400'
        }

        case 'Operations': {
            return 'text-amber-400'
        }
    }

    return 'text-sky-400'
}

function getDepartmentBackgroundColor(department: string): string {
    let color = 'bg-sky-600'

    switch (department) {
        case 'Marketing': {
            color = 'bg-rose-600'
            break
        }

        case 'General': {
            color = 'bg-yellow-600'
            break
        }

        case 'Program': {
           color = 'bg-violet-600'
            break
        }

        case 'Infrastructure': {
            color = 'bg-cyan-600'
            break
        }

        case 'Partnerships': {
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

function getDepartmentHoverBackgroundColor(department: string): string {
    let color = 'hover:bg-sky-400';

    switch (department) {
        case 'Marketing': {
            color = 'hover:bg-rose-400'
            break
        }

        case 'General': {
            color = 'hover:bg-yellow-400'
            break
        }

        case 'Program': {
            color = 'hover:bg-violet-400'
            break
        }

        case 'Infrastructure': {
            color = 'hover:bg-cyan-400'
            break
        }

        case 'Partnerships': {
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


export const Positions = ({ data, parentField = "" }) => {
    const positions = data.open_positions;
    const [sortedPositions, setSortedPositions] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('All');
    const departments: string[] = ['All'];

    positions.forEach(position => {
        if (departments.indexOf(position.department) === -1) {
            departments.push(position.department);
        }
    });

    departments.sort((p1: any, p2: any) => {
        if (p1 > p2) {
            return 1
        }
        return -1
    });

    useEffect(() => {
        positions.sort((p1: any, p2: any) => {
            if (p1.department > p2.department) {
                return 1
            }
            return -1
        })

        setSortedPositions(positions);
    });

    return (
        <div className="bg-sn-black">
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
                    {departments.map((department: string, i: number) => (
                        <a
                            onClick={() => setSelectedDepartment(department)}
                            key={`department-${i}`}
                            className={`rounded-full px-3 py-0.5 my-1 text-sm font-semibold transition-all hover:text-black leading-5 ${getDepartmentHoverBackgroundColor(department)} ${selectedDepartment === department ? getDepartmentBackgroundColor(department) : ''}`}>
                            {department}
                        </a>
                    ))}
                </div>

                <div className="overflow-hidden">
                    <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-4">
                        {sortedPositions.filter(position => position.department == selectedDepartment || selectedDepartment == 'All').map((position, i) => (
                            <Link key={`position-${i}`} href={position.link ? position.link : '/'} target="_blank" className="block group">
                                <li key={position.id} className='relative grid grid-cols-1 justify-start items-center bg-sn-black-light rounded-3xl px-8 py-4 border-2 border-transparent hover:border-white'>
                                    <div className="absolute invisible -top-3 -right-3 p-2 bg-white rounded-full text-black group-hover:visible">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </div>

                                    <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between truncate pt-1">
                                        <div className="grid grid-cols-1 items-baseline ">
                                            <p className="hidden md:block font-normal text-xs text-gray-300">{position.department}</p>
                                            <p className={`font-medium ${getDepartmentTextColor(position.department)}`}>{position.title}</p>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}