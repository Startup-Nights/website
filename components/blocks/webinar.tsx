import { useState } from "react";
import type { Template } from "tinacms";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export const Webinar = ({ data }) => {
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const data = e.target

        setLoading(true)

        const response = await fetch('https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-70cb3437-eee1-474d-8ad6-387035b15671/website/sheets', {
            signal: AbortSignal.timeout(5000),
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: '10jYxSsWu93D-l0eybcZZmrvonmGVUTTcd8uvdsBmoU8',
                range: 'A:D',
                data: [
                    new Date().toString(),
                    data.name.value,
                    data.email.value,
                    data.company.value,
                ],
            }),
        })

        setLoading(false)
        const { error } = await response.json()
        if (error) {
            alert(error)
        }
    }

    return (
        <div className="bg-sn-black" id={data?.id ? data.id : 'webinar'}>
            <div className="max-w-5xl mx-auto py-12 px-8 lg:p-24">

                <div className="max-w-md py-8">
                    <h3 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                        {data?.subtitle}
                    </h3>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data?.title}
                    </h2>
                </div>


                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-white hidden">
                            Name
                        </label>
                        <div className="">
                            <input
                                id="name"
                                name="name"
                                placeholder='Max Muster'
                                type="text"
                                required
                                autoComplete="name"
                                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white hidden">
                            Email address
                        </label>
                        <div className="">
                            <input
                                id="email"
                                name="email"
                                placeholder='max@muster.ch'
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium leading-6 text-white hidden">
                            Company
                        </label>
                        <div className="">
                            <input
                                id="company"
                                name="company"
                                placeholder='Muster AG'
                                type="text"
                                required
                                autoComplete="company"
                                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className={classNames(
                                "flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
                                'bg-sn-yellow hover:bg-sn-yellow-dark text-black',
                            )}
                        >
                            {!loading && (
                                <span>Sign up</span>
                            )}
                            {loading && (
                                <>
                                    <span>Submitting...</span>
                                    <svg className="animate-spin ml-3 h-5 w-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export const webinarBlockSchema: Template = {
    name: "webinar",
    label: "Webinar Signup",
    fields: [
        {
            type: "string",
            label: "ID",
            name: "id",
        },
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
            label: "Text",
            name: "paragraph",
        },
    ],
};
