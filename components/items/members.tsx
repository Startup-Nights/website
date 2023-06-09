import Image from "next/image"
import { SocialIcon } from "./social"
import Link from "next/link"

export const Members = ({ data }) => {
    return (
        <div className="">
            <ul role="list" className="grid gap-4 grid-cols-2 sm:gap-4 xl:col-span-2">
                {data.map((person: any) => (
                    <li className="group relative transition-all rounded-3xl overflow-hidden bg-sn-black-lightest">
                        <div className='absolute inset-0'>
                            <Image
                                className="w-full h-full object-cover"
                                src={person?.stage === 'seed' ? '/user.svg' : '/tina.svg'}
                                alt={'background pitching competition'}
                                width="0"
                                height="0"
                                sizes="100vw"
                            />
                        </div>

                        <div className="relative grid grid-cols-1 text-center bg-sn-black-lightest/90 gap-x-6 p-4">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src={person.src ? person.src : '/user.svg'}
                                    alt={person?.name ? person.name : 'unknown'}
                                    className="rounded-full"
                                    width={data?.diameter ? data.diameter : 100}
                                    height={data?.diameter ? data.diameter : 100}
                                />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight">{person?.name}</h3>
                                <p className="text-sm font-semibold leading-6 text-gray-400">{person?.position}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

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
            type: "string"
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
            type: "string"
        }
    ]
}