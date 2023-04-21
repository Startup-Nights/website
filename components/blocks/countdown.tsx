import React, { useState } from "react";
import type { Template } from "tinacms";

const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`10/01/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

    return timeLeft;
}

export const Countdown = ({ data }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    return (
        <div className="bg-sn-yellow">
            <div className="max-w-7xl mx-auto p-12">
                <div className="flex justify-between self-center">
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                        {data.title}
                    </h1>

                    <div className="flex space-x-2">
                        <div className="grid grid-cols-1 text-center">
                            <p className="text-4xl">{timeLeft.days}</p>
                            <p className="mt-2 text-xl">Days</p>
                        </div>
                        <span className="text-4xl">:</span>
                        <div className="grid grid-cols-1 text-center">
                            <p className="text-4xl">{timeLeft.hours}</p>
                            <p className="mt-2 text-xl">Hours</p>
                        </div>
                        <span className="text-4xl">:</span>
                        <div className="grid grid-cols-1 text-center">
                            <p className="text-4xl">{timeLeft.minutes}</p>
                            <p className="mt-2 text-xl">Minutes</p>
                        </div>
                        <span className="text-4xl">:</span>
                        <div className="grid grid-cols-1 text-center">
                            <p className="text-4xl">{timeLeft.seconds}</p>
                            <p className="mt-2 text-xl">Seconds</p>
                        </div>
                    </div>

                    {data.cta && data.cta.text !== '' && (
                        <div className="flex justify-center self-center">
                            <a href={data.cta.link}
                                type="button"
                                className="rounded-full bg-sn-black px-6 py-3 text-gray-100 hover:bg-sn-black-lightest text-base font-semibold leading-7 sm:text-sm sm:leading-6 tracking-wide"
                            >
                                {data.cta.text}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

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
