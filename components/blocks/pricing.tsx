import { CheckIcon } from '@heroicons/react/20/solid'
import { Template } from 'tinacms'

const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
    {
        name: 'Founders',
        price: 'CHF 59',
        description: 'The essentials to provide your best work for clients.',
        features: [
            'Ticket for both days',
            'Free drinks and food',
            'Access to our matchmaking platform',
        ],
    },
    {
        name: 'Investors',
        price: 'CHF 149',
        description: 'The essentials to provide your best work for clients.',
        features: [
            'Ticket for both days',
            'Free drinks and food',
            'Access to our matchmaking platform',
            'Access to the investor lounge',
        ],
    },
    {
        name: 'Corporates',
        price: 'CHF 149',
        description: 'A plan that scales with your rapidly growing business.',
        features: [
            'Ticket for both days',
            'Free drinks and food',
            'Access to our matchmaking platform',
        ],
    },
    {
        name: 'Ecosystem',
        price: 'CHF 149',
        description: 'This category is for institutions such as universities and politics.',
        features: [
            'Ticket for both days',
            'Free drinks and food',
            'Access to our matchmaking platform',
        ],
    },
    {
        name: 'Visitors and students',
        price: 'CHF 39',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Ticket for both days',
            'Free drinks and food',
        ],
    },
]

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
                        Pricing
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data.title}
                        Compare the different ticket categories.
                    </h1>
                </div>

                <div className="isolate mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={classNames(
                                'bg-sn-black-light',
                                'rounded-3xl p-8'
                            )}
                        >
                            <h3
                                id={tier.name}
                                className={classNames(
                                    'text-gray-200',
                                    'text-lg font-semibold leading-8'
                                )}
                            >
                                {tier.name}
                            </h3>
                            <p className="mt-4 leading-6 text-gray-400">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-gray-200">{tier.price}</span>
                            </p>
                            <a
                                href={'#sn-tito-embedded-widget'}
                                aria-describedby={tier.name}
                                className={classNames(
                                    'text-yellow ring-1 ring-inset ring-sn-yellow hover:ring-sn-yellow-dark transition-all',
                                    'mt-6 block text-sn-yellow hover:text-black hover:bg-sn-yellow rounded-xl py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sn-yellow'
                                )}
                            >
                                Get your ticket
                            </a>
                            <ul role="list" className="mt-8 space-y-3 leading-6 text-gray-200">
                                {tier.features.map((feature) => (
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
            name: "title",
            label: "Title"
        },
        {
            type: "string",
            name: "description",
            label: "Description"
        },
    ]
}