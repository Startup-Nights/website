import { RocketLaunchIcon, ChatBubbleLeftRightIcon, CheckBadgeIcon, HeartIcon, LightBulbIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export const Facts = ({ data }) => {
    return (
        <div className={`grid grid-rows-${data?.length} grid-flow-col gap-4`}>

            {/* ugly hack because tailwind otherwise would not generate the necessary classes */}
            <div className="hidden col-span-2 col-span-3 col-span-4 col-span-5"></div>
            <div className="hidden row-span-2 row-span-3 row-span-4 row-span-5"></div>

            {data && data.map((figure, i) => (
                <div key={`facts-${i}`} className={`${figure.rows > 1 ? ('row-span-' + figure.rows) : ('')} ${figure.cols > 1 ? ('col-span-' + figure.cols) : ('')} rounded-3xl bg-sn-black-lightest p-4 md:p-6 lg:p-8 `}>
                    <div className={`h-full grid gap-2 lg:gap-4 content-center ${figure.rows > 1 ? ('grid-cols-1') : ('grid-cols-2')}`}>
                        <div className="text-sn-yellow flex justify-center">
                            {getIcon(figure?.icon ? figure.icon : 'heart')}
                        </div>
                        <div className="text-center grid grid-cols-1 content-center">
                            <p className="text-3xl md:text-4xl lg:text-5xl">{figure.number}</p>
                            <p className="mt-1 lg:mt-2 text-sm md:text-lg lg:text-xl text-gray-400">{figure.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export const FactsBlockSchema: any = {
    type: "object",
    label: "Figures",
    name: "figures",
    list: true,
    fields: [
        {
            type: "string",
            label: "Name",
            name: "name",
        },
        {
            type: "string",
            label: "Number",
            name: "number",
        },
        {
            type: "string",
            label: "Icon",
            name: "icon",
        },
        {
            type: "string",
            label: "Row-span",
            name: "rows",
        },
        {
            type: "string",
            label: "Col-span",
            name: "cols",
        },
    ],
}

const getIcon = (icon: string) => {
    switch (icon) {
        case 'chatbubble': return <ChatBubbleLeftRightIcon className="mr-1.5 h-20 w-20 flex-shrink-0 text-sn-yellow" aria-hidden="true" />
        case 'lightbulb': return <LightBulbIcon className="mr-1.5 h-20 w-20 flex-shrink-0 text-sn-yellow" aria-hidden="true" />
        case 'usergroup': return <UserGroupIcon className="mr-1.5 h-20 w-20 flex-shrink-0 text-sn-yellow" aria-hidden="true" />
        case 'checkbadge': return <CheckBadgeIcon className="mr-1.5 h-20 w-20 flex-shrink-0 text-sn-yellow" aria-hidden="true" />
        case 'rocket': return <RocketLaunchIcon className="mr-1.5 h-20 w-20 flex-shrink-0 text-sn-yellow" aria-hidden="true" />

        default:
            return <HeartIcon className="mr-1.5 h-20 w-20 flex-shrink-0 text-sn-yellow" aria-hidden="true" />
    }
}