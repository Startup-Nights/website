import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';
import { Fragment, } from 'react'

export default function Modal({ isOpen, setIsOpen, position }: any) {
    const router = useRouter()

    function closeModal() {
        setIsOpen(false);
    }

    function party() {
        router.push('/party')
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 md:p-12 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-3xl font-bold leading-6 text-gray-900">
                                        {position.title}
                                    </Dialog.Title>
                                    <div className="mt-6">
                                        {position.description ? (
                                            <p className="">
                                                {position.description}
                                            </p>
                                        ) : (<span></span>)}

                                        <div className='py-6'>
                                            <h3 className='mb-4 text-2xl'>Deine Aufgaben:</h3>
                                            <ul role="list" className="ml-5 list-disc">
                                                {position.tasks && position.tasks.map((task: string, i: number) => (
                                                    <li key={i} className="">
                                                        <p className="text-sm font-normal text-gray-800">
                                                            {task}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className='py-6'>
                                            <h3 className='mb-4 text-2xl'>Deine Qualifikation:</h3>
                                            <ul role="list" className="ml-5 list-disc">
                                                {position.qualifications && position.qualifications.map((task: string, i: number) => (
                                                    <li key={i} className="">
                                                        <p className="text-sm font-normal text-gray-800">
                                                            {task}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-4 space-x-2">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                                            onClick={closeModal}
                                        >
                                            Schliessen
                                        </button>
                                        <a
                                            href={position.link}
                                            target='blank'
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                                            onClick={party}
                                        >
                                            Count me in 🥳
                                        </a>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
