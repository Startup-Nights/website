import * as React from "react";
import type { Template } from "tinacms";

export const Webinar = ({ data }) => {
    return (
        <>
            <p>hello from webinar</p>
        </>
    );
};

export const webinarBlockSchema: Template = {
    name: "webinar",
    label: "Webinar Signup",
    fields: [
        {
            type: "string",
            label: "ID",
            name: "id",
        },
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
            label: "Text",
            name: "paragraph",
        },
    ],
};
