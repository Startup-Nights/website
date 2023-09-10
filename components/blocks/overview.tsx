import React from "react";
import type { Template } from "tinacms";
import { ColorPickerInput } from "../fields/color";
import { ChatBubbleLeftRightIcon, CheckBadgeIcon, Cog6ToothIcon, FunnelIcon, HeartIcon, LightBulbIcon, MegaphoneIcon, RocketLaunchIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export const Overview = ({ data }) => {
    return (
        <div className={data.background_color ? data.background_color : 'bg-sn-black'}>
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
                        <li key={i} className="col-span-1 text-left flex-wrap justify-start items-start bg-gradient-to-tr from-sn-black-lightest to-gray-900 rounded-3xl p-6 md:p-8">
                            <div className="flex justify-center mb-6">{getIcon(benefit.icon ? benefit.icon : 'cog')}</div>
                            <p className="font-semibold text-xl text-center text-gray-300 mb-6">{benefit.title}</p>
                            <div className="space-y-4">
                                {benefit?.description && benefit.description.map((description: any, key: number) => (
                                    <p key={`description-${i}-${key}`} className="text-md leading-6 text-gray-400">{description}</p>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export const overviewBlockSchema: Template = {
    name: "overview",
    label: "Overview",
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
            fields: [
                {
                    type: "string",
                    label: "Icon",
                    name: "icon",
                },
                {
                    type: "string",
                    label: "Title",
                    name: "title",
                },
                {
                    type: "string",
                    label: "Description",
                    name: "description",
                    list: true
                },
            ],
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


const getIcon = (icon: string) => {
    switch (icon) {
        case 'chatbubble': return <ChatBubbleLeftRightIcon className="mr-1.5 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'lightbulb': return <LightBulbIcon className="mr-1.5 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'heart': return <HeartIcon className="mr-1.5 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'usergroup': return <UserGroupIcon className="mr-1.5 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'checkbadge': return <CheckBadgeIcon className="mr-1.5 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'cog': return <Cog6ToothIcon className="mr-1.5 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'megaphone': return <MegaphoneIcon className="mr-1.5 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'funnel': return <FunnelIcon className="mr-1.5 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'rocket': return <RocketLaunchIcon className="mr-1.5 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
    }
}

