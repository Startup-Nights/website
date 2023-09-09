import type { Template } from "tinacms";
import { ColorPickerInput } from "../fields/color";
import { useEffect, useState } from "react";

export const BoothApproved = ({ data }) => {
    const [booths, setBooths] = useState([])

    const getData = async () => {
        // save in sheets
        const response = await fetch('https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-70cb3437-eee1-474d-8ad6-387035b15671/website/sheets', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: '1WX6vvcCJihBJ9tFN-8AixYAyt5i1nSfMeX81gsEEwjs',
                range: 'A:AB',
            }),
        })

        const data = await response.json()
        setBooths(data.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={data.background_color ? data.background_color : 'bg-sn-black'}>
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                        {data.subtitle}
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data.title}
                    </h1>
                </div>

                <div className="grid grid-cols-5 gap-12">
                    {booths.map((booth: any, i: number) => (
                        <div className="flex justify-center items-center">
                            <a className="" href={booth[1]} target="_blank">
                                <img key={i} src={booth[8]} alt={booth[0]}
                                    className=""
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const boothApprovedBlockSchema: Template = {
    name: "booth_approved",
    label: "Booth Approved",
    fields: [
        {
            type: "string",
            label: "Subtitle",
            name: "subtitle",
        },
        {
            type: "string",
            label: "Title",
            name: "title",
        },
        {
            type: "string",
            name: "background_color",
            label: "Background color",
            ui: {
                component: ColorPickerInput as any
            }
        },
    ],
};

