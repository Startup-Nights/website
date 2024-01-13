import { useEffect, useState } from "react";
import Link from "next/link";

export const Banner = ({ data, setOpen }) => {
    const [timeLeft, setTimeLeft] = useState({} as any);

    useEffect(() => {
        const id = setTimeout(() => {
            setTimeLeft(calculateTime(data.date));
        }, 1000);
        return () => clearTimeout(id);
    });

    return (
        <div className="fixed inset-x-0 z-10 bottom-0 bg-sn-yellow py-6 ring-1 ring-gray-900/10">
            <div className="max-w-7xl mx-auto px-8 lg:px-24 flex flex-col justify-between gap-x-8 gap-y-4 md:flex-row md:items-center ">

                {timeLeft["hours"] !== 0 ? (
                    <div className="flex flex-wrap space-x-4">
                        <Text text={"Days"} number={timeLeft["days"]} />
                        <Text text={"Hours"} number={timeLeft["hours"]} />
                        <Text text={"Minutes"} number={timeLeft["minutes"]} />
                        <Text text={"Seconds"} number={timeLeft["seconds"]} />
                    </div>
                ) : (
                    <p className="text-md sm:text-xl font-bold">The time has come...</p>
                )}

                <p className="max-w-4xl text-sm leading-6 text-gray-900">{data.text}</p>

                <div className="flex flex-none items-center gap-x-3">
                    <Link
                        href={data.link ? data.link : "/"}
                        onClick={() => setOpen(false)}
                        type="button"
                        className="rounded-full transition-all bg-sn-black border-2 border-sn-black px-4 py-1 text-sn-white hover:bg-sn-yellow hover:text-black hover:border-sn-black-lightest text-base font-semibold leading-7 sm:text-sm sm:leading-6 tracking-wide"
                    >
                        {data.agree_button}
                    </Link>
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="rounded-full transition-all border-2 border-sn-black hover:bg-sn-black px-4 py-1 text-black hover:text-white text-base font-semibold leading-7 sm:text-sm sm:leading-6 tracking-wide"
                    >
                        {data.close_button}
                    </button>
                </div>
            </div>
        </div>
    );
};

function calculateTime(date: string) {
    const difference = +new Date(date) - +new Date();
    const timeLeft = [];

    if (difference > 0) {
        timeLeft["days"] = Math.floor(difference / (1000 * 60 * 60 * 24));
        timeLeft["hours"] = Math.floor((difference / (1000 * 60 * 60)) % 24);
        timeLeft["minutes"] = Math.floor((difference / 1000 / 60) % 60);
        timeLeft["seconds"] = Math.floor((difference / 1000) % 60);
    } else {
        timeLeft["days"] = 0;
    }

    return timeLeft;
}

const Text = ({ number, text }) => {
    return (
        <div className="flex space-x-1 align-baseline items-baseline">
            <p className="text-md sm:text-xl font-bold">{number}</p>
            <p className="text-sm sm:text-md">{text}</p>
        </div>
    );
};
