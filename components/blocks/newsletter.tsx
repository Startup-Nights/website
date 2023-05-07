import { useRef, useState, Fragment } from "react";
import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export default function Newsletter({ data }) {
    const [err, setErr] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const close = () => {
        setSuccess(false)
        setErr(false);
    }

    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);
    const emailRef = useRef(null);

    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
        setLoading(true);

        const response = await fetch('/api/newsletter', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: event.target.email.value,
                first: event.target.last.value,
                last: event.target.first.value,
            }),
        })

        const { error } = await response.json()

        setLoading(false);
        firstnameRef.current.value = '';
        lastnameRef.current.value = '';
        emailRef.current.value = '';

        if (error) {
            setSuccess(false);
            setErr(true);
        } else {
            setErr(false);
            setSuccess(true);
        }

        // remove error messages after 20 seconds
        setTimeout(() => {
            close()
        }, 20 * 1000);
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-2 gap-y-3 gap-x-3">
                <div className="col-span-1">
                    <label htmlFor="first" className="sr-only">
                        First name
                    </label>
                    <div className="flex">
                        <input
                            type="text"
                            name="first"
                            id="first"
                            ref={firstnameRef}
                            autoComplete="first-name"
                            required
                            className="w-full min-w-0 flex-1 appearance-none rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                            placeholder="Max"
                        />
                    </div>
                </div>

                <div className="col-span-1">
                    <label htmlFor="last" className="sr-only">
                        Last name
                    </label>
                    <div className="flex">
                        <input
                            type="text"
                            name="last"
                            id="last"
                            ref={lastnameRef}
                            autoComplete="last-name"
                            required
                            className="w-full min-w-0 flex-1 appearance-none rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                            placeholder="Muster"
                        />
                    </div>
                </div>

                <div className="col-span-1">
                    <label htmlFor="email" className="sr-only">
                        Email address
                    </label>
                    <div className="flex">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            ref={emailRef}
                            autoComplete="email"
                            required
                            className="w-full min-w-0 flex-1 appearance-none rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                            placeholder="Enter your email"
                        />
                    </div>
                </div>

                <div className="col-span-1 rounded-xl">
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
                        Subscribe
                    </button>
                </div>
            </form>

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
                                        <p className="mt-1 text-sm text-gray-400">Shoot us an email <a className="italic underline underline-offset-4" href="mailto:hello@startup-nights.ch">here</a> and we'll put you on the list.</p>
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
                        show={success}
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
                                        <p className="mt-1 text-sm text-gray-400">You are now subscribed to the newsletter.</p>
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
        </div>
    )
}