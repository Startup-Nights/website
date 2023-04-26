import React from "react";
import type { Template } from "tinacms";
import { ContentBlock, ContentBlockSchema } from "../items/contentblock";
import { RoundImage, RoundImageBlockschema } from "../items/image";

export const Impressions = ({ data }) => {
    return (
        <div className="bg-sn-black">
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="grid grid-cols-1 gap-y-8 gap-x-24 lg:grid-cols-2 items-center">
                    <ContentBlock data={data?.content_block} />
                    <RoundImage data={data?.image} />
                </div>
            </div>
        </div>
    );
};

export const impressionsBlockSchema: Template = {
    name: "impressions",
    label: "Impressions",
    fields: [
        ContentBlockSchema,
        RoundImageBlockschema,
    ],
};
