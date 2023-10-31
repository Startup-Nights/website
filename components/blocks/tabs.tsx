import { Tab } from '@headlessui/react';
import { ContentBlock, ContentBlockSchema } from '../items/contentblock';
import { Template } from 'tinacms';
import { Infopoints, InfopointsBlockSchema } from '../items/infopoints';
import { RoundImage, RoundImageBlockschema } from '../items/image';
import { MiniDropdown, miniDropdownBlockSchema } from './minidropdown';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const Tabs = ({ data }) => {
    return (
        <div className="bg-sn-black">
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                {data.tabitems ? (
                    <div className="w-full px-2 sm:px-0">
                        <Tab.Group>
                            <Tab.List className="flex space-x-1 rounded-xl bg-sn-black-light p-4">
                                {data.tabitems.map((item, i) => (
                                    <Tab
                                        key={item?.content_block?.title}
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
                                        {item?.content_block?.title}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="mt-2">
                                {data.tabitems.map((item, idx) => (
                                    <Tab.Panel
                                        key={idx}
                                        className={classNames(
                                            'rounded-xl bg-sn-black-light py-4 px-12',
                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                        )}
                                    >
                                        <div className="grid grid-cols-2 gap-24 items-center">
                                            <ContentBlock data={item?.content_block} />

                                            {item?.infopoints && (
                                                <Infopoints data={item?.infopoints} />
                                            )}

                                            {item?.image && (
                                                <RoundImage data={item?.image} />
                                            )}
                                        </div>
                                        {item?.dropdown_items && (
                                            <MiniDropdown data={item?.dropdown_items} />
                                        )}
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                ) : (<></>)}
            </div>
        </div>
    )
};

export const tabsBlockSchema: Template = {
    name: "tabs",
    label: "Tabs",
    fields: [
        {
            label: "Tabitems",
            name: "tabitems",
            type: "object",
            list: true,
            fields: [
                ContentBlockSchema,
                RoundImageBlockschema,
                InfopointsBlockSchema,
                miniDropdownBlockSchema,
            ],
        }
    ],
};
