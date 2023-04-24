import { Tab } from '@headlessui/react';
import { ContentBlock, ContentBlockSchema } from '../items/contentblock';
import { Template } from 'tinacms';
import { Infopoints, InfopointsBlockSchema } from '../items/infopoints';
import { RoundImage, RoundImageBlockschema } from '../items/image';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export const Dropdown = ({ data }) => {
    return (
        <div className="bg-sn-black">
            <div className="max-w-7xl mx-auto p-24">
                {data?.items && data?.items?.map(item => (
                    <Disclosure as="div" className="mb-2" key={item?.content_block?.title}>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-sn-black-light px-4 py-2 text-center font-md text-gray-200 hover:bg-sn-black-lightest focus:outline-none focus-visible:ring focus-visible:ring-sn-yellow focus-visible:ring-opacity-75">
                                    <span>{item?.content_block?.title}</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-gray-200`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
                                    <div className="grid grid-cols-2 gap-24 items-center">
                                        <ContentBlock data={item?.content_block} />

                                        {item?.infopoints && (
                                            <Infopoints data={item?.infopoints} />
                                        )}

                                        {item?.image && (
                                            <RoundImage data={item?.image} />
                                        )}
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    )
};

export const dropdownBlockSchema: Template = {
    name: "Dropdown",
    label: "Dropdown",
    fields: [
        {
            label: "Items",
            name: "items",
            type: "object",
            list: true,
            fields: [
                ContentBlockSchema,
                RoundImageBlockschema,
                InfopointsBlockSchema,
            ],
        }
    ],
};
