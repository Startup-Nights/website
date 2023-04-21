import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { SocialIcon } from '../items/social'
import { Button } from '../items/button'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export const Header = ({ data }) => {
    // If we're on an admin path, other links should also link to their admin paths
    const [prefix, setPrefix] = React.useState("");

    React.useEffect(() => {
        if (window && window.location.pathname.startsWith("/admin")) {
            setPrefix("/admin");
        }
    }, []);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-sn-black fixed top-0 z-20 w-full backdrop-blur-md bg-sn-black/90 ">
            <div className="relative">
                <div className='max-w-7xl mx-auto px-6 py-6 lg:px-8'>
                    <nav className="relative flex items-center justify-between" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <Link href="/" className="-m-1.5 p-1.5 items-center whitespace-nowrap">
                                <img className="h-8 sm:h-12 w-auto" src="/logo/startup-nights.png" />
                            </Link>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {data.nav && data.nav.map((item, i: number) => {
                                return (
                                    <Link
                                        key={`${item.label}-${i}`}
                                        href={`${prefix}/${item.href}`}
                                        className='text-sm font-semibold leading-6 text-slate-400 hover:text-slate-100'
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-2 justify-center">
                            <div className='mr-4'>
                                <Button text='Register' link='https://www.b2match.com/e/startup-nights-2023'></Button>
                            </div>

                            {data.social && data.social.map((item, i: number) => (
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
                    </nav>
                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel className="fixed inset-0 z-40 overflow-y-auto backdrop-blur-md bg-sn-black/90 px-6 py-6 lg:hidden">
                            <div className="flex items-center justify-between">
                                <Link
                                    href="/"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-1.5 p-1.5 flex gap-1 items-center whitespace-nowrap"
                                >
                                    <img className="h-8 sm:h-12 w-auto" src="/logo/startup-nights.png" />
                                </Link>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-400"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y-2 divide-slate-600">
                                    <div className="space-y-2 py-6">
                                        {data.nav && data.nav.map((item, i: number) => {
                                            return (
                                                <Link
                                                    key={`${item.label}-${i}`}
                                                    href={`${prefix}/${item.href}`}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-slate-400 hover:bg-gray-400/10'
                                                >
                                                    {item.label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                    <div className='py-6'>
                                        <p className='-mx-3 block rounded-lg py-2 px-3 text-base leading-7 text-slate-400'>
                                            <a href="https://startup-nights.ch" className="font-bold hover:text-gray-600">Startup Nights</a> - an event organized by <a href="https://ec-w.ch" className="font-bold hover:text-gray-600">ECW</a>

                                        </p>
                                        <div className='-mx-3 flex justify-start space-x-2'>
                                            {data.social && data.social.map((item, i: number) => (
                                                <a
                                                    key={`${item.title}-${i}`}
                                                    href={item.link} target='_blank'
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className='flex justify-center rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-slate-400 hover:bg-gray-400/10'
                                                >
                                                    <span className="sr-only">{item.title}</span>
                                                    <SocialIcon name={item.title} className="h-6 w-6" aria-hidden="true" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}
