import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import type { Template } from "tinacms";
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';
import { Fragment, } from 'react'
import { TinaMarkdown } from "tinacms/dist/rich-text";

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
    switch (department) {
        case 'Marketing': {
            return 'bg-rose-600'
        }

        case 'Program': {
            return 'bg-violet-600'
        }

        case 'Infrastructure': {
            return 'bg-cyan-600'
        }

        case 'Partnerships': {
            return 'bg-emerald-600'
        }

        case 'Operations': {
            return 'bg-amber-600'
        }
    }

    return 'bg-sky-600'
}

function getDepartmentHoverBackgroundColor(department: string): string {
    switch (department) {
        case 'Marketing': {
            return 'hover:bg-rose-400'
        }

        case 'Program': {
            return 'hover:bg-violet-400'
        }

        case 'Infrastructure': {
            return 'hover:bg-cyan-400'
        }

        case 'Partnerships': {
            return 'hover:bg-emerald-400'
        }

        case 'Operations': {
            return 'hover:bg-amber-400'
        }
    }

    return 'hover:bg-sky-400'
}


export const Positions = ({ data, parentField = "" }) => {
    const positions = data.open_positions;

    const [isOpen, setIsOpen] = useState(false);
    const [currentPosition, setCurrentPosition] = useState(positions[0]);
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

    function open(position: any) {
        setCurrentPosition(position);
        setIsOpen(true);
    }

    return (
        <div className="bg-sn-black">
            <div className="max-w-7xl mx-auto p-24">
                <Modal isOpen={isOpen} setIsOpen={setIsOpen} position={currentPosition} />

                <div className="text-center mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase">
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
                            className={`rounded-full px-3 py-0.5 my-1 text-sm font-semibold leading-5 text-gray-200 ${getDepartmentHoverBackgroundColor(department)} ${selectedDepartment == department ? getDepartmentBackgroundColor(department) : ''}`}>
                            {department}
                        </a>
                    ))}
                </div>

                <div className="overflow-hidden">


                    <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {sortedPositions.filter(position => position.department == selectedDepartment || selectedDepartment == 'All').map((position) => (
                            <li key={position.id} className='overflow-hidden bg-sn-black-light shadow rounded-md'>
                                <a onClick={() => open(position)} className="block hover:bg-sn-black-lightest">
                                    <div className="flex items-center px-4 py-4 sm:px-6">
                                        <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                                            <div className="truncate">
                                                <div className="grid grid-cols-1 text-sm items-baseline ">
                                                    <p className="hidden md:block font-normal text-xs text-gray-300">{position.department}</p>
                                                    <p className={`font-medium ${getDepartmentTextColor(position.department)}`}>{position.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ml-5 flex-shrink-0">
                                            <ChevronRightIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function Modal({ isOpen, setIsOpen, position }: any) {
    const router = useRouter()

    function closeModal() {
        setIsOpen(false);
    }

    function party() {
        router.push('/party')
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                        <div className="flex min-h-full w-full mx-auto items-center justify-center text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-3xl transform rounded-2xl bg-sn-black-lightest px-6 pt-6 pb-4 m-4 md:px-12 md:pt-12 md:pb-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="h3 text-gray-200 mt-0">
                                        {position.title}
                                    </Dialog.Title>

                                    <div className="content-block text-gray-200">
                                        <TinaMarkdown content={position?.text} />
                                    </div>

                                    <div className="flex mt-4 gap-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center items-center transition-all text-base font-semibold leading-7 sm:text-sm sm:leading-6 tracking-wide rounded-xl bg-sn-black-lightest px-4 py-2  text-sn-yellow border-2 border-sn-yellow hover:bg-sn-yellow-dark hover:border-sn-yellow-dark, hover:text-black"
                                            onClick={closeModal}
                                        >
                                            Schliessen
                                        </button>
                                        <a
                                            href={position.link}
                                            target='blank'
                                            type="button"
                                            className="inline-flex justify-center items-center transition-all text-base font-semibold leading-7 sm:text-sm sm:leading-6 tracking-wide rounded-xl border border-transparent bg-sn-yellow px-4 py-2 text-black hover:bg-sn-yellow-dark"
                                            onClick={party}
                                        >
                                            Count me in 🥳
                                        </a>
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
