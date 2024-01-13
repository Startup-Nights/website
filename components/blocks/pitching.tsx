import { Fragment, useEffect, useState } from "react";
import type { Template } from "tinacms";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import {
    ExclamationCircleIcon,
    PlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

const founderPlaceholder = "Link to LinkedIn profile of founder";

export const Pitching = ({ data }) => {
    const [err, setErr] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [founders, setFounders] = useState([founderPlaceholder]);
    const [pitchingSession, setPitchingSession] = useState(null);
    const [raisingFunds, setRaisingFunds] = useState(null);
    const [pitchedToInvestors, setPitchedToInvestors] = useState(null);

    const close = () => {
        setSuccess(false);
        setErr(false);
    };

    // https://stackoverflow.com/a/47069615
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true);

        const data = event.target;

        const response = await fetch("/api/pitching", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstname: data.contact_first.value,
                lastname: data.contact_last.value,
                email: data.contact_email.value,
                startupname: data.startup_name.value,
                website: data.startup_website.value,
                pitchdeck: data.startup_slide.value,
                round: pitchingSession,
                problem: data.startup_problem.value,
                solution: data.startup_solution.value,
                approach: data.startup_uniqueness.value,
                user: data.startup_customer.value,
                funds: raisingFunds,
                pitching: pitchedToInvestors,
                money: data.startup_business.value,
                linkedin: founders.join(","),
            }),
        });

        const { error } = await response.json();
        setLoading(false);

        if (error) {
            setSuccess(false);
            setErr(true);
        } else {
            setErr(false);
            setSuccess(true);
        }

        // remove error messages after 20 seconds
        setTimeout(() => {
            close();
        }, 20 * 1000);
    };

    return (
        <div className="bg-sn-black-light">
            <div className="max-w-5xl mx-auto py-12 px-8 lg:p-24">
                <div>
                    <div className="mt-12 rounded-3xl bg-sn-black-lightest p-8 mb-12">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <InformationCircleIcon className="h-5 w-5 text-sn-yellow" aria-hidden="true" />
                            </div>
                            <div className="ml-3">
                                <h3 className="font-medium text-gray-200">Deadline for the application is <span className="font-bold">05.10.23!</span></h3>
                            </div>
                        </div>
                    </div>


                    <form onSubmit={handleSubmit} className="mt-8 md:mt-16">
                        <div className="mt-6 grid grid-cols-1 gap-y-8 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-6">
                                <h3 className="text-xl font-semibold leading-6 text-gray-200">
                                    Application for the pitching sessions
                                </h3>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="contact_first"
                                    className="block text-sm font-medium leading-6"
                                >
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
                                <label
                                    htmlFor="contact_last"
                                    className="block text-sm font-medium leading-6"
                                >
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
                                <label
                                    htmlFor="contact_email"
                                    className="block text-sm font-medium leading-6"
                                >
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
                                <label
                                    htmlFor="startup_name"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Startup name
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Muster AG"
                                        name="startup_name"
                                        id="startup_name"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="startup_website"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Startup website
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="https://muster.ch"
                                        name="startup_website"
                                        id="startup_website"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="startup_slide"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Link to your pitch deck (if you already have one)
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="https://drive.google.com/xxx"
                                        name="startup_slide"
                                        id="startup_slide"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                {radiobuttons(
                                    "For which pitching event do you apply?",
                                    "round",
                                    [
                                        {
                                            id: "pre-seed",
                                            title: "Pre-Seed",
                                        },
                                        { id: "seed", title: "Seed" },
                                    ],
                                    pitchingSession,
                                    setPitchingSession
                                )}
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="startup_problem"
                                    className="block text-sm font-medium leading-6"
                                >
                                    What problem do you address?
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        required={true}
                                        id="startup_problem"
                                        name="startup_problem"
                                        placeholder="We address xyz..."
                                        rows={3}
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="startup_solution"
                                    className="block text-sm font-medium leading-6"
                                >
                                    How do you solve this problem?
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        required={false}
                                        id="startup_solution"
                                        name="startup_solution"
                                        placeholder="We solve this problem doing xyz..."
                                        rows={3}
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="startup_uniqueness"
                                    className="block text-sm font-medium leading-6"
                                >
                                    What is unique about your problem-solving approach?
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        required={false}
                                        id="startup_uniqueness"
                                        name="startup_uniqueness"
                                        placeholder="Our approach is unique because of xyz..."
                                        rows={3}
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="startup_customer"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Who is your user and who is your paying customer (may be the
                                    same)?
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        required={false}
                                        id="startup_customer"
                                        name="startup_customer"
                                        placeholder="Our customer base consists of ..."
                                        rows={3}
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                {radiobuttons(
                                    "Are you currently raising funds?",
                                    "funds",
                                    [
                                        {
                                            id: "funds-yes",
                                            title: "Yes",
                                        },
                                        { id: "funds-no", title: "No" },
                                    ],
                                    raisingFunds,
                                    setRaisingFunds
                                )}
                            </div>

                            <div className="sm:col-span-6">
                                {radiobuttons(
                                    "Did you already pitch to investors?",
                                    "pitching",
                                    [
                                        {
                                            id: "already-pitched",
                                            title: "Yes",
                                        },
                                        { id: "did-not-pitch", title: "No" },
                                    ],
                                    pitchedToInvestors,
                                    setPitchedToInvestors
                                )}
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="startup_business"
                                    className="block text-sm font-medium leading-6"
                                >
                                    How do you (plan to) make money?
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        required={false}
                                        id="startup_business"
                                        name="startup_business"
                                        placeholder="Our business plan is ..."
                                        rows={3}
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="founder-linkedin-0"
                                    className="block text-sm font-medium leading-6"
                                >
                                    LinkedIn profile of the founder(s)
                                </label>
                                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {founders.map((founder, i) => (
                                        <div
                                            key={`founder-profile-${i}`}
                                            className="flex space-x-4 items-center"
                                        >
                                            <input
                                                type="text"
                                                placeholder={founder}
                                                name={`founder-linkedin-${i}`}
                                                id={`founder-linkedin-${i}`}
                                                onChange={(event) => {
                                                    founders[i] = event.target.value;
                                                    setFounders([...founders]);
                                                }}
                                                className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                            />

                                            {i === founders.length - 1 && (
                                                <button
                                                    className="p-1 bg-sn-yellow rounded-full text-black"
                                                    onClick={() => {
                                                        founders.push(
                                                            "Link to LinkedIn profile of founder"
                                                        );
                                                        setFounders([...founders]);
                                                    }}
                                                >
                                                    <PlusIcon className="h-5 w-5" />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="sm:col-span-2 rounded-xl">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-xl bg-sn-yellow py-1.5 px-3 text-base font-semibold leading-7 sm:text-sm sm:leading-6 text-black hover:bg-sn-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 tracking-wide"
                                >
                                    {loading && (
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                    )}
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

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
                        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-sn-black ring-2 ring-red-400 shadow-xl shadow-red-900">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <ExclamationCircleIcon
                                            className="h-6 w-6 text-red-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-gray-200">
                                            Shoot! Something went wrong.
                                        </p>
                                        <p className="mt-1 text-sm text-gray-400">
                                            Sorry about that. Please shoot us an email{" "}
                                            <a
                                                className="italic text-sn-yellow underline underline-offset-4"
                                                href="mailto:hello@startup-nights.ch"
                                            >
                                                here
                                            </a>{" "}
                                            and we'll get in touch with you.
                                        </p>
                                    </div>
                                    <div className="ml-4 flex flex-shrink-0">
                                        <button
                                            type="button"
                                            className="inline-flex rounded-md bg-sn-black-lightest text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={() => {
                                                close();
                                            }}
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
                        show={success}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-sn-black ring-2 ring-green-400 shadow-xl shadow-green-900">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <CheckCircleIcon
                                            className="h-6 w-6 text-green-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-gray-200">
                                            Whoop-whoop!
                                        </p>
                                        <p className="mt-1 text-sm text-gray-400">
                                            Thanks for your application. We'll get in touch soon.
                                            Pinky-promise.
                                        </p>
                                    </div>
                                    <div className="ml-4 flex flex-shrink-0">
                                        <button
                                            type="button"
                                            className="inline-flex rounded-md bg-sn-black-lightest text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={() => {
                                                close();
                                            }}
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
        </div>
    );
};

export const pitchingBlockSchema: Template = {
    name: "pitching_registration",
    label: "Pitching registration",
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

interface RadioButton {
    id: string;
    title: string;
}

const radiobuttons = (
    title: string,
    name: string,
    data: RadioButton[],
    state,
    setState
) => {
    useEffect(() => {
        setState(data[0].id);
    }, []);

    return (
        <div>
            <label className="text-sm font-medium leading-6">{title}</label>
            <fieldset className="mt-4">
                <legend className="sr-only">{title}</legend>
                <div className="relative grid grid-cols-1 space-y-2 sm:flex sm:space-y-0 sm:items-start sm:space-x-8">
                    {data.map((notificationMethod, i) => (
                        <div key={notificationMethod.id} className="flex items-center">
                            <input
                                id={notificationMethod.id}
                                name={name}
                                type="radio"
                                checked={notificationMethod.id === state}
                                className="h-4 w-4 bg-sn-black-lightest border-sn-black-lightest text-sn-yellow focus:ring-indigo-600"
                                onChange={() => setState(notificationMethod.id)}
                            />
                            <label
                                htmlFor={notificationMethod.id}
                                className="ml-3 block text-sm font-medium leading-6"
                            >
                                {notificationMethod.title}
                            </label>
                        </div>
                    ))}
                </div>
            </fieldset>
        </div>
    );
};
