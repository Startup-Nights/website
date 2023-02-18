import React from "react";
import Link from "next/link";
import { Container } from "../util/container";
import { SocialIcon } from "../items/social";

export const Header = ({ data }) => {
    // If we're on an admin path, other links should also link to their admin paths
    const [prefix, setPrefix] = React.useState("");

    React.useEffect(() => {
        if (window && window.location.pathname.startsWith("/admin")) {
            setPrefix("/admin");
        }
    }, []);

    return (
        <div className='relative overflow-hidden bg-slate-900 text-slate-400'>
            <Container size="custom" className="py-0 relative z-10 max-w-8xl">
                <div className="flex items-center justify-between gap-6">
                    <h4 className="select-none text-lg font-bold tracking-tight my-4 transition duration-150 ease-out transform">
                        <Link href="/" className="flex gap-1 items-center whitespace-nowrap tracking-[.002em]">
                            <img className="h-8 sm:h-12 w-auto" src="/logo/startup-nights.png" />
                        </Link>
                    </h4>
                    <div className="flex justify-end items-center">
                        <ul className="flex gap-6 sm:gap-8 lg:gap-10 tracking-[.002em] mx-4">
                            {data.nav && data.nav.map((item, i) => {
                                return (
                                    <li key={`${item.label}-${i}`} className='hover:text-slate-100'>
                                        <Link
                                            href={`${prefix}/${item.href}`}
                                            className={`relative select-none text-base inline-block tracking-wide transition duration-150 ease-out py-8 px-4`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}

                        </ul>

                        <ul className="flex gap-6 sm:gap-4 lg:gap-5">
                            {data.social && data.social.map((item, i) => (
                                <li key={`${item.title}-${i}`} >
                                    <a href={item.link} target='_blank' className="text-slate-400 hover:text-slate-100">
                                        <span className="sr-only">{item.title}</span>
                                        <SocialIcon name={item.title} className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
                <div
                    className={`absolute h-1 bottom-0 left-4 right-4 -z-1 opacity-5`}
                />
            </Container >
        </div >
    );
};
