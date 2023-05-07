import * as React from "react";
import type { Template } from "tinacms";
import Link from "next/link";

const badges = [
    '15.07.2023',
    '15.07.2023',
    '15.07.2023',
    '15.07.2023',
    '15.07.2023',
]

export const Booth = ({ data }) => {
    return (
        <div className="bg-sn-black">
            <div className="max-w-5xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase">
                        Booth
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        Application for a booth in our Startup World
                    </h1>
                </div>
                <div>
                    <div className="mt-12">
                        <p className="text-md leading-6 text-gray-300">
                            We are happy to have you here! Please fill out the form below so that we get to know you a bit better.
                            This helps us to select interesting startups and think about the placement of your booth.
                        </p>

                        <div className="mt-6 rounded-xl bg-sn-black-light p-8">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <InformationCircleIcon className="h-5 w-5 text-sky-600" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="font-medium text-gray-200">About the application process</h3>
                                    <p className="mt-2 text-gray-400">
                                        Unfortunately our available space is limited and therefore we have to curate the applications. To
                                        make this more transparent, here is our current criteria list:
                                    </p>
                                    <div className="mt-2 text-gray-400">
                                        <ul role="list" className="list-disc space-y-1 pl-5">
                                            <li>high growth potential</li>
                                            <li>disruptive approach to solving a problem</li>
                                            <li>young startup</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="mt-6 text-md leading-6 text-gray-300">
                            We review the registration in batches of 30 startups latest at the following dates:
                        </p>

                        <div className="mt-4 flex flex-wrap justify-start gap-2">
                            {badges.map((badge, i) => (
                                <span key={i} className="py-2 px-4 bg-sn-black-light hover:bg-sn-black-lightest rounded-xl">{badge}</span>
                            ))}
                        </div>

                        <p className="mt-6 text-md leading-6 text-gray-300">
                            We'll get in touch with all the startups that have registered up until then. Stay tuned!
                        </p>

                        <div className="mt-6 rounded-xl bg-sn-black-light p-8">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <InformationCircleIcon className="h-5 w-5 text-sky-600" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="font-medium text-gray-200">Note that you have to buy the tickets for the event separatly</h3>
                                    <p className="mt-2 text-gray-400">
                                        You can get the tickets <Link href={'/tickets'} className="text-sn-yellow underline hover:text-sn-yellow-dark underline-offset-4">here</Link>. But you might want to apply
                                        for the booth first - we'll send you a little welcome present after your application.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form action="" className="mt-16">
                        <h3 className="text-xl font-semibold leading-6 text-slate-200">Company details</h3>
                        <p className="mt-6 text-md leading-6 text-gray-300">
                            We'll get in touch with all the startups that have registered up until then. Stay tuned!
                        </p>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                                    Company name
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="given-name"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                                    Company website
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="given-name"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                                    Founding date
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="given-name"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                                    Number of employees
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="given-name"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                                    Company / product pitch
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        required={true}
                                        id="idea"
                                        name="idea"
                                        placeholder="Write a few sentences about the company and / or the product in elevator-pitch style"
                                        rows={3}
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="given-name"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                                    ZIP / postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="given-name"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="given-name"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                                    Country
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="given-name"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <p className="block text-sm font-medium leading-6 mb-2">Company categories</p>
                                <Categories />
                            </div>

                            <div className="sm:col-span-6 mt-16">
                                <h3 className="text-xl font-semibold leading-6 text-slate-200">Contact person</h3>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="given-name"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="given-name"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="given-name"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                                    Phone number
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="given-name"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                                    Role
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="firstname"
                                        id="firstname"
                                        autoComplete="given-name"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6 mt-16">
                                <h3 className="text-xl font-semibold leading-6 text-slate-200">Other interests</h3>
                            </div>


                            <div className="sm:col-span-6 mt-16">
                                <h3 className="text-xl font-semibold leading-6 text-slate-200">Booth</h3>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export const boothBlockSchema: Template = {
    name: "booth_registration",
    label: "Booth registration",
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
};



import { InformationCircleIcon } from '@heroicons/react/20/solid'

const Infobox = ({ text }) => {
    return (
        <div className="rounded-xl bg-sn-black-light p-8">
            <div className="flex">
                <div className="flex-shrink-0">
                    <InformationCircleIcon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-200">There were 2 errors with your submission</h3>
                    <p className="mt-2 text-sm text-gray-200">A new software update is available. See what’s new in version 2.0.4.</p>
                    <div className="mt-2 text-sm text-gray-200">
                        <ul role="list" className="list-disc space-y-1 pl-5">
                            <li>Your password must be at least 8 characters</li>
                            <li>Your password must include at least one pro wrestling finishing move</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Categories = () => {
    let [categories] = useState({
        Recent: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Popular: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Trending: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    })

    return (
        <div className="w-full">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-sn-black-light p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-sn-yellow',
                                    selected
                                        ? 'bg-sn-black-lightest shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-sn-black-light p-3',
                            )}
                        >
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {posts.map((post, i) => (
                                    <div key={i} className="relative flex items-start">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id={post.title}
                                                aria-describedby="comments-description"
                                                name={post.title}
                                                type="checkbox"
                                                className="h-4 w-4 rounded bg-sn-black-lightest border-sn-black-lightest text-sn-yellow-dark focus:ring-sn-yellow-dark"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm leading-6">
                                            <label htmlFor={post.title} className="font-medium text-gray-200">
                                                Comments
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
