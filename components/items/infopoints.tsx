import Link from "next/link";
import { Modal } from "./modal";
import Newsletter from "../blocks/newsletter";
import { useState } from "react";
import Image from "next/image";

export const Infopoints = ({ data }) => {
  return (
    <div className="max-w-xl space-y-4 text-base leading-6 text-gray-500 lg:max-w-none">
      {data?.map((point, i) => (
        <div key={`infopoint-${i}`}>
          {(point.link && point.link !== "") ? (
            <Link href={point?.link} target="_blank" className="block">
              <Content point={point} />
            </Link>
          ) : (
            <ContentWithoutLink point={point} />
          )}
        </div>
      ))}
    </div>
  );
};

const Content = ({ point }) => {
  return (
    <div className="relative bg-sn-black-lightest rounded-3xl p-8 border-2 border-transparent hover:border-white group">
      <div className="absolute invisible -top-3 -right-3 p-2 bg-white rounded-full text-black group-hover:visible">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
             className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </div>
      {point.image && point.image.src && (
        <Image
          className="w-full h-full object-cover rounded-full mb-8"
          src={point.image.src}
          alt={point.image.alt}
          width="0"
          height="0"
          sizes="100vw"
        />
      )}
      <div className="font-semibold text-xl text-gray-300">
        {point?.name}
      </div>
      {point.text && (
        <div className="text-md mt-4 leading-6 text-gray-400">{point?.text}</div>
      )}
    </div>
  );
};

const ContentWithoutLink = ({ point }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative bg-sn-black-lightest rounded-3xl p-8 border-2 border-transparent">
      {point.image && point.image.src && (
        <Image
          className="w-full h-full object-cover rounded-full mb-8"
          src={point.image.src}
          alt={point.image.alt}
          width="0"
          height="0"
          sizes="100vw"
        />
      )}
      <div className="font-semibold text-xl text-gray-300">
        {point?.name}
      </div>
      {point.text && (
        <div className="text-md mt-4 leading-6 text-gray-400">{point?.text}</div>
      )}
      {point.newsletter_cta && (
        <>
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="mt-6 rounded-full transition-all bg-sn-yellow border-2 border-sn-yellow px-4 py-1 text-black hover:bg-sn-yellow-dark hover:border-sn-yellow-dark text-base font-semibold leading-7 sm:text-sm sm:leading-6 tracking-wide"
          >
            {point.newsletter_cta.agree_button}
          </button>

          <Modal
            content={<Newsletter data={{}} />}
            title={point.newsletter_cta.modal_title}
            text={point.newsletter_cta.modal_text}
            open={openModal}
            setOpen={setOpenModal}
          />
        </>
      )}
    </div>
  );
};

export const InfopointsBlockSchema: any = {
  type: "object",
  label: "Infopoints",
  name: "infopoints",
  list: true,
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name"
    },
    {
      type: "string",
      label: "Text",
      name: "text"
    },
    {
      type: "string",
      label: "Link",
      name: "link"
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image"
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string"
        }
      ]
    },
    {
      type: "object",
      label: "Newsletter CTA (temporary)",
      name: "newsletter_cta",
      fields: [
        {
          type: "string",
          label: "Signup button text",
          name: "agree_button"
        },
        {
          type: "string",
          label: "Modal title",
          name: "modal_title"
        },
        {
          type: "string",
          label: "Modal text",
          name: "modal_text"
        }
      ]
    }
  ]
};
