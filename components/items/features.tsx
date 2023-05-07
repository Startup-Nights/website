import { RocketLaunchIcon, ChatBubbleLeftRightIcon, CheckBadgeIcon, HeartIcon, LightBulbIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export const Features = ({ data }) => {
    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10">
            {data.map((feature) => (
                <div key={feature.title} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-200">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
                            {getIcon(feature.icon)}
                        </div>
                        {feature.title}
                    </dt>
                    {feature.text && (
                        <dd className="mt-2 text-base leading-7 text-gray-400">{feature.text}</dd>
                    )}
                </div>
            ))}
        </div>
    )
}

export const FeaturesBlockSchema: any = {
    type: "object",
    label: "Features",
    name: "features",
    list: true,
    fields: [
        {
            type: "string",
            label: "Title",
            name: "title",
        },
        {
            type: "string",
            label: "Text",
            name: "text",
        },
        {
            type: "string",
            label: "Icon",
            name: "icon",
        }
    ]
}

const getIcon = (icon: string) => {
    switch (icon) {
        case 'chatbubble': return <ChatBubbleLeftRightIcon className="absolute left-1 top-1 h-6 w-6 flex-shrink-0 text-sn-yellow" aria-hidden="true" />
        case 'lightbulb': return <LightBulbIcon className="absolute left-1 top-1 h-6 w-6 flex-shrink-0 text-sn-yellow" aria-hidden="true" />
        case 'usergroup': return <UserGroupIcon className="absolute left-1 top-1 h-6 w-6 flex-shrink-0 text-sn-yellow" aria-hidden="true" />
        case 'checkbadge': return <CheckBadgeIcon className="absolute left-1 top-1 h-6 w-6 flex-shrink-0 text-sn-yellow" aria-hidden="true" />
        case 'rocket': return <RocketLaunchIcon className="absolute left-1 top-1 h-6 w-6 flex-shrink-0 text-sn-yellow" aria-hidden="true" />

        default:
            return <HeartIcon className="absolute left-1 top-1 h-6 w-6 flex-shrink-0 text-sn-yellow" aria-hidden="true" />
    }
}