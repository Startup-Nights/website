import { Template } from "tinacms"
import { Container } from "../util/container"
import { Section } from "../util/section"

export default function PartnerForm({ data }) {
    return (
        <Section>
            <Container className={``} >
                <div className='relative text-slate-200'>
                    <div>
                        <h3 className="text-base font-semibold leading-6 text-slate-200">Personal Information</h3>
                        <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                    </div>
                    <form action="/api/partner" method="post">
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
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="w-full min-w-0 appearance-none rounded-md border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
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
                                        name="last-name"
                                        placeholder="Muster"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="w-full min-w-0 appearance-none rounded-md border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
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
                                        className="w-full min-w-0 appearance-none rounded-md border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
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
                                        className="w-full min-w-0 appearance-none rounded-md border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
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
                                        placeholder="1000"
                                        name="budget"
                                        type="number"
                                        className="w-full min-w-0 appearance-none rounded-md border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label htmlFor="about" className="block text-sm font-medium leading-6">
                                    What kind of partnership do you have in mind?                            </label>
                                <div className="mt-2">
                                    <textarea
                                        required={true}
                                        id="idea"
                                        name="idea"
                                        placeholder="Are you interested in a booth, a workshop, ...?"
                                        rows={3}
                                        className="w-full min-w-0 appearance-none rounded-md border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                                        defaultValue={''}
                                    />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                </p>
                            </div>

                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-md bg-sky-500 py-1.5 px-3 text-base font-semibold leading-7 text-white hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 sm:text-sm sm:leading-6"
                                >
                                    Send
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </Container>
        </Section >

    )
}


export const partnerFormSchema: Template = {
    name: "Partnerform",
    label: "partner_form",
    fields: [
        {
            type: "string",
            name: "Title",
            label: "title"
        }
    ]
}