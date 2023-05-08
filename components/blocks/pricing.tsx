import { CheckIcon } from '@heroicons/react/20/solid'
import { Template } from 'tinacms'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const PricingTable = ({ data }) => {
    return (
        <div className="bg-sn-black">
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase">
                        {data.subtitle}
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data.title}
                    </h1>
                </div>

                <div className="isolate mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {data.categories && data.categories.map((category, i) => (
                        <div key={`category-${i}`} className={classNames('bg-sn-black-light rounded-3xl p-8')}>
                            <h3 className={'text-gray-200 text-lg font-semibold leading-8'}>
                                {category.name}
                            </h3>
                            {category.description && category.description.map(description => (
                                <p className="mt-4 leading-6 text-gray-400">{description}</p>
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
                            </ul>
                        </div>

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
            type: "object",
            label: "Categories",
            name: "categories",
            list: true,
            fields: [
                {
                    type: "number",
                    label: "Price",
                    name: "price"
                },
                {
                    type: "string",
                    label: "Name",
                    name: "name"
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
            ]
        }
    ]
}