import Link from "next/link"

export const Infopoints = ({ data }) => {
    return (
        <div className="max-w-xl space-y-4 text-base leading-6 text-gray-500 lg:max-w-none">
            {data?.map((point, i) => (
                <div key={`infopoint-${i}`}>
                    {(point.link && point.link !== '') ? (
                        <Link href={point?.link} target="_blank" className="block">
                            <Content point={point} />
                        </Link>
                    ) : (
                        <ContentWithoutLink point={point} />
                    )}
                </div>
            ))}
        </div>
    )
}

const Content = ({ point }) => {
    return (
        <div className="relative bg-sn-black-lightest rounded-3xl p-8 border-2 border-transparent hover:border-white group">
            <div className="absolute invisible -top-3 -right-3 p-2 bg-white rounded-full text-black group-hover:visible">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </div>
            <div className="font-semibold text-xl text-gray-300">
                {point?.name}
            </div>
            <div className="text-md mt-4 leading-6 text-gray-400">{point?.text}</div>
        </div>

    )
}

const ContentWithoutLink = ({ point }) => {
    return (
        <div className="relative bg-sn-black-lightest rounded-3xl p-8 border-2 border-transparent">
            <div className="font-semibold text-xl text-gray-300">
                {point?.name}
            </div>
            <div className="text-md mt-4 leading-6 text-gray-400">{point?.text}</div>
        </div>

    )
}

export const InfopointsBlockSchema: any = {
    type: "object",
    label: "Infopoints",
    name: "infopoints",
    list: true,
    fields: [
        {
            type: "string",
            label: "Name",
            name: "name",
        },
        {
            type: "string",
            label: "Text",
            name: "text",
        },
        {
            type: "string",
            label: "Link",
            name: "link",
        },
    ],
}
