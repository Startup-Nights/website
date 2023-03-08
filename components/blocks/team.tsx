import Image from "next/image";
import { Template } from "tinacms";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { Container } from "../util/container";
import { Section } from "../util/section";

type Member = { name: string, src: string, position: string }
type Division = { description: unknown, members: Member[] }

export const Team = ({ data }) => {
    const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' className='relative left-%5Bcalc(50%25-11rem)%5D -z-10 h-%5B21.1875rem%5D max-w-none -translate-x-1/2 rotate-%5B30deg%5D sm:left-%5Bcalc(50%25-30rem)%5D sm:h-%5B42.375rem%5D' viewBox='0 0 1155 678' %3E%3Cpath fill='url(%2345de2b6b-92d5-4d68-a6a0-9b9b2abad533)' fillOpacity='.3' d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z' /%3E%3Cdefs%3E%3ClinearGradient id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533' x1='1155.49' x2='-78.208' y1='.177' y2='474.645' gradientUnits='userSpaceOnUse' %3E%3Cstop stopColor='%239089FC' /%3E%3Cstop offset=%7B1%7D stopColor='%23FF80B5' /%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"

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
                                            blurDataURL={placeholder}
                                            placeholder="blur"
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
