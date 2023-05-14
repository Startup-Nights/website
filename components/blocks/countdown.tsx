import Link from "next/link";
import React, { useEffect, useState } from "react";
import type { Template } from "tinacms";

function calculateTime(date: string) {
    const difference = +new Date(date) - +new Date()
    const timeLeft = []

    if (difference > 0) {
        timeLeft['days'] = Math.floor(difference / (1000 * 60 * 60 * 24))
        timeLeft['hours'] = Math.floor((difference / (1000 * 60 * 60)) % 24)
        timeLeft['minutes'] = Math.floor((difference / 1000 / 60) % 60)
        timeLeft['seconds'] = Math.floor((difference / 1000) % 60)
    } else {
        timeLeft['days'] = 0
    }

    return timeLeft
}

export const Countdown = ({ data }) => {
    const [timeLeft, setTimeLeft] = useState({} as any)

    useEffect(() => {
        const id = setTimeout(() => {
            setTimeLeft(calculateTime(data.date))
        }, 1000)
        return () => clearTimeout(id)
    })

    const timerComponents = Object.keys(timeLeft).map(interval => {
        if (!timeLeft[interval]) {
            return null
        }

        return true
    })

    return (
        <div className="bg-sn-yellow">
            <div className="max-w-7xl mx-auto px-8 py-8 lg:py-12 lg:px-24">
                <div className="grid grid-cols-1 gap-y-6 justify-start lg:flex lg:justify-between lg:self-center lg:items-baseline">
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                        {data.title}
                    </h1>

                    {timeLeft['days'] !== 0 ?
                        <div className="flex flex-wrap space-x-4">
                            <Text text={'Days'} number={timeLeft['days']} />
                            <Text text={'Hours'} number={timeLeft['hours']} />
                            <Text text={'Minutes'} number={timeLeft['minutes']} />
                            <Text text={'Seconds'} number={timeLeft['seconds']} />
                        </div>
                        : <p className="text-5xl font-bold">The time has come</p>}

                    {data.cta && data.cta.text !== '' && (
                        <div className="flex justify-start items-baseline">
                            <Link href={data.cta.link}
                                type="button"
                                className="rounded-full transition-all border-2 border-sn-black bg-sn-black px-6 py-2 text-sn-white hover:bg-sn-yellow hover:text-black hover:border-sn-black text-base font-semibold leading-7 sm:text-sm sm:leading-6 tracking-wide"
                            >
                                {data.cta.text}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Text = ({ number, text }) => {
    return (
        <div className="flex space-x-1 align-baseline items-baseline">
            <p className="text-2xl md:text-4xl font-bold">{number}</p>
            <p className="mt-2 text-md md:text-xl">{text}</p>
        </div>
    )
}

export const countdownBlockSchema: Template = {
    name: "countdown",
    label: "Countdown",
    fields: [
        {
            type: "string",
            label: "Title",
            name: "title",
        },
        {
            type: "string",
            label: "Date",
            name: "date",
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
    ],
};