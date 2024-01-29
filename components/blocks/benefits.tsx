import { Cog6ToothIcon, ChatBubbleLeftRightIcon, CheckBadgeIcon, HeartIcon, LightBulbIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Button } from "../items/button";
import type { Template } from "tinacms";

export const Benefits = ({ data }) => {
    return (
        <div className="bg-sn-black-light">
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                        {data.subtitle}
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data.title}
                    </h1>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {data?.benefit_items && data.benefit_items.map((benefit: any, i: number) => (
                        <li key={i} className="col-span-1 text-center flex space-y-4 flex-wrap justify-center items-center bg-gradient-to-tr from-sn-black-lightest to-gray-900 rounded-3xl p-6 md:p-8">
                            <div className="">{getIcon(benefit.icon)}</div>
                            <h4 className="w-full text-center text-sm md:text-1xl">{benefit.title}</h4>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const getIcon = (icon: string) => {
    switch (icon) {
        case 'chatbubble': return <ChatBubbleLeftRightIcon className="mr-1.5 h-6 w-6 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'lightbulb': return <LightBulbIcon className="mr-1.5 h-6 w-6 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'heart': return <HeartIcon className="mr-1.5 h-6 w-6 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'usergroup': return <UserGroupIcon className="mr-1.5 h-6 w-6 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'checkbadge': return <CheckBadgeIcon className="mr-1.5 h-6 w-6 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'cog': return <Cog6ToothIcon className="mr-1.5 h-6 w-6 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
    }
}

export const benefitsBlockSchema: Template = {
    name: "benefits",
    label: "Benefits",
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
            type: "object",
            label: "Benefit items",
            name: "benefit_items",
            list: true,
            ui: {
                itemProps: (item) => {
                    return { label: item?.title }
                },
            },
            fields: [
                {
                    type: "string",
                    label: "Title",
                    name: "title",
                },
                {
                    type: "string",
                    label: "Icon",
                    name: "icon",
                },
            ],
        },
    ],
};
