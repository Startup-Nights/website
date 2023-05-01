import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { SocialIcon } from '../items/social'
import Preregister from '../blocks/preregister'

export const Header = ({ data }) => {
    // modal for the preregistration until we have tito ready
    const [open, setOpen] = useState(false)

    // If we're on an admin path, other links should also link to their admin paths
    const [prefix, setPrefix] = useState("");

    useEffect(() => {
        if (window && window.location.pathname.startsWith("/admin")) {
            setPrefix("/admin");
        }
    }, []);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-sn-black fixed top-0 z-20 w-full backdrop-blur-md bg-sn-black/90 ">
            <div className="relative">
                <Modal open={open} setOpen={setOpen} />

                <div className='max-w-7xl mx-auto py-6 px-8 lg:px-24'>
                    <nav className="relative flex items-center justify-between" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <Link href="/" className="-m-1.5 p-1.5 items-center whitespace-nowrap">
                                <img className="h-8 sm:h-12 w-auto select-none" src="/logo/startup-nights.png" />
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
                        <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
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
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-2 justify-center items-center">
                            <div className='mr-4'>
                                {/* <Button text='Tickets' link='/tickets'></Button> */}
                                <button
                                    onClick={() => setOpen(true)}
                                    className='rounded-full transition-all bg-sn-yellow px-6 py-3 text-black hover:bg-sn-yellow-dark text-base font-semibold leading-7 sm:text-sm sm:leading-6 tracking-wide'
                                >Tickets</button>
                            </div>

                            {data.social && data.social.map((item, i: number) => (
                                <a
                                    key={`${item.title}-${i}`}
                                    href={item.link} target='_blank'
                                    className='inline-flex items-center text-sm font-medium text-slate-400 hover:text-slate-100'
                                >
                                    <span className="sr-only">{item.title}</span>
                                    <SocialIcon name={item.title} className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </nav>
                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel className="fixed inset-0 z-40 overflow-y-auto backdrop-blur-md bg-sn-black/90 px-8 py-6 lg:hidden">
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

                                        {/* <a className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-slate-400 hover:bg-gray-400/10'
                                            href='/tickets'>Tickets</a> */}
                                        <button
                                            onClick={() => setOpen(true)}
                                            className='-mx-3 w-full rounded-lg py-2 px-3 text-base text-left font-semibold leading-7 text-slate-400 hover:bg-gray-400/10'
                                        >Tickets</button>
                                    </div>
                                    <div className='py-6'>
                                        <p className='-mx-3 block rounded-lg py-2 px-3 text-base leading-7 text-slate-400'>
                                            <Link href="https://startup-nights.ch" className="font-bold hover:text-gray-600">Startup Nights</Link> - an event organized by <Link href="https://ec-w.ch" className="font-bold hover:text-gray-600">ECW</Link>
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

const Modal = ({ open, setOpen }) => {

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-sn-black bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-sn-black-lightest p-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                <div>
                                    <div className="text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-200">
                                            Preregister for Startup Nights 2023
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <Preregister data={{}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-xl bg-sn-yellow px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-sn-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sn-yellow-dark"
                                        onClick={() => setOpen(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
