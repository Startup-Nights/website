import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Booth } from "../data/booth"
import { Button } from "../items/button"

const BoothModal = (props: { booth: Booth, open: any, setOpen: any }) => {
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={props.setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-3 text-left shadow-xl transition-all sm:w-full sm:max-w-2xl">
                <div className="absolute right-0 top-0 pr-4 pt-4 block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => props.setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="relative mt-6 flex-1 p-6 lg:p-12">
                  <div className="aspect-[3/2] relative bg-gray-50 rounded-xl flex justify-center items-center p-4 sm:p-6">
                    {props.booth.image === "" && (
                      <p className="text-black font-bold">{props.booth.company}</p>
                    )}
                    {props.booth.image !== "" && (
                      <div className='absolute inset-0 p-6 '>
                        <img src={props.booth.image} alt={props.booth.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                  </div>
                  <div className='max-w-4xl mt-16'>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-6xl">
                      About
                    </h2>
                    <div className='flex flex-wrap justify-start gap-x-2 mt-6'>
                      {props.booth.categories.filter((cat: string) => cat !== '').map((categorie: string, i: number) => (
                        <span
                          key={i}
                          className={`rounded-full px-3 py-0.5 my-1 text-sm text-gray-600 font-semibold ` +
                            `transition-all leading-5 bg-gray-100`}>
                          {categorie}
                        </span>
                      ))}
                    </div>
                    <div className='space-y-2 my-6'>
                      {props.booth.founding_date !== '' && (
                        <p className='text-md italic leading-6 text-gray-600'><span className='font-semibold mr-2'>Founding date:</span> {props.booth.founding_date}</p>
                      )}
                      {props.booth.employees !== '' && (
                        <p className='text-md italic leading-6 text-gray-600'><span className='font-semibold mr-2'>Employees:</span> {props.booth.employees}</p>
                      )}
                    </div>
                    {props.booth.description.split('\n').map((paragraph: string, i: number) => (
                      <p key={i} className="mt-6 text-md leading-6 text-gray-800">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className='mt-12'>
                    <Button link={props.booth.website} text={'Website'} new_tab={true} />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default BoothModal
