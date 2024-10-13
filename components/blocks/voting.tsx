import { useEffect, useState } from "react";
import Votes from "../items/votes";

export const Voting = ({ data }) => {
    const [votes, setVotes] = useState()

    useEffect(() => {
        const getVotes = async () => {
            const raw = await fetch('https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-70cb3437-eee1-474d-8ad6-387035b15671/website/sheets', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: '1F4r2nCsQUIE38qOJaBzuyqHOtgVc3KshhucyOQI6zBU',
                    range: 'A:M',
                }),
            }).then(e => e.json())
            setVotes(raw.data)
        }
        getVotes()
    }, [])

    return (
        <div className="bg-sn-black rounded-3xl p-4 text-center space-y-8">
            <div>
                <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-200 sm:text-3xl">
                    Public Voting Ranking
                </h2>
                <p className="mt-2 text-sm italic">The voting is open until <span className="font-bold">20.10. 8pm</span></p>
            </div>
            <div className="flex justify-center text-left">
                {!votes && (
                    <p>Fetching the latest votes...</p>
                )}
                {votes && (
                    <Votes votes={votes} />
                )}
            </div>
        </div>
    );
};

export const votingBlockSchema: any = {
    type: "object",
    name: "voting",
    label: "Voting",
    fields: [
        {
            type: "string",
            label: "Subtitle",
            name: "subtitle",
        },
    ],
};
