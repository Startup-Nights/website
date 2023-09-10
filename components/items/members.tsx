import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export const Members = ({ data }) => {
    return (
        <div className="">
            <ul role="list" className="grid gap-4 grid-cols-2 sm:gap-4 xl:grid-cols-3">
                {data.map((person: any, i: number) => (
                    <li key={i} className="relative transition-all">
                        <div className="grid grid-cols-1 align-top h-full gap-x-6 p-4 bg-sn-black-lightest border-2 rounded-3xl border-transparent">
                            <div className="text-center">
                                <Image
                                    src={person.src ? person.src : "/user.svg"}
                                    alt={person?.name ? person.name : "unknown"}
                                    className="rounded-full mx-auto bg-sn-black-light"
                                    width={data?.diameter ? data.diameter : 100}
                                    height={data?.diameter ? data.diameter : 100}
                                />
                                <h3 className="text-sm font-semibold leading-7 mt-4 tracking-tight">
                                    {person?.name}
                                </h3>
                                <p className="text-sm font-semibold leading-6 mt-2 text-gray-400">
                                    {person?.position}
                                </p>
                            </div>
                        </div>
                    </li>
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
