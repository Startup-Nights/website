// import React from "react";
// import Link from "next/link";
// import { Container } from "../util/container";
// import { SocialIcon } from "../items/social";
//
// export const Header = ({ data }) => {
//     // If we're on an admin path, other links should also link to their admin paths
//     const [prefix, setPrefix] = React.useState("");
//
//     React.useEffect(() => {
//         if (window && window.location.pathname.startsWith("/admin")) {
//             setPrefix("/admin");
//         }
//     }, []);
//
//     return (
//
//
//         <div className='relative overflow-hidden bg-slate-900 text-slate-400'>
//             <Container size="custom" className="py-0 relative z-10 max-w-8xl">
//                 <div className="flex items-center justify-between gap-6">
//                     <h4 className="select-none text-lg font-bold tracking-tight my-4 transition duration-150 ease-out transform">
//                         <Link href="/" className="flex gap-1 items-center whitespace-nowrap tracking-[.002em]">
//                             <img className="h-8 sm:h-12 w-auto" src="/logo/startup-nights.png" />
//                         </Link>
//                     </h4>
//                     <div className="flex justify-end items-center">
//                         <ul className="flex gap-6 sm:gap-8 lg:gap-10 tracking-[.002em] mx-4">
//                             {data.nav && data.nav.map((item, i) => {
//                                 return (
//                                     <li key={`${item.label}-${i}`} className='hover:text-slate-100'>
//                                         <Link
//                                             href={`${prefix}/${item.href}`}
//                                             className={`relative select-none text-base inline-block tracking-wide transition duration-150 ease-out py-8 px-4`}
//                                         >
//                                             {item.label}
//                                         </Link>
//                                     </li>
//                                 );
//                             })}
//
//                         </ul>
//
//                         <ul className="flex gap-6 sm:gap-4 lg:gap-5">
//                             {data.social && data.social.map((item, i) => (
//                                 <li key={`${item.title}-${i}`} >
//                                     <a href={item.link} target='_blank' className="text-slate-400 hover:text-slate-100">
//                                         <span className="sr-only">{item.title}</span>
//                                         <SocialIcon name={item.title} className="h-6 w-6" aria-hidden="true" />
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//
//                     </div>
//                 </div>
//                 <div
//                     className={`absolute h-1 bottom-0 left-4 right-4 -z-1 opacity-5`}
//                 />
//             </Container >
//         </div >
//     );
// };


import React from 'react'
import { Disclosure, } from '@headlessui/react'
import { Bars3CenterLeftIcon, Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import { SocialIcon } from '../items/social';

export const Header = ({ data }) => {

    // If we're on an admin path, other links should also link to their admin paths
    const [prefix, setPrefix] = React.useState("");

    React.useEffect(() => {
        if (window && window.location.pathname.startsWith("/admin")) {
            setPrefix("/admin");
        }
    }, []);

    return (
        <Disclosure as="nav" className="bg-slate-900 text-slate-400">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex w-full justify-between">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href="/" className="flex gap-1 items-center whitespace-nowrap tracking-[.002em]">
                                        <img className="h-8 sm:h-12 w-auto" src="/logo/startup-nights.png" />
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">

                                    {data.nav && data.nav.map((item, i) => {
                                        return (
                                            <Link
                                                key={`${item.label}-${i}`}
                                                href={`${prefix}/${item.href}`}
                                                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-400 hover:text-slate-100'
                                            >
                                                {item.label}
                                            </Link>
                                        );
                                    })}
                                    {data.social && data.social.map((item, i) => (
                                        <a
                                            key={`${item.title}-${i}`}
                                            href={item.link} target='_blank'
                                            className='inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-400 hover:text-slate-100'
                                        >
                                            <span className="sr-only">{item.title}</span>
                                            <SocialIcon name={item.title} className="h-6 w-6" aria-hidden="true" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-slate-800 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3CenterLeftIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden bg-slate-800 rounded-xl mx-4 my-2 p-2">
                        <div className="space-y-1 pt-2 pb-3">
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-slate-800 hover:text-slate-100"
                            >
                                Dashboard
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-slate-800 hover:text-slate-100"
                            >
                                Team
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-slate-800 hover:text-slate-100"
                            >
                                Projects
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-slate-800 hover:text-slate-100"
                            >
                                Calendar
                            </Disclosure.Button>
                        </div>
                        <div className="">
                            <div className={`m-2 grid grid-cols-${data.social.length}`}>
                                {data.social && data.social.map((item, i) => (
                                    <a
                                        key={`${item.title}-${i}`}
                                        href={item.link} target='_blank'
                                        className='flex justify-center items-center py-2 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-700'
                                    >
                                        <span className="sr-only">{item.title}</span>
                                        <SocialIcon name={item.title} className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                            {}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
