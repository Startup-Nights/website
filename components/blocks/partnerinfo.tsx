import React from 'react'
import { ContentBlock, ContentBlockSchema } from '../items/contentblock';
import { Infopoints, InfopointsBlockSchema } from '../items/infopoints';
import { Template } from 'tinacms';

export const PartnerInfo = ({ data }) => {
    return (
        <div className="bg-sn-black">
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <ContentBlock data={data?.content_block} />
                    <Infopoints data={data.infopoints} />
                </div>
            </div>
        </div>
    );
};

export const partnerinfoBlockSchema: Template = {
    name: "partnerinfo",
    label: "Partnerinfo",
    fields: [
        ContentBlockSchema,
        InfopointsBlockSchema,
        {
            label: "Tabitems",
            name: "tabitems",
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
                    type: "string",
                    label: "Content",
                    name: "content",
                },
                {
                    label: "Call to action",
                    name: "cta",
                    type: "object",
                    fields: [
                        {
                            type: "string",
                            label: "Link",
                            name: "link",
                        },
                        {
                            type: "string",
                            label: "Text",
                            name: "text",
                        }
                    ]
                },

            ],
        }
    ],
};
