import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { Template } from 'tinacms'
import { ColorPickerInput } from '../fields/color'
import { Button } from '../items/button'

export const PricingTable = ({ data }) => {
    const tickBox = (selector: string) => {
        // const el = document.querySelector('#tito-ticket-visitors-incl-students input[type=checkbox]') as HTMLInputElement;
        if (selector && selector !== '') {
            (document.querySelector(selector) as HTMLInputElement)?.click();
        }
    }

    return (
        <div className={data.background_color ? data.background_color : 'bg-sn-black'}>
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase">
                        {data.subtitle}
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data.title}
                    </h1>

                    {data?.cta && (
                        <div className='mt-12'>
                            <Button link={data?.cta?.link} text={data?.cta?.text} />
                        </div>
                    )}
                </div>

                <div className="isolate mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {data.categories && data.categories.map((category, i) => (
                        <Link key={`category-${i}`} href={`${category.selector ? '#sn-tito-embedded-widget' : category.link}`} onClick={() => category.selector ? tickBox(category.selector) : {}} className='flex group items-stretch w-full'>
                            <div className='bg-sn-black-light w-full rounded-3xl px-8 py-6 transition-all relative grid grid-cols-1 justify-start items-center border-2 border-transparent hover:border-white'>
                                <div className="absolute invisible -top-3 -right-3 p-2 bg-white rounded-full text-black group-hover:visible">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </div>

                                <h3 className={'text-gray-200 text-lg font-semibold leading-8'}>
                                    {category.name}
                                </h3>
                                {category.description && category.description.map((description, i) => (
                                    <p key={`${category.name}-description-${i}`} className="mt-4 leading-6 text-gray-400">{description}</p>
                                ))}
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-gray-200">CHF {category.price}</span>
                                </p>
                                <ul role="list" className="mt-8 space-y-3 leading-6 text-gray-200">
                                    {category.benefits && category.benefits.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <CheckIcon className="h-6 w-5 flex-none text-sn-yellow" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                    {category.not_included && category.not_included.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <XMarkIcon className="h-6 w-5 flex-none text-red-500" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const pricingBlockSchema: Template = {
    name: "pricing",
    label: "Pricing table",
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
        {
            label: "Call to action",
            name: "cta",
            type: "object",
            fields: [
                {
                    type: "string",
                    label: "Link",
                    name: "link",
                },
                {
                    type: "string",
                    label: "Text",
                    name: "text",
                }
            ]
        },
        {
            type: "object",
            label: "Categories",
            name: "categories",
            list: true,
            fields: [
                {
                    type: "number",
                    label: "Price",
                    name: "price",
                },
                {
                    type: "string",
                    label: "CSS input selector",
                    name: "selector",
                },
                {
                    type: "string",
                    label: "Link (instead of CSS selector)",
                    name: "link"
                },
                {
                    type: "string",
                    label: "Name",
                    name: "name",
                },
                {
                    type: "string",
                    label: "Description",
                    name: "description",
                    list: true
                },
                {
                    type: "string",
                    label: "Benefits",
                    name: "benefits",
                    list: true
                },
                {
                    type: "string",
                    label: "Not included",
                    name: "not_included",
                    list: true
                },
            ]
        },
        {
            type: "string",
            name: "background_color",
            label: "Background color",
            ui: {
                component: ColorPickerInput as any
            }
        },
    ]
}
