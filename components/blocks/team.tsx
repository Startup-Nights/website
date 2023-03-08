import Image from "next/image";
import { Template } from "tinacms";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { placeholderBox } from "../items/placeholder";
import { Container } from "../util/container";
import { Section } from "../util/section";

type Member = { name: string, src: string, position: string }
type Division = { description: unknown, members: Member[] }

export const Team = ({ data }) => {
    const diameter = 96;

    return (
        <Section>
            <Container>
                {data.divisions && data.divisions.map((division: Division, i) => (
                    <div key={`division-${i}`} className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3 my-16">
                        <div className="max-w-2xl content-block">
                            <TinaMarkdown content={division.description as TinaMarkdownContent} />
                        </div>

                        <ul role="list" className="grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-12 xl:col-span-2">
                            {division.members && division.members.map((person: Member) => (

                                <li key={person.name}>
                                    <div className="flex items-center gap-x-6">
                                        <Image
                                            src={person.src}
                                            alt={person.name}
                                            className="rounded-full"
                                            width={diameter}
                                            height={diameter}
                                            placeholder={'blur'}
                                            blurDataURL={placeholderBox}
                                        />
                                        <div>
                                            <h3 className="text-base font-semibold leading-7 tracking-tight">{person.name}</h3>
                                            <p className="text-sm font-semibold leading-6 text-slate-400">{person.position}</p>
                                        </div>
                                    </div>
                                </li>

                            ))}
                        </ul>
                    </div>
                ))}
            </Container>
        </Section>
    );
};


export const teamBlockSchema: Template = {
    name: "team",
    label: "Team",
    fields: [
        {
            label: "Divisions",
            name: "divisions",
            type: "object",
            list: true,
            fields: [
                {
                    label: "Description",
                    name: "description",
                    type: "rich-text",
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

