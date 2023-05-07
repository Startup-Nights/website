import { XMarkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Modal } from './modal'
import Newsletter from '../blocks/newsletter'

export const Banner = ({ data, setOpen }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    // <div className="fixed inset-x-0 bottom-0">
    //   <Modal content={<Newsletter data={{}} />} title={'Sign up for our newsletter'} text={"You'll receive the discount code once the ticket sales starts on 10. Mai."} open={openModal} setOpen={setOpenModal} />

    //   <div className="flex items-center gap-x-6 bg-sn-yellow px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
    //     <p className="text-sm leading-6 text-black">
    //       <a onClick={() => setOpenModal(true)}>
    //         <strong className="font-semibold">Startup Nights 2023</strong>
    //         <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
    //           <circle cx={1} cy={1} r={1} />
    //         </svg>
    //         {data.title}&nbsp;<span aria-hidden="true">&rarr;</span>
    //       </a>
    //     </p>
    //     <div className="flex flex-1 justify-end">
    //       <button type="button" onClick={() => setOpen(false)} className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
    //         <span className="sr-only">Dismiss</span>
    //         <XMarkIcon className="h-5 w-5 text-black" aria-hidden="true" />
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 bg-sn-yellow p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8">
      <Modal content={<Newsletter data={{}} />} title={'Sign up for our newsletter'} text={"You'll receive the discount code once the ticket sales starts on 10. Mai."} open={openModal} setOpen={setOpenModal} />

      <p className="max-w-4xl text-sm leading-6 text-gray-900">
        Get 30% off of your ticket in Mai when signing up for our newsletter. We'll email you the discount code once the ticket sale starts on 10th of Mai.
      </p>
      <div className="flex flex-none items-center gap-x-5">
        <button
          type="button"
          onClick={() => setOpenModal(true)}
          className="rounded-md bg-sn-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sn-black-lightest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Sign me up!
        </button>
        <button type="button" onClick={() => setOpen(false)} className="text-sm font-semibold leading-6 text-sn-black hover:text-sn-black-lightest">
          Close
        </button>
      </div>
    </div>
  )
}


