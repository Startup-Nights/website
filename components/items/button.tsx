import Link from "next/link"

function infer_link_target(props: any): string {
    const link = (props?.link ? props.link : '') as string

    if (props?.new_tab) {
        return props?.new_tab === true ? '_blank' : '_self'
    }

    return link.startsWith('http') || link.startsWith('www') ? '_blank' : '_self'
}

export const Button = (props: any) => {
    const link = (props?.link ? props.link : '') as string

    return (
        <Link href={link}
            type="button"
            target={infer_link_target(props)}
            className="rounded-full transition-all bg-sn-yellow px-4 xl:px-6 py-1 xl:py-2 text-black border-2 border-sn-yellow hover:border-sn-yellow-dark hover:bg-sn-yellow-dark text-base font-semibold leading-7 sm:text-sm sm:leading-6 tracking-wide"
        >
            {props?.text}
        </Link>
    )
}

export const ButtonSecondary = (props: any) => {
    const link = (props?.link ? props.link : '') as string

    return (
        <Link href={link}
            type="button"
            target={infer_link_target(props)}
            className={`rounded-full transition-all border-2 border-sn-yellow ${props?.without_background === true ? '' : 'bg-sn-black'} px-4 xl:px-6 py-1 xl:py-2 text-sn-yellow hover:bg-sn-yellow-dark hover:text-black hover:border-sn-yellow-dark text-base font-semibold leading-7 sm:text-sm sm:leading-6 tracking-wide`}
        >
            {props?.text}
        </Link>
    )
}
