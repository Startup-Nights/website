import type { Template } from "tinacms";
import { Container } from "../util/container";
import { Section } from "../util/section";

export const Positions = ({ data, parentField = "" }) => {
    return (
        <Section>
            <Container
                className={`prose prose-lg text-slate-300`}
                data-tinafield={`${parentField}.body`}
                size="large"
                width="medium"
            >

                {data.open_positions && data.open_positions.map((position, i) => (

                    <div key={`position-${i}`}>
                        <div>{position.title}</div>
                        <ul>
                            {position.qualifications && position.qualifications.map((quali: string, i: number) => (
                                <li key={`qualification-${i}`}>{quali}</li>
                            ))}
                        </ul>
                    </div>
                ))}

            </Container>
        </Section>
    );

}

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
