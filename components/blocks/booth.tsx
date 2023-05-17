import * as fs from 'fs';
import { useState } from "react";
import type { Template } from "tinacms";
import Link from "next/link";
import { InformationCircleIcon, PhotoIcon } from '@heroicons/react/20/solid'
import { Tab } from '@headlessui/react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'


export const Booth = ({ data }) => {
    const [err, setErr] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const [categories, setCategories] = useState([]);
    const [otherInterests, setOtherInterests] = useState([]);
    const [accomodation, setAccomodation] = useState(null);
    const [rollup, setRollup] = useState(null);
    const [equipment, setEquipment] = useState(null);

    const [companyLogo, setCompanyLogo] = useState(null);

    // https://stackoverflow.com/a/47069615
    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true);

        const data = event.target;

        const body = {
            company: {
                name: data.company_name.value,
                website: data.company_website.value,
                founding_date: data.company_founding_date.value,
                employees: data.company_employees.value,
                pitch: data.company_pitch.value,
                categories: categories,
                address: {
                    street: data.company_street.value,
                    zip: data.company_zip.value,
                    city: data.company_city.value,
                    country: data.company_country.value
                },
                address_billing: {
                    street: data.billing_street.value,
                    zip: data.billing_zip.value,
                    city: data.billing_city.value,
                    country: data.billing_country.value
                },
            },
            contact: {
                firstname: data.contact_first.value,
                lastname: data.contact_last.value,
                email: data.contact_email.value,
                phone: data.contact_phone.value,
                role: data.contact_role.value,
            },
            images: {},
            varia: {
                formats: otherInterests,
                accomodation: accomodation,
                rollup: rollup,
                equipment: equipment
            }
        }

        const response = await fetch('/api/booth', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })

        const { error } = await response.json()
        setLoading(false);

        if (error) {
            setSuccess(false);
            setErr(true);
        } else {
            setErr(false);
            setSuccess(true);
        }
    }

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

                        <div className="mt-6 rounded-3xl bg-sn-black-light p-8">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <InformationCircleIcon className="h-5 w-5 text-sn-yellow" aria-hidden="true" />
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
                                <span key={i} className="py-2 px-4 bg-sn-black-light rounded-xl">{badge}</span>
                            ))}
                        </div>

                        <p className="mt-6 text-md leading-6 text-gray-300">
                            We'll get in touch with all the startups that have registered up until then. Stay tuned!
                        </p>

                        <div className="mt-6 rounded-3xl bg-sn-black-light p-8">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <InformationCircleIcon className="h-5 w-5 text-sn-yellow" aria-hidden="true" />
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

                    <form onSubmit={handleSubmit} className="mt-16">
                        <h3 className="text-xl font-semibold leading-6 text-slate-200">Company details</h3>
                        <p className="mt-6 text-md leading-6 text-gray-300">
                            We'll get in touch with all the startups that have registered up until then. Stay tuned!
                        </p>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="company_name" className="block text-sm font-medium leading-6">
                                    Company name
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Muster AG"
                                        name="company_name"
                                        id="company_name"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="company_website" className="block text-sm font-medium leading-6">
                                    Company website
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="https://muster.ch"
                                        name="company_website"
                                        id="company_website"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="company_founding_date" className="block text-sm font-medium leading-6">
                                    Founding date
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="date"
                                        name="company_founding_date"
                                        id="company_founding_date"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="company_employees" className="block text-sm font-medium leading-6">
                                    Number of employees
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="5"
                                        name="company_employees"
                                        id="company_employees"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label htmlFor="company_pitch" className="block text-sm font-medium leading-6">
                                    Company / product pitch
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        required={true}
                                        id="company_pitch"
                                        name="company_pitch"
                                        placeholder="Write a few sentences about the company and / or the product in elevator-pitch style"
                                        rows={3}
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label htmlFor="company_street" className="block text-sm font-medium leading-6">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Musterstrasse"
                                        name="company_street"
                                        id="company_street"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="company_zip" className="block text-sm font-medium leading-6">
                                    ZIP / postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="number"
                                        placeholder="8400"
                                        name="company_zip"
                                        id="company_zip"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="company_city" className="block text-sm font-medium leading-6">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Winterthur"
                                        name="company_city"
                                        id="company_city"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="company_country" className="block text-sm font-medium leading-6">
                                    Country
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Switzerland"
                                        name="company_country"
                                        id="company_country"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <p className="block text-sm font-medium leading-6 mb-2">Company categories</p>
                                <Categories categories={categories} setCategories={setCategories} />
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="company_logo" className="block text-sm font-medium leading-6">
                                    Company logo
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-200/25 px-6 py-10">
                                    <div className="text-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div className="mt-4 flex text-sm items-baseline leading-6 text-gray-600">
                                            <label
                                                htmlFor="company_logo"
                                                className="relative cursor-pointer py-1 px-2 rounded-md bg-sn-black-light hover:bg-sn-black-lightest font-semibold text-sn-yellow focus-within:outline-none focus-within:ring-2 focus-within:ring-sn-yellow focus-within:ring-offset-2"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="company_logo"
                                                    name="company_logo"
                                                    onChange={(event) => {
                                                        if (event.target.files && event.target.files[0]) {
                                                            setCompanyLogo(event.target.files[0])
                                                        }
                                                    }}
                                                    type="file"
                                                    className="sr-only"
                                                />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG or SVG up to 10MB</p>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-6 mt-16">
                                <h3 className="text-xl font-semibold leading-6 text-slate-200">Contact person</h3>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="contac_first" className="block text-sm font-medium leading-6">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="contact_first"
                                        id="contact_first"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="contact_last" className="block text-sm font-medium leading-6">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Muster"
                                        name="contact_last"
                                        id="contact_last"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="contact_email" className="block text-sm font-medium leading-6">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="email"
                                        placeholder="max@muster.ag"
                                        name="contact_email"
                                        id="contact_email"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="contact_phone" className="block text-sm font-medium leading-6">
                                    Phone number
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="contact_phone"
                                        id="contact_phone"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="contact_role" className="block text-sm font-medium leading-6">
                                    Role / position
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="CEO"
                                        name="contact_role"
                                        id="contact_role"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6 mt-16">
                                <h3 className="text-xl font-semibold leading-6 text-slate-200">Other interests</h3>
                            </div>

                            <div className="sm:col-span-6">
                                <p className="block text-sm font-medium leading-6">Select other formats that you are interested in</p>

                                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    {otherInterest.map((interest, i) => (
                                        <li key={interest} className="relative flex items-start">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id={interest}
                                                    aria-describedby="comments-description"
                                                    name={interest}
                                                    type="checkbox"
                                                    onClick={() => {
                                                        otherInterests.push(interest)
                                                        setOtherInterests(otherInterests)

                                                    }}
                                                    className="h-4 w-4 rounded bg-sn-black-lightest border-sn-black-lightest text-sn-yellow-dark focus:ring-sn-yellow-dark"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm leading-6">
                                                <label htmlFor={interest} className="font-medium text-gray-200">
                                                    {interest}
                                                </label>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="sm:col-span-6">
                                {radiobuttons('Do you need support booking accommodation?', 'accomodation', [
                                    { id: 'accomodation-yes', title: 'yes' },
                                    { id: 'accomodation-no', title: 'no' },
                                ], accomodation, setAccomodation)}
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="booth_image" className="block text-sm font-medium leading-6">
                                    Do you already have an idea how your boot will look like?
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-200/25 px-6 py-10">
                                    <div className="text-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div className="mt-4 flex text-sm items-baseline leading-6 text-gray-600">
                                            <label
                                                htmlFor="booth_image"
                                                className="relative cursor-pointer py-1 px-2 rounded-md bg-sn-black-light hover:bg-sn-black-lightest font-semibold text-sn-yellow focus-within:outline-none focus-within:ring-2 focus-within:ring-sn-yellow focus-within:ring-offset-2"
                                            >
                                                <span>Upload a file</span>
                                                <input id="both_image" name="booth_image" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG or JPEG up to 10MB</p>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                {packages()}
                            </div>

                            <div className="sm:col-span-6">
                                {radiobuttons('Do you have a rollup?', 'rollup', [
                                    { id: 'rollup-yes', title: 'yes' },
                                    { id: 'rollup-no', title: "no (we will organize one) " },
                                ], rollup, setRollup)}
                            </div>

                            <div className="sm:col-span-6">
                                {radiobuttons('Equipment', 'equipment', [
                                    { id: 'equipment-own', title: "We'll bring our own equipment" },
                                    { id: 'equipment-rent', title: "We want to rent equipment" },
                                    { id: 'equipment-not-sure', title: "We are not sure yet" },
                                ], equipment, setEquipment)}
                            </div>

                            <div className="sm:col-span-6">
                                <label htmlFor="equipment_description" className="block text-sm font-medium leading-6">
                                    If you bring your own equipment, please describe what you'll bring:
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        required={false}
                                        id="equipment_description"
                                        name="equipment_description"
                                        placeholder="We'll bring along x + y..."
                                        rows={3}
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6 mt-16">
                                <h3 className="text-xl font-semibold leading-6 text-slate-200">Billing address</h3>
                            </div>

                            <div className="sm:col-span-6">
                                <label htmlFor="billing_street" className="block text-sm font-medium leading-6">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Musterstrasse"
                                        name="billing_street"
                                        id="billing_street"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="billing_zip" className="block text-sm font-medium leading-6">
                                    ZIP / postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="number"
                                        placeholder="8400"
                                        name="billing_zip"
                                        id="billing_zip"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="billing_city" className="block text-sm font-medium leading-6">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Winterthur"
                                        name="billing_city"
                                        id="billing_city"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="billing_country" className="block text-sm font-medium leading-6">
                                    Country
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Switzerland"
                                        name="billing_country"
                                        id="billing_country"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6 mt-16">
                                <h3 className="text-xl font-semibold leading-6 text-slate-200">Additional information</h3>
                            </div>

                            <div className="sm:col-span-6">
                                <label htmlFor="remarks" className="block text-sm font-medium leading-6">
                                    Remarks and notes
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        required={false}
                                        id="remarks"
                                        name="remarks"
                                        placeholder="Please note if you have any remarks"
                                        rows={3}
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>

                            <div className="col-span-1 sm:col-span-2 rounded-xl">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-xl bg-sn-yellow py-1.5 px-3 text-base font-semibold leading-7 sm:text-sm sm:leading-6 text-black hover:bg-sn-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 tracking-wide"
                                >
                                    {loading && (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    )}
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
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



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Categories = ({ categories, setCategories }) => {
    return (
        <div className="w-full">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-sn-black-light p-1">
                    {Object.keys(companyCategories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                    selected
                                        ? 'bg-sn-black-lightest text-sn-yellow shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(companyCategories).map((category, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-sn-black-light p-3',
                            )}
                        >
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {category.map((cat, i) => (
                                    <li key={i} className="relative flex items-start">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id={cat.name}
                                                aria-describedby="comments-description"
                                                name={cat.name}
                                                type="checkbox"
                                                className="h-4 w-4 rounded bg-sn-black-lightest border-sn-black-lightest text-sn-yellow-dark focus:ring-sn-yellow-dark"
                                                onClick={() => {
                                                    // todo: check if being checked or unchecked -> add / remove
                                                    categories.push(cat.name)
                                                    setCategories(categories)
                                                }}
                                            />
                                        </div>
                                        <div className="ml-3 text-sm leading-6">
                                            <label htmlFor={cat.name} className="font-medium text-gray-200">
                                                {cat.name}
                                            </label>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

interface RadioButton {
    id: string;
    title: string;
}

const radiobuttons = (title: string, name: string, data: RadioButton[], state, setState) => {
    return (
        <div>
            <label className="text-sm font-medium leading-6">{title}</label>
            <fieldset className="mt-4">
                <legend className="sr-only">{title}</legend>
                <div className="relative flex items-start space-x-8">
                    {data.map((notificationMethod) => (
                        <div key={notificationMethod.id} className="flex items-center">
                            <input
                                id={notificationMethod.id}
                                name={name}
                                type="radio"
                                className="h-4 w-4 bg-sn-black-lightest border-sn-black-lightest text-sn-yellow focus:ring-indigo-600"
                                onChange={() => setState(notificationMethod.id)}
                            />
                            <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium leading-6">
                                {notificationMethod.title}
                            </label>
                        </div>
                    ))}
                </div>
            </fieldset>
        </div>
    )
}

const packages = () => {
    const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

    return (
        <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
            <RadioGroup.Label className="block text-sm font-medium leading-6">
                Select other formats that you are interested in
            </RadioGroup.Label>

            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                {registration_packages.map((mailingList) => (
                    <RadioGroup.Option
                        key={mailingList.id}
                        value={mailingList}
                        className={({ checked, active }) =>
                            classNames(
                                checked ? 'border-transparent' : 'border-gray-600',
                                active ? 'border-sn-yellow ring-2 ring-sn-yellow' : '',
                                'relative flex cursor-pointer rounded-lg border bg-sn-black-light p-4 shadow-sm focus:outline-none'
                            )
                        }
                    >
                        {({ checked, active }) => (
                            <>
                                <span className="flex flex-1">
                                    <span className="flex flex-col">
                                        <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-200">
                                            {mailingList.icon} <span className='mx-2'></span> {mailingList.title}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description as="span" className="mt-2 flex items-center text-sm text-gray-200">
                                            {mailingList.description}
                                        </RadioGroup.Description>
                                        <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-400">
                                            {mailingList.price}
                                        </RadioGroup.Description>
                                    </span>
                                </span>
                                <CheckCircleIcon
                                    className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-sn-yellow')}
                                    aria-hidden="true"
                                />
                                <span
                                    className={classNames(
                                        active ? 'border' : 'border-2',
                                        checked ? 'border-sn-yellow' : 'border-transparent',
                                        'pointer-events-none absolute -inset-px rounded-lg'
                                    )}
                                    aria-hidden="true"
                                />
                            </>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
}

const badges = [
    '15.07.2023',
    '15.07.2023',
    '15.07.2023',
    '15.07.2023',
    '15.07.2023',
]

const companyCategories = {
    'Autonomous Systems': [
        // autonomous systems
        { name: 'Artificial Intelligence' },
        { name: 'Augmented & Virtual Reality' },
        { name: 'Data Mining & Machine Learning' },
        { name: 'Mobility Robotics' },
        { name: 'Smart Buildings' },
        { name: 'Smart Cities' },
        { name: 'Supply Chain & Logistics', },
    ],
    'Health Tech': [
        // healht tech
        { name: 'Biotech', },
        { name: 'Digital Health', },
        { name: 'Healthcare', },
        { name: 'Medtech & Pharma', },
        { name: 'Wearables', },
        { name: 'Wellbeing', },
    ],
    'Sustainable Tech': [
        // sustainable tech
        { name: 'Agricultural Tech', },
        { name: 'CleanTech', },
        { name: 'Energy Transition', },
        { name: 'Environmental Economics', },
        { name: 'Foodtech', },
        { name: 'Micro- / Nanoech', },
        { name: 'New Materials', },
        { name: 'Social Entrepreneurship', },
        { name: 'Sustainable Living', },
    ],
    'ICT & Services': [
        { name: 'FinTech', },
        { name: 'Funding / Alternative Finance', }, { name: 'InsurTech', },
        { name: 'LegalTech', },
        { name: 'Payments', },
        { name: 'PropTech', },
        { name: 'RegTech', },
        { name: 'Security & Privacy', },
        { name: 'Art & Culture', },
        { name: 'Consumer Electronics', },
        { name: 'E-Commerce & Online Marketplaces', },
        { name: 'Education', },
        { name: 'Enterprise Software', },
        { name: 'Gaming', },
        { name: 'Industrial Internet & IoT', },
        { name: 'Lifestyle & Fashion', },
        { name: 'Marketing & AdTech', },
        { name: 'Mobile', },
        { name: 'Hardware & Software', },
        { name: 'News & Entertainment', },
        { name: 'Social & Communities', },
        { name: 'Sports & Performance', },
        { name: 'Travel & Tourism', },
    ],
}

const registration_packages = [
    { id: 1, icon: '✈️', title: 'Paperplane', price: 'CHF 200', description: '2x2m area with a bar table and 230V outlet', selected: true },
    { id: 2, icon: '🚀', title: 'Rocket', price: 'CHF 400', description: '3x3m area with a bar table and 230V outlet', selected: false }
]

const otherInterest = [
    'Pitching competition',
    'Startup inovation awards'
]

const mailingLists = [
    { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
    { id: 2, title: 'Existing Customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
    { id: 3, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
]
