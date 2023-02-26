import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function CTA({ data }) {
    return (
        <div className='relative'>
            <a className="h6 uppercase flex items-center hover:underline hover:underline-offset-4" href={data.cta.link}>
                <ArrowLongRightIcon className="h-6 w-6 mr-3" /> {data.cta.text}
            </a>
        </div>
    )
}
