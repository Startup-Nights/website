import Image from "next/image";
import { Template } from "tinacms";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

type TeamMember = {
    name: string,
    src: string,
    position: string,
    linkedin?: string
}
type Division = {
    title: string,
    subtitle: string,
    members: TeamMember[]
}

export const Team = ({ data }) => {
    return (
        <div className="bg-sn-black-light">
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-24">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                        {data.subtitle}
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data.title}
                    </h1>
                </div>

                <div className="space-y-20">
                    {data.divisions && data.divisions.map((division: Division, i: number) => (
                        <div key={`division-${i}`} className="mx-auto grid gap-y-20 items-start gap-x-16 xl:grid-cols-3">
                            <div className="max-w-2xl">
                                <h3 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                                    {division.subtitle}
                                </h3>
                                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                                    {division.title}
                                </h2>
                            </div>

                            <ul className="grid gap-4 sm:grid-cols-2 sm:gap-4 xl:col-span-2">
                                {division.members && division.members.map((person: TeamMember) => (
                                    render_member(person)
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

function render_member(person: TeamMember) {
    if (person?.linkedin !== '') {
        return (
            <li key={person?.name} className="block group">
                <Link href={person.linkedin ? person.linkedin : '/'} target="_blank" className="block group relative transition-all">
                    <div className="absolute invisible -top-3 -right-3 p-2 bg-white rounded-full text-black group-hover:visible">
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" strokeWidth={2} />
                    </div>

                    <div className="flex items-center gap-x-6 border-2 border-transparent rounded-3xl p-4 bg-sn-black-lightest group-hover:border-gray-200">
                        {(render_image(person))}
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight">{person?.name}</h3>
                            <p className="text-sm font-semibold leading-6 text-gray-400">{person?.position}</p>
                        </div>
                    </div>
                </Link>
            </li>
        )
    }

    return (
        <li key={person?.name} className="relative transition-all">
            <div className="flex items-center gap-x-6 border-2 border-transparent rounded-3xl p-4 bg-sn-black-lightest">
                {(render_image(person))}
                <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight">{person?.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-gray-400">{person?.position}</p>
                </div>
            </div>
        </li>
    )
}

function render_image(person: TeamMember) {
    const diameter = 96;

    return (
        <Image
            src={person.src ? person.src : '/user.svg'}
            alt={person?.name ? person.name : 'unknown'}
            className="rounded-full"
            width={diameter}
            height={diameter}
        />
    )
}

export const teamBlockSchema: Template = {
    name: "team",
    label: "Team",
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
            label: "Divisions",
            name: "divisions",
            type: "object",
            list: true,
            ui: {
                itemProps: (item) => {
                    return { label: item?.subtitle }
                },
            },
            fields: [
                {
                    type: "string",
                    label: "Subtitle",
                    required: true,
                    name: "subtitle",
                },
                {
                    type: "string",
                    label: "Title",
                    required: true,
                    name: "title",
                },
                {
                    label: "Members",
                    name: "members",
                    type: "object",
                    list: true,
                    ui: {
                        itemProps: (item) => {
                            return { label: item?.name }
                        },
                    },
                    fields: [
                        {
                            label: "Name",
                            name: "name",
                            type: "string",
                        },
                        {
                            label: "Position",
                            name: "position",
                            type: "string",
                        },
                        {
                            label: "LinkedIn",
                            name: "linkedin",
                            type: "string"
                        },
                        {
                            name: "src",
                            label: "Image Source",
                            type: "image",
                        },
                    ],
                },
            ]
        },
    ],
}

