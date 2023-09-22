import { useState, useEffect, Fragment } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { SocialIcon } from '../items/social'
import { Button, ButtonSecondary } from '../items/button'

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { getIcon } from '../util/icons'

export const Header = ({ data }) => {
    // If we're on an admin path, other links should also link to their admin paths
    const [prefix, setPrefix] = useState("");

    useEffect(() => {
        if (window && window.location.pathname.startsWith("/admin")) {
            setPrefix("/admin");
        }
    }, []);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-sn-black fixed top-0 z-20 w-full backdrop-blur-md bg-sn-black/90 outline-sn-yellow focus:outline-none ">
            <div className="relative">
                <div className='max-w-7xl mx-auto py-6 px-8 lg:px-24'>
                    <nav className="relative flex items-center justify-between" aria-label="Global">
                        <div className='flex justify-start items-center gap-x-8 xl:gap-x-16'>
                            <div className="flex">
                                <Link href="/" className="-m-1.5 p-2 items-center whitespace-nowrap">
                                    <img className="h-6 sm:h-8 w-auto select-none" src="/logo/startup-nights.png" />
                                </Link>
                            </div>
                            <div className="hidden lg:flex lg:gap-x-6">
                                {data.nav && data.nav.map((item: any, i: number) => {
                                    if (item.subitems) return (
                                        <Popover className="relative" key={i}>
                                            <Popover.Button className={'inline-flex items-center gap-x-1 text-sm font-semibold leading-6 ' +
                                                'text-sm font-semibold leading-6 text-gray-400 hover:text-gray-100'}>
                                                <span>{item.label}</span>
                                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                            </Popover.Button>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                                                    <div className={'w-screen max-w-md flex-auto overflow-hidden rounded-3xl ' +
                                                        'bg-sn-black text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 ' +
                                                        'border-2 border-sn-black-lightest'}>
                                                        <div className="p-4">
                                                            {item.subitems && item.subitems.map((subitem: any) => (
                                                                <div key={subitem.label} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-sn-black-light">
                                                                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-sn-black-light group-hover:bg-sn-black-lightest">
                                                                        {getIcon(subitem.icon, 'h-6 w-6 text-gray-500 group-hover:text-sn-yellow')}
                                                                    </div>
                                                                    <div>
                                                                        <a href={subitem.href} className="font-semibold text-gray-300">
                                                                            {subitem.label}
                                                                            <span className="absolute inset-0" />
                                                                        </a>
                                                                        <p className="mt-1 text-gray-500">{subitem.description}</p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {item.callsToAction && (
                                                            <div className="grid grid-cols-2 divide-x divide-gray-200/5 bg-sn-black-light">
                                                                {item.callsToAction.map((itm: any) => (
                                                                    <a
                                                                        key={itm.label}
                                                                        href={itm.href}
                                                                        className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-400 hover:bg-sn-black-lightest"
                                                                    >
                                                                        {getIcon(itm.icon, 'h-5 w-5 flex-none text-gray-400')}
                                                                        {itm.label}
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </Popover>
                                    )

                                    return (
                                        <Link
                                            key={`${item.label}-${i}`}
                                            href={`${prefix}/${item.href}`}
                                            className='text-sm font-semibold leading-6 text-gray-400 hover:text-gray-100'
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="hidden lg:flex lg:justify-end space-x-2 justify-center items-center">
                            <div className=''>
                                <ButtonSecondary text='Booth' link='/booth'></ButtonSecondary>
                            </div>

                            <div className='mr-4'>
                                <Button text='Tickets' link='/tickets'></Button>
                            </div>

                            {data.social && data.social.map((item, i: number) => (
                                <a
                                    key={`${item.title}-${i}`}
                                    href={item.link} target='_blank'
                                    className='inline-flex items-center text-sm font-medium text-gray-400 hover:text-gray-100'
                                >
                                    <span className="sr-only">{item.title}</span>
                                    <SocialIcon name={item.title} className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
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

                    </nav>
                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel className="fixed inset-0 z-40 overflow-y-auto backdrop-blur-md bg-sn-black/95 py-6 lg:hidden">
                            <div className="flex items-center justify-between px-8 ">
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
                            <div className='px-6 sm:px-8'>
                                <div className="mt-6 grid grid-cols-2 gap-x-4">
                                    {data.nav && data.nav.filter(item => item.subitems).map((item: any, i: number) => (
                                        <div key={item.label}>
                                            <h3 className='block rounded-lg text-base font-semibold leading-7 text-gray-500'>
                                                {item.label}
                                            </h3>
                                            <div className='space-y-4 mt-4'>
                                                {item.subitems.map(subitem => (
                                                    <Link
                                                        key={`${subitem.label}-${i}`}
                                                        href={`${prefix}/${subitem.href}`}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className='flex items-center gap-x-5 rounded-lg text-xs sm:text-base font-semibold leading-7 text-gray-300'
                                                    >
                                                        {getIcon(subitem.icon, 'h-5 w-5 sm:h-6 sm:w-6 text-gray-200')}
                                                        {subitem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 grid grid-cols-2 gap-x-4">
                                    {data.nav && data.nav.filter(item => !item.subitems).map((item: any, i: number) => (
                                        <Link
                                            key={`${item.label}-${i}`}
                                            href={`${prefix}/${item.href}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className='text-base font-semibold leading-7 text-gray-300'
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                                <h3 className='mt-8 block rounded-lg text-base font-semibold leading-7 text-gray-500'>
                                    Take part
                                </h3>
                                <div className="mt-4 grid grid-cols-2 gap-x-4">
                                    <div className='space-y-4'>
                                        <Link
                                            className='flex items-center gap-x-5 rounded-lg text-xs sm:text-base font-semibold leading-7 text-gray-300'
                                            href='/tickets'
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {getIcon('ticket', 'h-5 w-5 sm:h-6 sm:w-6 text-gray-200')}
                                            Buy ticket
                                        </Link>
                                        <Link
                                            className='flex items-center gap-x-5 rounded-lg text-xs sm:text-base font-semibold leading-7 text-gray-300'
                                            href='/booth'
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {getIcon('booth', 'h-5 w-5 sm:h-6 sm:w-6 text-gray-200')}
                                            Apply for a booth
                                        </Link>
                                    </div>
                                    <div className='space-y-4'>
                                        <Link
                                            className='flex items-center gap-x-5 rounded-lg text-xs sm:text-base font-semibold leading-7 text-gray-300'
                                            href='/pitching'
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {getIcon('trophy', 'h-5 w-5 sm:h-6 sm:w-6 text-gray-200')}
                                            Apply for pitching
                                        </Link>
                                    </div>
                                </div>
                                <div className='mt-8'>
                                    <p className='text-sm text-center leading-7 text-gray-400'>
                                        <Link href="https://startup-nights.ch" className="font-bold hover:text-gray-600">Startup Nights</Link> - an event organized by <Link href="https://ec-w.ch" className="font-bold hover:text-gray-600">ECW</Link>
                                    </p>
                                    <div className='flex justify-center space-x-2 mt-4'>
                                        {data.social && data.social.map((item, i: number) => (
                                            <a
                                                key={`${item.title}-${i}`}
                                                href={item.link} target='_blank'
                                                onClick={() => setMobileMenuOpen(false)}
                                                className='flex justify-center rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-400 hover:bg-gray-400/10'
                                            >
                                                <span className="sr-only">{item.title}</span>
                                                <SocialIcon name={item.title} className="h-6 w-6" aria-hidden="true" />
                                            </a>
                                        ))}
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
