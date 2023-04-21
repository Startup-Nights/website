export const Button = (props: any) => {
    return (
        <a href={props?.link}
            type="button"
            className="rounded-full bg-sn-yellow px-6 py-3 text-black hover:bg-sn-yellow-dark text-base font-semibold leading-7 sm:text-sm sm:leading-6 tracking-wide"
        >
            {props?.text}
        </a>
    )
}

