export const Button = (props: any) => {
    return (
        <a href={props?.link}
            type="button"
            className="rounded-full transition-all bg-sn-yellow px-6 py-3 text-black hover:bg-sn-yellow-dark text-base font-semibold leading-7 sm:text-sm sm:leading-6 tracking-wide"
        >
            {props?.text}
        </a>
    )
}

export const ButtonSecondary = (props: any) => {
    return (
        <a href={props?.link}
            type="button"
            className="rounded-full transition-all border-2 border-sn-yellow bg-sn-black px-6 py-3 text-sn-yellow hover:bg-sn-yellow-dark hover:text-black hover:border-sn-yellow-dark text-base font-semibold leading-7 sm:text-sm sm:leading-6 tracking-wide"
        >
            {props?.text}
        </a>
    )
}