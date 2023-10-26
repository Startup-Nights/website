import type { Template } from "tinacms";
import { ColorPickerInput } from "../fields/color";
import { useEffect, useState } from "react";
import { Booth } from "../data/booth"
import BoothModal from "./boothmodal";

export const BoothApproved = ({ data }) => {
  const [booths, setBooths] = useState([])
  const [loading, setLoading] = useState(true)

  const [open, setOpen] = useState(false)
  const [booth, setBooth] = useState({
    company: '',
    website: '',
    description: '',
    image: '',
  } as Booth)

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    const response = await fetch('https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-70cb3437-eee1-474d-8ad6-387035b15671/website/sheets', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: '1WX6vvcCJihBJ9tFN-8AixYAyt5i1nSfMeX81gsEEwjs',
        range: '2023',
      }),
    })

    const data = await response.json()
    const booths = data.data
    const filtered: Booth[] = []

    const tmp_categories = ['All']

    // remove head row
    booths.splice(0, 1)

    booths.forEach((booth: any) => {
      const status = booth[39]
      if (status === "Yes" || status === "Not paid yet") {
        // check for duplicates
        booth[8] = encodeURI(booth[8])

        // cleanup website link
        if (!booth[1].includes('http')) {
          booth[1] = 'https://' + booth[1]
        }

        const boothCategories = (booth[41] ? booth[41] : '').split(/[\n.,]+/).map((category: string) => category.trim())
        boothCategories.forEach((element: string) => {
          if (element !== '' && tmp_categories.indexOf(element) === -1) {
            tmp_categories.push(element);
          }
        });

        // convert data
        filtered.push({
          company: booth[0],
          website: booth[1],
          founding_date: booth[2] ? booth[2] : '',
          employees: booth[4] ? booth[4] : '',
          image: booth[8],
          description: booth[5],
          categories: boothCategories,
        })
      }
    })

    setCategories(tmp_categories)
    setLoading(false)
    setBooths(filtered)
    setBooth(filtered[0])
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='bg-white'>
      <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
            {data.subtitle}
          </h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-6xl">
            {data.title}
          </h1>
        </div>

        <div className='flex flex-wrap justify-center space-x-2 mb-20'>
          {categories.map((category: string, i: number) => (
            <a
              key={`department-${i}`}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-3 py-0.5 my-1 text-sm text-gray-600 font-semibold ` +
                `transition-all hover:text-black leading-5 ` +
                `${selectedCategory === category ? 'bg-gray-300 text-gray-800 hover:bg-gray-100' : 'bg-gray-100 hover:bg-gray-200 hover:text-gray-800'}`}>
              {category}
            </a>
          ))}
        </div>

        {loading && (
          <p className="font-bold text-black">Loading data...</p>
        )}

        {!loading && (
          <>
            <BoothModal booth={booth} open={open} setOpen={setOpen} />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
              {booths.filter((booth: Booth) => selectedCategory === 'All' || booth.categories.indexOf(selectedCategory) !== -1).map((booth: Booth, i: number) => (
                <div key={i} className="aspect-[3/2] relative bg-gray-50 rounded-xl flex justify-center items-center p-4 sm:p-6 hover:bg-gray-100">
                  <a className=""
                    onClick={() => {
                      setBooth(booth)
                      setOpen(true)
                    }}
                  >
                    {booth.image === "" && (
                      <p className="text-black font-bold">{booth.company}</p>
                    )}
                    {booth.image !== "" && (
                      <div className='absolute inset-0 p-6 '>
                        <img key={i} src={booth.image} alt={booth.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </>
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

