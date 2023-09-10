import type { Template } from "tinacms";
import { ColorPickerInput } from "../fields/color";
import { useEffect, useState } from "react";

interface Booth {
    company: string
    website: string
    image: string
    categories: string[]
}

export const BoothApproved = ({ data }) => {
    const [booths, setBooths] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        // save in sheets
        const response = await fetch('https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-70cb3437-eee1-474d-8ad6-387035b15671/website/sheets', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: '1WX6vvcCJihBJ9tFN-8AixYAyt5i1nSfMeX81gsEEwjs',
                range: 'A:AL',
            }),
        })

        const data = await response.json()
        const booths = data.data
        const filtered: Booth[] = []

        // remove head row
        booths.splice(0, 1)

        booths.forEach((booth: any) => {
            if (booth[37] !== "NO") {
                // check for duplicates
                if (booths.filter((b: any) => b[0] === booth[0]).length === 1) {
                    booth[8] = encodeURI(booth[8])

                    // cleanup website link
                    if (!booth[1].includes('http')) {
                        booth[1] = 'https://' + booth[1]
                    }

                    const boothCategories = booth[6].split('\n')

                    // convert data
                    filtered.push({
                        company: booth[0],
                        website: booth[1],
                        image: booth[8],
                        categories: boothCategories,
                    })
                }
            }
        })

        setLoading(false)
        setBooths(filtered)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='bg-white'>
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                        {data.subtitle}
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-6xl">
                        {data.title}
                    </h1>
                </div>

                {loading && (
                    <p className="font-bold text-black">Loading data...</p>
                )}

                {!loading && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
                        {booths.map((booth: Booth, i: number) => (
                            <div className="aspect-[3/2] relative bg-gray-100 rounded-xl flex justify-center items-center p-4 hover:bg-gray-200">
                                <a className="" href={booth.website} target="_blank">
                                    {booth.image === "" && (
                                        <p className="text-black font-bold">{booth.company}</p>
                                    )}
                                    {booth.image !== "" && (
                                        <div className='absolute inset-0 p-4 '>
                                            <img key={i} src={booth.image} alt={booth.company}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    )}
                                </a>
                            </div>
                        ))}
                    </div>
                )}
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

