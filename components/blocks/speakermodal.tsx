import { Dialog, Transition } from '@headlessui/react'
import { Fragment, } from 'react'
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export default function SpeakerModal({ isOpen, setIsOpen, speaker }: any) {
    function closeModal() {
        setIsOpen(false);
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
                        <div className="flex h-full w-full items-center justify-center text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full h-full transform overflow-hidden bg-slate-900 p-6 text-left transition-all text-slate-100">

                                    <div className='z-20 grid grid-cols-2'>
                                        <div>
                                            <img className="w-full h-full object-cover" src={speaker?.image?.src} />
                                        </div>
                                        <div className='px-16'>
                                            <h2 className='h2'>
                                                {speaker?.name}
                                            </h2>
                                            <h3 className='h3'>
                                                {speaker?.position}
                                            </h3>

                                            <div className="content-block">
                                                <TinaMarkdown content={speaker?.description} />
                                            </div>
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
