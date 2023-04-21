export const Button = (props: any) => {
    return (
        <a href={props?.link}
            type="button"
            className="rounded-full bg-sn-yellow px-6 py-3 text-sm font-bold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            {props?.text}
        </a>
    )
}

