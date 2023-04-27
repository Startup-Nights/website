import Image from "next/image";
import { Template } from "tinacms";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { placeholderBox } from "../items/placeholder";

type Member = { name: string, src: string, position: string }
type Division = { title: string, subtitle: string, members: Member[] }

export const Team = ({ data }) => {
    const diameter = 96;

    return (
        <div className="bg-sn-black-light">
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-24">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase">
                        {data.subtitle}
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data.title}
                    </h1>
                </div>

                <div className="space-y-20">
                    {data.divisions && data.divisions.map((division: Division, i) => (
                        <div key={`division-${i}`} className="mx-auto grid gap-y-20 items-start gap-x-16 xl:grid-cols-3">
                            <div className="max-w-2xl">
                                <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase">
                                    {division.subtitle}
                                </h2>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                                    {division.title}
                                </h1>
                            </div>

                            <ul role="list" className="grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-12 xl:col-span-2">
                                {division.members && division.members.map((person: Member) => (
                                    <li key={person?.name}>
                                        <div className="flex items-center gap-x-6">
                                            <Image
                                                src={person.src ? person.src : '/user.svg'}
                                                alt={person?.name}
                                                className="rounded-full"
                                                width={diameter}
                                                height={diameter}
                                            />
                                            <div>
                                                <h3 className="text-base font-semibold leading-7 tracking-tight">{person?.name}</h3>
                                                <p className="text-sm font-semibold leading-6 text-slate-400">{person?.position}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


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
                    label: "Members",
                    name: "members",
                    type: "object",
                    list: true,
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
            ]
        },
    ],
}

