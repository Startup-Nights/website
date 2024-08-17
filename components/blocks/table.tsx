import type { Template } from "tinacms";
import { ColorPickerInput } from "../fields/color";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Table({ data }) {
    return (
        <div className={data.background_color ? data.background_color : 'bg-sn-black'}>
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center">
                    <h3 className="text-base font-medium leading-7 text-sn-yellow uppercase tracking-widest">
                        {data?.subtitle}
                    </h3>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                        {data?.title}
                    </h2>
                </div>

                <div className="-mx-4 mt-10 ring-1 ring-gray-600 sm:mx-0 rounded-md sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-400">
                        <tbody>
                            {data?.list?.map((plan, planIdx) => (
                                <tr key={plan.id}>
                                    <td
                                        className={classNames(
                                            planIdx === 0 ? '' : 'border-t border-transparent',
                                            'relative py-4 pl-4 pr-3 text-sm sm:pl-6',
                                        )}
                                    >
                                        <div className="font-medium ">
                                            {plan.title}
                                        </div>
                                        {planIdx !== 0 ? <div className="absolute -top-px left-6 right-0 h-px bg-gray-600" /> : null}
                                    </td>
                                    <td
                                        className={classNames(
                                            planIdx === 0 ? '' : 'border-t border-transparent',
                                            'relative py-3.5 pl-3 pr-4 text-sm font-medium sm:pr-6',
                                        )}
                                    >
                                        <ul className="space-y-1 text-gray-400">
                                            {plan?.list_items?.map((item, i) => (
                                                <li key={i} className="ml-4 list-disc">{item}</li>
                                            ))}
                                        </ul>
                                        {planIdx !== 0 ? <div className="absolute -top-px left-0 right-6 h-px bg-gray-600" /> : null}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export const tableBlockSchema: Template = {
    name: "table",
    label: "Table",
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
            name: "list",
            label: "List items",
            type: "object",
            list: true,
            fields: [
                {
                    type: "string",
                    label: "Time",
                    name: "title",
                },
                {
                    type: "string",
                    label: "Items",
                    name: "list_items",
                    list: true,
                },
            ]
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
