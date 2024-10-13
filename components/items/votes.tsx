function calculateScore(name: string, data: any, voter: string): number {
    let points = 0

    data.filter((line: string[]) => line[1] === voter).forEach((line: string[]) => {
        if (line[5] === name) {
            points += 1
        }
    })

    return points
}

export default function Votes({ votes }: { votes: any[] }) {
    const pre_seed_startups = new Set<string>();
    const seed_startups = new Set<string>();

    votes.forEach(vote => {
        if (vote[2] === 'seed') {
            seed_startups.add(vote[5])
        } else {
            pre_seed_startups.add(vote[5])
        }
    })

    const scores_preseed_public = Array.from(pre_seed_startups.values()).map((startup: string) => ({
        "name": startup,
        "points": calculateScore(startup, votes, 'public'),
    })).sort((a: any, b: any) => a.points > b.points ? -1 : 1)

    const scores_seed_public = Array.from(seed_startups.values()).map((startup: string) => ({
        "name": startup,
        "points": calculateScore(startup, votes, 'public'),
    })).sort((a: any, b: any) => a.points > b.points ? -1 : 1)

    return (
        <div className="flex flex-wrap gap-y-8">
            <Table startups={scores_preseed_public.slice(0, 3)} title={'Pre-Seed'} />
            <Table startups={scores_seed_public.slice(0, 3)} title={'Seed'} />
        </div>
    )
}

function Table({ startups, title }: any) {
    return (
        <div className="">
            <div className="mx-auto max-w-7xl">
                <div className="">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h3 className="text-base font-semibold leading-6 text-gray-300">{title}</h3>
                            </div>
                        </div>
                        <div className="mt-3 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-sn-black-lightest">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-200 sm:pl-0">
                                                    Place
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">
                                                    Startup
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-sn-black-lightest">
                                            {startups.map((startup, idx) => (
                                                <tr key={startup.name}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                                        {idx + 1}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{startup.name}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
