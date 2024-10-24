import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HeaderBanner() {
    const [timeLeft, setTimeLeft] = useState('in x days')

    useEffect(() => {
        const id = setTimeout(() => {
            setTimeLeft(calculateTime('2024-10-31 00:00:00'))
        }, 1000)
        return () => clearTimeout(id)
    })

    return (
        <div className='flex items-center justify-center gap-x-6 bg-sn-yellow px-6 py-2.5 sm:px-3.5'>
            <Link href="https://www.b2match.com/e/startup-nights-2024/sign-up">
                <strong className="font-bold">Startup Nights 2024 / October 31 - November 1 / Eulachhallen Winterthur</strong>
                <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                    <circle cx={1} cy={1} r={1} />
                </svg>

                Event starts in {timeLeft} days, get your ticket now&nbsp; <span aria-hidden="true">&rarr;</span>
            </Link>
        </div>
    )
}

function calculateTime(date: string): string {
    const diffTime = Math.abs(+new Date(date) - +new Date());
    const difference = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let timeLeft = ''

    if (difference > 0) {
        timeLeft = '' + difference
    } else {
        timeLeft = 'today'
    }

    return timeLeft
}
