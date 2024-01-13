import type { Template } from "tinacms";
import { ColorPickerInput } from "../fields/color";

export const Program = ({ data }) => {
    return (
        <div className={data.background_color ? data.background_color : 'bg-sn-black-light'}>
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-20">
                    <h2 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                        {data.subtitle}
                    </h2>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data.title}
                    </h1>
                </div>

                <iframe className="w-full h-[800px] rounded-xl" src="https://portal.startup-nights.ch/components/28350" />
            </div>
        </div>
    );
};

export const programBlockSchema: Template = {
    name: "program",
    label: "Program",
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

