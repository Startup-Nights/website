import { ArrowTopRightOnSquareIcon, FireIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Template } from "tinacms";

const colors = [
    {
        name: "Marketing",
        text: "text-rose-400",
        background: "bg-rose-600",
        background_hover: "hover:bg-rose-400",
    },
    {
        name: "Communication",
        text: "text-green-400",
        background: "bg-green-600",
        background_hover: "hover:bg-green-400",
    },
    {
        name: "General",
        text: "text-violet-400",
        background: "bg-violet-600",
        background_hover: "hover:bg-violet-400",
    },
    {
        name: "Program",
        text: "text-pink-400",
        background: "bg-pink-600",
        background_hover: "hover:bg-pink-400",
    },
    {
        name: "Infrastructure",
        text: "text-cyan-400",
        background: "bg-cyan-600",
        background_hover: "hover:bg-cyan-400",
    },
    {
        name: "Partnerships",
        text: "text-emerald-400",
        background: "bg-emerald-600",
        background_hover: "hover:bg-emerald-400",
    },
    {
        name: "Operations",
        text: "text-amber-400",
        background: "bg-amber-600",
        background_hover: "hover:bg-amber-400",
    },
    {
        name: "Food and Beverage",
        text: "text-teal-400",
        background: "bg-teal-600",
        background_hover: "hover:bg-teal-400",
    },
    {
        name: "Finance",
        text: "text-fuchsia-400",
        background: "bg-fuchsia-600",
        background_hover: "hover:bg-fuchsia-400",
    },
];

export const positionsBlockSchema: Template = {
    name: "positions",
    label: "Positions",
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
            ui: {
                itemProps: (item) => {
                    return { label: item?.title }
                },
            },
            fields: [
                {
                    type: "string",
                    label: "Title",
                    name: "title",
                },
                {
                    type: "string",
                    label: "Note",
                    name: "note"
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
    let color = 'text-sky-400'

    colors.forEach(obj => {
        if (obj.name === department) {
            color = obj.text;
        }
    })

    return color
}

function getDepartmentBackgroundColor(department: string): string {
    let color = 'bg-sky-600'

    colors.forEach(obj => {
        if (obj.name === department) {
            color = obj.background;
        }
    })

    return color + ' text-black'
}

function getDepartmentHoverBackgroundColor(department: string): string {
    let color = 'hover:bg-sky-400';

    colors.forEach(obj => {
        if (obj.name === department) {
            color = obj.background_hover;
        }
    })

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
                                        <ArrowTopRightOnSquareIcon className="w-5 h-5" strokeWidth={2} />
                                    </div>

                                    <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between truncate pt-1">
                                        <div className="grid grid-cols-1 items-baseline ">
                                            <p className="hidden md:block font-normal text-xs text-gray-300">{position.department}</p>
                                            <p className={`font-medium ${getDepartmentTextColor(position.department)}`}>{position.title}</p>
                                        </div>
                                        {position?.note && (
                                            <FireIcon className={`invisible sm:visible h-0 w-0 sm:w-6 sm:h-6 rounded-full ${getDepartmentTextColor(position.department)}`} strokeWidth={2} />
                                        )}
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
