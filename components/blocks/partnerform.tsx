import { Transition } from "@headlessui/react";
import { CheckCircleIcon, ExclamationCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { Template } from "tinacms"
import { ChatBubbleLeftRightIcon, CheckBadgeIcon, Cog6ToothIcon, HeartIcon, LightBulbIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const options = [
    "Booth",
    "Speaker Opportunities",
    "Workshops",
    "Startup Pitching Sessions",
    "founded. Magazine",
    "Promotional Opportunities",
    "More Partnership Opportunities",
];

export const PartnerForm = ({ data }) => {
    const [err, setErr] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [interests, setInterests] = useState([])

    const close = () => {
        setShowSuccess(false)
        setErr(false);
    }

    // Handles the submit event on form submit.
    const handleSubmit = async (event: any) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
        setLoading(true);

        const response = await fetch('/api/partner', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: event.target.firstname.value,
                lastname: event.target.lastname.value,
                company: event.target.company.value,
                interests: interests.join(', '),
                email: event.target.email.value,
                budget: event.target.budget.value,
            }),
        })

        const { error } = await response.json()
        setLoading(false);
        if (error) {
            setSuccess(false);
            setErr(true);
        } else {
            setErr(false);
            setSuccess(true);
            setShowSuccess(true);
        }

        // remove error messages after 20 seconds
        setTimeout(() => {
            close()
        }, 20 * 1000);
    }

    return (
        <>
            {!success && (
                <div className="bg-sn-black-light">
                    <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                        <div id="partner_form" className='relative text-gray-200'>
                            <div className="max-w-3xl py-12">
                                <h3 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                                    Ready to partner up?
                                </h3>
                                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                                    Schedule a call to get your tailored package.
                                </h2>

                                <p className="mt-6 text-md leading-6 text-gray-300">
                                    Fill out the form below to schedule a call with our partnership team. We'll walk you through the available options, tailor a package to suit your needs, and guide you toward success at the Startup Nights.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

                                    <div className="sm:col-span-2">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                                            First name *
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
                                        <label htmlFor="last-name" className="block text-sm font-medium leading-6">
                                            Last name *
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required={true}
                                                type="text"
                                                name="lastname"
                                                placeholder="Muster"
                                                id="lastname"
                                                autoComplete="family-name"
                                                className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="street-address" className="block text-sm font-medium leading-6">
                                            Company *
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required={true}
                                                type="text"
                                                name="company"
                                                placeholder="Muster AG"
                                                id="company"
                                                autoComplete="company"
                                                className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6">
                                            Email address *
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required={true}
                                                id="email"
                                                name="email"
                                                placeholder="max@muster.ch"
                                                type="email"
                                                autoComplete="email"
                                                className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6">
                                            Budget *
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required={true}
                                                id="budget"
                                                placeholder="2500"
                                                min={2500}
                                                name="budget"
                                                type="number"
                                                className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-6">
                                        <p className="block text-sm font-medium leading-6">What should we talk about?</p>

                                        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2 md:space-y-0">
                                            {options.map((interest, i) => (
                                                <li key={interest} className="relative flex items-start">
                                                    <div className="flex h-6 items-center">
                                                        <input
                                                            id={interest}
                                                            name={interest}
                                                            type="checkbox"
                                                            onClick={() => {
                                                                interests.push(interest);
                                                                setInterests(interests);
                                                            }}
                                                            className="h-4 w-4 rounded bg-sn-black-lightest border-sn-black-lightest text-sn-yellow-dark focus:ring-sn-yellow-dark"
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm leading-6">
                                                        <label
                                                            htmlFor={interest}
                                                            className="font-medium text-gray-200"
                                                        >
                                                            {interest}
                                                        </label>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>


                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            className="flex w-full items-center justify-center rounded-xl bg-sn-yellow py-1.5 px-3 text-base font-semibold leading-7 text-black hover:bg-sn-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sn-yellow sm:text-sm sm:leading-6"
                                        >
                                            {loading && (
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                            )}
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div >
                </div >
            )}

            {success && (
                successMessage()
            )}


            <div
                aria-live="assertive"
                className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-40"
            >
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                    <Transition
                        show={err}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-sn-black ring-2 ring-sn-black-lightest shadow-xl shadow-sn-black">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <ExclamationCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-gray-200">Shoot! Something went wrong.</p>
                                        <p className="mt-1 text-sm text-gray-400">Shoot us an email <a className="italic underline underline-offset-4" href="mailto:hello@startup-nights.ch">here</a> and we'll get in touch with you.</p>
                                    </div>
                                    <div className="ml-4 flex flex-shrink-0">
                                        <button
                                            type="button"
                                            className="inline-flex rounded-md bg-sn-black-lightest text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={() => { close() }}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>

                    <Transition
                        show={showSuccess}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-sn-black ring-2 ring-sn-black-lightest shadow-xl shadow-sn-black">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-gray-200">Oh yes!</p>
                                        <p className="mt-1 text-sm text-gray-400">We received your message. We'll be in touch soon!</p>
                                    </div>
                                    <div className="ml-4 flex flex-shrink-0">
                                        <button
                                            type="button"
                                            className="inline-flex rounded-md bg-sn-black-lightest text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={() => { close() }}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>

        </>
    )
}

export const partnerFormSchema: Template = {
    name: "partnerform",
    label: "Partnerform",
    fields: [
        {
            type: "string",
            label: "Title",
            name: "title"
        },
        {
            type: "string",
            label: "Description",
            name: "description"
        },
    ]
}

const benefit_items = [
    {
        title: "1. Call with our Partner Team",
        text: "Share your objectives and aspirations, and we show you the opportunities that Startup Nights  has in store for your company.",
    },
    {
        title: "2. Designing a Tailored Package",
        text: "Our partner team creates a package, designed exclusively around your goals and to maximize your time at the Startup Nights.",
    },
    {
        title: "3. Preparation",
        text: "With your bespoke package in place, we guide you every step of the way. From inception to execution, we're here to ensure you get everything you desire from your Startup Nights partnership.",
    },
    {
        title: "4. Embrace the Startup Nights Experience",
        text: "It's time for the Startup Nights! Get ready to seize the days, make invaluable connections with fellow attendees, engage with potential business partners, and discover new customers. Immerse yourself in hours of premium content, taking inspiration from industry leaders and visionaries. Our team will be on hand throughout to assist and support.",
    },
]

const successMessage = () => {
    return (
        <div className="bg-sn-black-light">
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                        Welcome aboard!
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        We received your signup. This is how our process continues.
                    </h1>
                </div>

                <ul className="grid grid-cols- md:grid-cols-2 gap-4">
                    {benefit_items.map((benefit: any, i: number) => (
                        <li key={i} className="col-span-1 text-left flex-wrap justify-start items-start bg-sn-black-lightest rounded-3xl p-6 md:p-8">
                            <div className="flex justify-center mb-6">{getIcon(benefit.icon ? benefit.icon : 'cog')}</div>
                            <p className="font-semibold text-xl text-center text-gray-300 mb-6">{benefit.title}</p>
                            <div className="space-y-4">
                                <p className="text-md leading-6 text-gray-400">{benefit.text}</p>
                            </div>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )
}


const getIcon = (icon: string) => {
    switch (icon) {
        case 'chatbubble': return <ChatBubbleLeftRightIcon className="mr-1.5 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'lightbulb': return <LightBulbIcon className="mr-1.5 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'heart': return <HeartIcon className="mr-1.5 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'usergroup': return <UserGroupIcon className="mr-1.5 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'checkbadge': return <CheckBadgeIcon className="mr-1.5 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
        case 'cog': return <Cog6ToothIcon className="mr-1.5 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 text-gray-200" aria-hidden="true" />
    }
}

