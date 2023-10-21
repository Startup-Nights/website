import Image from "next/image"

export const Testimonial = ({ data }) => {
  return (
    <div className="flex items-center">
      <div className="relative rounded-3xl bg-sn-black-light p-12 overflow-hidden">
        <div className='absolute -top-16 -right-16 sm:-top-32 sm:-right-24 lg:-top-36 lg:-right-36 text-sn-yellow z-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
        </div>

        <div className="grid grid-cols-1 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src={data?.image?.src}
              alt={data?.image?.alt}
              className="rounded-full z-10"
              width={140}
              height={140}
            />
          </div>

          <p className="mt-6 text-md leading-6 text-gray-400">{data?.quote}</p>

          <div className="mt-12 text-gray-400">
            <p className="">{data?.name}</p>
            <p className="italic">{data?.position}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const TestimonialBlockSchema: any = {
  type: "object",
  label: "Testimonial",
  name: "testimonial",
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
    },
    {
      type: "string",
      label: "position",
      name: "position",
    },
    {
      type: "string",
      label: "quote",
      name: "quote",
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },

  ],
}

