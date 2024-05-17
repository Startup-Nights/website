import { XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

export default function HeaderBanner(props: any) {
    const [banner, setBanner] = useState(false)
    const [cookie, setCookie] = useCookies(["banner"])
    const [timeLeft, setTimeLeft] = useState('in x days')

    useEffect(() => {
        const id = setTimeout(() => {
            setTimeLeft(calculateTime('2023-11-02'))
        }, 1000)
        return () => clearTimeout(id)
    })

    const removeBanner = () => {
        setCookie("banner", JSON.stringify({ bannerClicked: true }), {
            path: '/',
            maxAge: 3600 * 24, // expire after 1 day
            sameSite: true,
        })
        window.location.reload()
    }

    // https://www.benmvp.com/blog/handling-react-server-mismatch-error/
    useEffect(() => {
        if (!cookie.banner) {
            setBanner(true)
        }
    })

    return (
        <div className={banner ? 'flex items-center gap-x-6 bg-sn-yellow px-6 py-2.5 sm:px-3.5 sm:before:flex-1' : 'hidden'}>
            <p className="text-sm leading-6 text-black">
                <Link href="/tickets">
                    <strong className="font-bold">Startup Nights 2024 / October 30 - November 1 / Eulachhallen Winterthur</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                    </svg>

                    Ticket sales starts on July 1, Pre-register now&nbsp; <span aria-hidden="true">&rarr;</span>
                </Link>
            </p>
            <div className="flex flex-1 justify-end">
                <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
                    onClick={() => removeBanner()}
                >
                    <span className="sr-only">Dismiss</span>
                    <XMarkIcon className="h-5 w-5 text-black" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}

function calculateTime(date: string) {
    const difference = +new Date(date) - +new Date()
    let timeLeft = ''

    if (difference > 0) {
        timeLeft = 'in ' + Math.floor(difference / (1000 * 60 * 60 * 24)) + ' days'
    } else {
        timeLeft = 'today'
    }

    return timeLeft
}
