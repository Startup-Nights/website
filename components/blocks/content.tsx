import React from "react";
import type { Template } from "tinacms";
import { ContentBlock, ContentBlockSchema } from "../items/contentblock";
import { Infopoints, InfopointsBlockSchema } from "../items/infopoints";
import { RoundImage, RoundImageBlockschema } from "../items/image";
import { Testimonial, TestimonialBlockSchema } from "../items/testimonial";
import { ColorPickerInput } from "../fields/color";
import { Facts, FactsBlockSchema } from "../items/facts";
import { Features, FeaturesBlockSchema } from "../items/features";
import { Members, MembersBlockSchema } from "../items/members";

export const Content = ({ data }) => {
  return (
    <div className={data.background_color ? data.background_color : 'bg-sn-black'}>
      {data.id && (
        <div id={data.id}></div>
      )}
      <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-24 items-center">

          {data.contentblock_left && (
            <ContentBlock data={data?.content_block} />
          )}

          {data?.infopoints && (
            <Infopoints data={data?.infopoints} />
          )}

          {data?.image && (
            <RoundImage data={data?.image} />
          )}

          {data?.testimonial && (
            <Testimonial data={data?.testimonial} />
          )}

          {data?.figures && (
            <Facts data={data.figures} />
          )}

          {data?.features && (
            <Features data={data.features} />
          )}

          {data?.members && (
            <Members data={data.members} />
          )}

          {!data.contentblock_left && (
            <ContentBlock data={data?.content_block} />
          )}
        </div>
      </div>
    </div>
  );
};

export const contentBlockSchema: Template = {
  name: "content",
  label: "Content",
  fields: [
    ContentBlockSchema,
    RoundImageBlockschema,
    InfopointsBlockSchema,
    TestimonialBlockSchema,
    FactsBlockSchema,
    MembersBlockSchema,
    FeaturesBlockSchema,
    {
      type: "boolean",
      name: "contentblock_left",
      label: "Contentblock on left side"
    },
    {
      type: "string",
      name: "id",
      label: "HTML id"
    },
    {
      type: "string",
      name: "background_color",
      label: "Background color",
      ui: {
        component: ColorPickerInput as any
      }
    },
  ],
};
