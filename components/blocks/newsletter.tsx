import client from "@mailchimp/mailchimp_marketing";
import { useRef, useState } from "react";

client.setConfig({
    apiKey: process.env.SLACK_WEBHOOK_URL as string,
    server: "us16",
});

export default function Newsletter({ data }) {
    const [err, setErr] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

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
            setSuccess(false);
            setErr(false);
        }, 20 * 1000);
    }

    return (
        <div className="">
            <h3 className="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
                The latest news, articles, and resources, sent to your inbox weekly.
            </p>
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
                            className="w-full min-w-0 flex-1 appearance-none rounded-full border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
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
                            className="w-full min-w-0 flex-1 appearance-none rounded-full border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
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
                            className="w-full min-w-0 flex-1 appearance-none rounded-full border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                            placeholder="Enter your email"
                        />
                    </div>
                </div>

                <div className="col-span-1 rounded-full">
                    <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-full bg-sn-yellow py-1.5 px-3 text-base font-semibold leading-7 text-white hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 sm:text-sm sm:leading-6"
                    >
                        {loading && (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        )}
                        Subscribe
                    </button>
                </div>

                <div className="col-span-2">
                    {success && (
                        <p className="text-green-400 text-sm">Success! You are now subscribed to the newsletter 🥳</p>
                    )}

                    {err && (
                        <p className="text-red-400 text-sm">Oh no! Something went wrong. Shoot us an email <a className="italic underline underline-offset-4" href="mailto:helo@startup-nights.ch">here</a> and we'll put you on the list.</p>
                    )}
                </div>
            </form>
        </div>

    )
}
