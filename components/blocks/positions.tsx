import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import type { Template } from "tinacms";
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';
import { Fragment, } from 'react'

import { Container } from "../util/container";
import { Section } from "../util/section";

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
                    type: "string",
                    label: "Description",
                    name: "description",
                },
                {
                    type: "string",
                    label: "Department",
                    name: "department",
                },
                {
                    type: "string",
                    label: "Qualitications",
                    name: "qualifications",
                    list: true,
                },
                {
                    type: "string",
                    label: "Tasks",
                    name: "tasks",
                    list: true,
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
        <Section >
            <Container className={`content-positions`} >
                <Modal isOpen={isOpen} setIsOpen={setIsOpen} position={currentPosition} />

                <h2 className="h3">
                    {data.title}
                </h2>

                <div className='flex flex-wrap space-x-2 mb-4'>
                    {departments.map((department: string, i: number) => (
                        <a
                            onClick={() => setSelectedDepartment(department)}
                            key={`department-${i}`}
                            className={`rounded-full px-3 py-0.5 my-1 text-sm font-semibold leading-5 text-white ${getDepartmentHoverBackgroundColor(department)} ${selectedDepartment == department ? getDepartmentBackgroundColor(department) : ''}`}>
                            {department}
                        </a>
                    ))}
                </div>

                <div className="overflow-hidden">


                    <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {sortedPositions.filter(position => position.department == selectedDepartment || selectedDepartment == 'All').map((position) => (
                            <li key={position.id} className='overflow-hidden bg-slate-800 shadow rounded-md'>
                                <a onClick={() => open(position)} className="block hover:bg-slate-700">
                                    <div className="flex items-center px-4 py-4 sm:px-6">
                                        <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                                            <div className="truncate">
                                                <div className="grid grid-cols-1 text-sm items-baseline ">
                                                    <p className="hidden md:block font-normal text-xs text-gray-400">{position.department}</p>
                                                    <p className={`font-medium ${getDepartmentTextColor(position.department)}`}>{position.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ml-5 flex-shrink-0">
                                            <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </Container>
        </Section >
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
                                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-gray-100 p-6 md:p-12 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="h3 text-gray-900">
                                        {position.title}
                                    </Dialog.Title>
                                    <div className="mt-6">
                                        {position.description ? (
                                            <p className="p">
                                                {position.description}
                                            </p>
                                        ) : (<span></span>)}

                                        <div className='py-6'>
                                            <h3 className='mb-4 text-2xl'>Deine Aufgaben:</h3>
                                            <ul role="list" className="ml-5 list-disc">
                                                {position.tasks && position.tasks.map((task: string, i: number) => (
                                                    <li key={i} className="">
                                                        <p className="text-sm font-normal text-gray-800">
                                                            {task}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className='py-6'>
                                            <h3 className='mb-4 text-2xl'>Deine Qualifikation:</h3>
                                            <ul role="list" className="ml-5 list-disc">
                                                {position.qualifications && position.qualifications.map((task: string, i: number) => (
                                                    <li key={i} className="">
                                                        <p className="text-sm font-normal text-gray-800">
                                                            {task}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-4 space-x-2">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300"
                                            onClick={closeModal}
                                        >
                                            Schliessen
                                        </button>
                                        <a
                                            href={position.link}
                                            target='blank'
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300"
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
