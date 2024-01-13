import { Template } from "tinacms"

export const CookieTable = ({ data }) => {
    return (
        <div className="bg-sn-black-lightest">
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="ccm-cookie-declaration">Please activate Javascript to see the list of (activated) cookies.</div>
            </div>
        </div>
    )
}

export const cookieTableBlockSchema: Template = {
    name: "cookieTable",
    label: "CookieTable",
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
    ],
}
