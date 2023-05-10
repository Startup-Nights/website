import { useState } from 'react'
import { Modal } from './modal'
import Newsletter from '../blocks/newsletter'

export const Banner = ({ data, setOpen }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='fixed inset-x-0 z-10 bottom-0 bg-sn-yellow py-6 ring-1 ring-gray-900/10'>
      <div className="max-w-7xl mx-auto px-8 lg:px-24 flex flex-col justify-between gap-x-8 gap-y-4 md:flex-row md:items-center ">
        <Modal
          content={<Newsletter data={{}} />}
          title={data.modal_title}
          text={data.modal_text}
          open={openModal}
          setOpen={setOpenModal}
        />

        <p className="max-w-4xl text-sm leading-6 text-gray-900">
          {data.text}
        </p>
        <div className="flex flex-none items-center gap-x-3">
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="rounded-full transition-all bg-sn-black border-2 border-sn-black px-4 py-1 text-sn-yellow hover:bg-sn-black-lightest hover:border-sn-black-lightest text-base font-semibold leading-7 sm:text-sm sm:leading-6 tracking-wide"
          >
            {data.agree_button}
          </button>
          <button 
          type="button" 
          onClick={() => setOpen(false)} 
          className="rounded-full transition-all border-2 border-sn-black hover:bg-sn-black px-4 py-1 text-black hover:text-sn-yellow text-base font-semibold leading-7 sm:text-sm sm:leading-6 tracking-wide"
          >
            {data.close_button}
          </button>
        </div>
      </div>
    </div>
  )
}


