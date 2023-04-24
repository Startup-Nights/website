import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import type { Template } from "tinacms";
import CTA from "./cta";
import { Button, ButtonSecondary } from '../items/button';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const PartnerInfo = ({ data }) => {
    return (
        <div className="bg-sn-black">
            <div className="max-w-7xl mx-auto p-24">
                <div className="grid grid-cols-2 gap-24 items-center">
                    <div className="max-w-md py-8">
                        <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase">
                            {data.subtitle}
                        </h2>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                            {data.title}
                        </h1>

                        <p className="mt-6 text-md leading-6 text-gray-300">
                            {data.content}
                        </p>

                        {data.cta && data.cta.text !== '' && (
                            <div className="mt-20">
                                <CTA data={data} />
                            </div>
                        )}
                    </div>

                    <div className=''>
                        <div className="mt-10 max-w-xl space-y-4 text-base leading-6 text-gray-500 lg:max-w-none">
                            {data.infopoints && data.infopoints.map((feature, i) => (
                                <a key={`feature-${i}`} href={feature?.link} target="_blank" className="block">
                                    <div key={feature.name} className="relative bg-sn-black-lightest rounded-3xl p-8 border-2 border-transparent hover:border-white group">
                                        <div className="absolute invisible -top-3 -right-3 p-2 bg-white rounded-full text-black group-hover:visible">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </div>
                                        <div className="font-semibold text-xl text-gray-300">
                                            {feature.name}
                                        </div>
                                        <div className="text-md mt-4 leading-6 text-gray-400">{feature?.text}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {data.tabitems ? (
                    <div className="w-full px-2 sm:px-0 pt-24">
                        <Tab.Group>
                            <Tab.List className="flex space-x-1 rounded-xl bg-sn-black-light p-1">
                                {data.tabitems.map((item, i) => (
                                    <Tab
                                        key={item.title}
                                        className={({ selected }) =>
                                            classNames(
                                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-300',
                                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                selected
                                                    ? 'bg-sn-black-lightest text-sn-yellow shadow'
                                                    : ''
                                            )
                                        }
                                    >
                                        {item.title}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="mt-2">
                                {data.tabitems.map((item, idx) => (
                                    <Tab.Panel
                                        key={idx}
                                        className={classNames(
                                            'rounded-xl bg-sn-black-light p-8',
                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                        )}
                                    >
                                        <div className="max-w-xl p-8">
                                            <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase">
                                                {data.subtitle}
                                            </h2>
                                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                                                {data.title}
                                            </h1>

                                            <p className="mt-6 text-md leading-6 text-gray-300">
                                                {data.content}
                                            </p>

                                            <div className="mt-20 space-x-4">
                                                {data.cta && data.cta.text !== '' && (
                                                    <Button link={data.cta.link} text={data.cta.text}>
                                                    </Button>
                                                )}

                                                {data.cta_secondary && data.cta_secondary.text !== '' && (
                                                    <ButtonSecondary link={data.cta_secondary.link} text={data.cta_secondary.text}>
                                                    </ButtonSecondary>
                                                )}
                                            </div>
                                        </div>

                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                ) : (<></>)}
            </div>
        </div>
    );
};

export const partnerinfoBlockSchema: Template = {
    name: "partnerinfo",
    label: "Partnerinfo",
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
            type: "object",
            label: "Infopoints",
            name: "infopoints",
            list: true,
            fields: [
                {
                    type: "string",
                    label: "Name",
                    name: "name",
                },
                {
                    type: "string",
                    label: "Text",
                    name: "text",
                },
                {
                    type: "string",
                    label: "Link",
                    name: "link",
                },
            ],
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
