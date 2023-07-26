import Image from "next/image";
import { SocialIcon } from "./social";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export const Members = ({ data }) => {
  return (
    <div className="">
      <ul role="list" className="grid gap-4 grid-cols-2 sm:gap-4 xl:col-span-2">
        {data.map((person: any) => (
          <Link
            key={person?.name}
            href={person.linkedin ? person.linkedin : "/"}
            target="_blank"
            className="block group"
          >
            <li className="group relative transition-all">
              <div className="absolute invisible -top-3 -right-3 p-2 bg-white rounded-full text-black group-hover:visible">
                <ArrowTopRightOnSquareIcon
                  className="w-5 h-5"
                  strokeWidth={2}
                />
              </div>

              <div className="grid grid-cols-1 text-center gap-x-6 p-4 bg-sn-black-lightest border-2 rounded-3xl border-transparent group-hover:border-gray-200">
                <div className="flex justify-center mb-6">
                  <Image
                    src={person.src ? person.src : "/user.svg"}
                    alt={person?.name ? person.name : "unknown"}
                    className="rounded-full bg-sn-black-light"
                    width={data?.diameter ? data.diameter : 100}
                    height={data?.diameter ? data.diameter : 100}
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight">
                    {person?.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-gray-400">
                    {person?.position}
                  </p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export const MembersBlockSchema: any = {
  type: "object",
  label: "Members",
  name: "members",
  list: true,
  fields: [
    {
      label: "Name",
      name: "name",
      type: "string",
    },
    {
      label: "Position",
      name: "position",
      type: "string",
    },
    {
      label: "LinkedIn",
      name: "linkedin",
      type: "string",
    },
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
    {
      name: "stage",
      label: "Stage",
      type: "string",
    },
  ],
};
