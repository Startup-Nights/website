import { Fragment, useEffect, useState } from "react";
import type { Template } from "tinacms";
import Link from "next/link";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { Tab, Transition } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import {
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    PlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { ImageUpload, ImageUploadState, UploadState } from "../items/imageupload"

const founderPlaceholder = "Link to LinkedIn profile of founder";

export const Booth = ({ data }) => {
    const [companyImageState, setCompanyImageState] = useState({
        status: UploadState.None,
        error: '',
        downloadUrl: '',
    } as ImageUploadState)

    const [boothImageState, setBoothImageState] = useState({
        status: UploadState.None,
        error: '',
        downloadUrl: '',
    } as ImageUploadState)

    const [err, setErr] = useState(false);
    const [sameBilling, setSameBilling] = useState(true);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState(companyCategories);
    const [otherInterests, setOtherInterests] = useState([]);
    const [accomodation, setAccomodation] = useState(null);
    const [equipment, setEquipment] = useState(null);
    const [regPackage, setRegPackage] = useState(registration_packages[0]);
    const [previous, setPrevious] = useState(null);
    const [founders, setFounders] = useState([founderPlaceholder]);

    const getSelectedCategories = () => {
        const selected = [];
        categories.forEach((item) =>
            item.subcategories.forEach((element) => {
                if (element.selected) {
                    selected.push(element.name);
                }
            })
        );
        return selected;
    };

    const close = () => {
        setSuccess(false);
        setErr(false);
    };

    // https://stackoverflow.com/a/47069615
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true);

        const data = event.target;

        const body: any = {
            company: {
                name: data.company_name.value,
                website: data.company_website.value,
                founding_date: data.company_founding_date.value,
                linkedin: founders,
                employees: data.company_employees.value,
                pitch: data.company_pitch.value,
                categories: getSelectedCategories(),
                additional_categories: data.company_additional_category.value,
                logo: companyImageState.downloadUrl,
                address: {
                    street: data.company_street.value,
                    zip: data.company_zip.value,
                    city: data.company_city.value,
                    country: data.company_country.value,
                },
                address_billing: {},
            },
            contact: {
                firstname: data.contact_first.value,
                lastname: data.contact_last.value,
                email: data.contact_email.value,
                phone: data.contact_phone.value,
                role: data.contact_role.value,
            },
            varia: {
                package: regPackage,
                formats: otherInterests,
                accomodation: accomodation,
                previous_visitor: previous,
                referral: data.referral.value,
                equipment: equipment,
                equipment_image: boothImageState.downloadUrl,
            },
        };

        if (sameBilling) {
            body.company.address_billing = body.company.address;
        } else {
            body.company.address_billing = {
                street: data.billing_street.value,
                zip: data.billing_zip.value,
                city: data.billing_city.value,
                country: data.billing_country.value,
            };
        }

        const response = await fetch(
            "/api/booth",
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }
        );

        const { error } = await response.json();
        setLoading(false);

        if (error) {
            setSuccess(false);
            setErr(true);
        } else {
            setErr(false);
            setSuccess(true);
        }

        // remove error messages after 20 seconds and redirect to the landing
        // page
        setTimeout(() => {
            close();
        }, 20 * 1000);
    };

    useEffect(() => {
        setRegPackage(registration_packages[0]);
    }, []);

    return (
        <div className="bg-sn-black">
            <div className="max-w-5xl mx-auto py-12 px-8 lg:p-24">
                <div>
                    <div className="">
                        <p className="text-md leading-6 text-gray-300">
                            We're excited to offer you the opportunity to showcase your
                            startup at our fair aka Startup World. By showcasing your business
                            in the Startup World, you'll have the chance to network with other
                            like-minded entrepreneurs, meet potential investors, and showcase
                            your products or services to a wider audience. You'll also gain
                            valuable exposure for your brand and potentially even acquire new
                            customers.
                        </p>

                        <p className="mt-6 text-md leading-6 text-gray-300">
                            To apply for a fair booth, simply fill out the form below. Tell us
                            about your company, your products or services, and why you think
                            you'd be a good fit for our event. This will help us get to know
                            you better and determine the best placement for your booth.
                        </p>

                        <div className="mt-6 rounded-3xl bg-sn-black-light p-8">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <InformationCircleIcon
                                        className="h-5 w-5 text-sn-yellow"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="ml-3">
                                    <h3 className="font-medium text-gray-200">
                                        About the application process
                                    </h3>
                                    <p className="mt-2 text-gray-400">
                                        Due to limited space, we curate the applications to ensure
                                        we feature the most promising startups. Our current
                                        selection criteria include high growth potential, a
                                        disruptive approach to problem-solving, and being in an
                                        early stage.
                                    </p>
                                    <p className="mt-2 italic text-gray-400">
                                        Are you not a startup (anymore) and still want to
                                        participate at the event with a booth? Then you should check
                                        out our{" "}
                                        <Link
                                            className="text-sn-yellow underline hover:text-sn-yellow-dark underline-offset-4"
                                            href={"/partner#partner_form"}
                                        >
                                            partner application
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="mt-6 text-md leading-6 text-gray-300">
                            We review applications in batches.
                        </p>

                        <p className="mt-6 text-md leading-6 text-gray-300">
                            We'll get in touch with all the startups that have registered by
                            then.
                        </p>

                        <div className="mt-6 rounded-3xl bg-sn-black-light p-8">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <InformationCircleIcon
                                        className="h-5 w-5 text-sn-yellow"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="ml-3">
                                    <h3 className="font-medium text-gray-200">
                                        Note that you have to buy the tickets for the event
                                        separately
                                    </h3>
                                    <p className="mt-2 text-gray-400">
                                        You can get the tickets{" "}
                                        <Link
                                            href={"https://www.b2match.com/e/startup-nights-2024/sign-up"}
                                            className="text-sn-yellow underline hover:text-sn-yellow-dark underline-offset-4"
                                        >
                                            here
                                        </Link>
                                        . But you might want to apply for the booth first - we'll
                                        send you a little welcome present after your application.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-16">
                        <div className="mt-6 grid grid-cols-1 gap-y-8 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-6">
                                <h3 className="text-xl font-semibold leading-6 text-gray-200">
                                    Booth details
                                </h3>
                            </div>

                            <div className="sm:col-span-6">
                                <Packages
                                    regPackage={regPackage}
                                    setRegPackage={setRegPackage}
                                />
                            </div>

                            <div className="sm:col-span-6">
                                <div className="rounded-3xl bg-sn-black-light p-8">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <InformationCircleIcon
                                                className="h-5 w-5 text-sn-yellow"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="font-medium text-gray-200">
                                                Note that you have to bring your own rollup
                                            </h3>
                                            <p className="mt-2 text-gray-400">
                                                Please note that you'll need to bring your own roll-up banner for the day of the event.
                                                If you don't have one yet, we kindly ask that you arrange to have one made.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                {radiobuttons(
                                    "Equipment",
                                    "equipment",
                                    [
                                        {
                                            id: "equipment-own",
                                            title: "We'll bring our own equipment",
                                        },
                                        { id: "equipment-not-sure", title: "We are not sure yet" },
                                    ],
                                    equipment,
                                    setEquipment
                                )}
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="equipment_description"
                                    className="block text-sm font-medium leading-6"
                                >
                                    If you bring your own equipment, please describe what you'll
                                    bring. In case you have special equipment like heavy machinery
                                    please contact us:
                                    <a
                                        className="mx-2 text-sn-yellow underline hover:text-sn-yellow-dark underline-offset-4"
                                        href="mailto:world@startup-nights.ch"
                                    >world@startup-nights.ch</a>
                                </label>
                                <div className="mt-4">
                                    <textarea
                                        required={false}
                                        id="equipment_description"
                                        name="equipment_description"
                                        placeholder="We'll bring along x + y..."
                                        rows={3}
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="equipment_image"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Could you please share a photo, if possible, that showcases the idea of how your booth looks?
                                </label>

                                <div className="mt-2 mb-4 text-sm font-medium leading-6 text-gray-400">

                                    <p className="">Please make sure that the image:</p>
                                    <ul role="list" className="mt-2 list-disc pl-5">
                                        <li>is a PNG file</li>
                                        <li>is a good quality so that we get an understanding of your idea</li>
                                    </ul>
                                </div>

                                <ImageUpload state={boothImageState} setState={setBoothImageState} name={'Booth preview'} single={true} resize={false} />
                            </div>


                            <div className="sm:col-span-6 mt-16">
                                <h3 className="text-xl font-semibold leading-6 text-gray-200">
                                    Company details
                                </h3>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="company_name"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Company name
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Muster AG"
                                        name="company_name"
                                        id="company_name"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="company_website"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Company website
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="https://muster.ch"
                                        name="company_website"
                                        id="company_website"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="company_founding_date"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Founding date
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="date"
                                        name="company_founding_date"
                                        id="company_founding_date"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="company_employees"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Number of employees
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="5"
                                        name="company_employees"
                                        id="company_employees"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="company_pitch"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Company / product pitch
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        required={true}
                                        id="company_pitch"
                                        name="company_pitch"
                                        placeholder="Write a few sentences about the company or product in an elevator pitch style, highlighting your values, mission, vision, and sustainability as focal points."
                                        rows={3}
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="founder-linkedin-0"
                                    className="block text-sm font-medium leading-6"
                                >
                                    LinkedIn profile of the founder(s)
                                </label>
                                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {founders.map((founder, i) => (
                                        <div
                                            key={`founder-profile-${i}`}
                                            className="flex space-x-4 items-center"
                                        >
                                            <input
                                                type="text"
                                                placeholder={founder}
                                                name={`founder-linkedin-${i}`}
                                                id={`founder-linkedin-${i}`}
                                                onChange={(event) => {
                                                    founders[i] = event.target.value;
                                                    setFounders([...founders]);
                                                }}
                                                className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                            />

                                            {i === founders.length - 1 && (
                                                <button
                                                    className="p-1 bg-sn-yellow rounded-full text-black"
                                                    onClick={() => {
                                                        founders.push(
                                                            "Link to LinkedIn profile of founder"
                                                        );
                                                        setFounders([...founders]);
                                                    }}
                                                >
                                                    <PlusIcon className="h-5 w-5" />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="company_street"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Musterstrasse"
                                        name="company_street"
                                        id="company_street"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="company_zip"
                                    className="block text-sm font-medium leading-6"
                                >
                                    ZIP / postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="8400"
                                        name="company_zip"
                                        id="company_zip"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="company_city"
                                    className="block text-sm font-medium leading-6"
                                >
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Winterthur"
                                        name="company_city"
                                        id="company_city"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="company_country"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Country
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Switzerland"
                                        name="company_country"
                                        id="company_country"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <p className="block text-sm font-medium leading-6 mb-2">
                                    Company categories
                                </p>
                                <p className="mt-6 mb-4 text-sm leading-6 text-gray-300">
                                    Selected:{" "}
                                    <span className="ml-2 italic">
                                        {getSelectedCategories().length > 0
                                            ? getSelectedCategories().join(", ")
                                            : "none"}
                                    </span>
                                </p>
                                <Categories
                                    categories={categories}
                                    setCategories={setCategories}
                                />
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="company_additional_category"
                                    className="block text-sm font-medium leading-6"
                                >
                                    If your category is not on the list, please note it here:
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={false}
                                        type="text"
                                        placeholder="Additional company categories..."
                                        name="company_additional_category"
                                        id="company_additional_category"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="company_logo"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Company logo
                                </label>
                                <div className="mt-2 mb-4 text-sm font-medium leading-6 text-gray-400">
                                    <p className="">Please make sure that the image:</p>
                                    <ul role="list" className="mt-2 list-disc pl-5">
                                        <li>is a PNG file</li>
                                        <li>has no background color</li>
                                        <li>can be used on light and dark backgrounds</li>
                                        <li>is at least 600px x 300px in size (that's more or less the size that will be used)</li>
                                    </ul>
                                </div>
                                <ImageUpload state={companyImageState} setState={setCompanyImageState} name={'Company Logo'} single={false} resize={true} />
                            </div>


                            <div className="sm:col-span-6 mt-16">
                                <h3 className="text-xl font-semibold leading-6 text-gray-200">
                                    Contact person
                                </h3>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="contac_first"
                                    className="block text-sm font-medium leading-6"
                                >
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="contact_first"
                                        id="contact_first"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="contact_last"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Muster"
                                        name="contact_last"
                                        id="contact_last"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="contact_email"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="email"
                                        placeholder="max@muster.ag"
                                        name="contact_email"
                                        id="contact_email"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="contact_phone"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Phone number
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="Max"
                                        name="contact_phone"
                                        id="contact_phone"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="contact_role"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Role / position
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={true}
                                        type="text"
                                        placeholder="CEO"
                                        name="contact_role"
                                        id="contact_role"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6 mt-16">
                                <h3 className="text-xl font-semibold leading-6 text-gray-200">
                                    Other interests
                                </h3>
                            </div>

                            <div className="sm:col-span-6">
                                <p className="block text-sm font-medium leading-6">
                                    Select other formats that you are interested in
                                </p>

                                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-2 md:space-y-0">
                                    {otherInterest.map((interest, i) => (
                                        <li key={interest} className="relative flex items-start">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id={interest}
                                                    aria-describedby="comments-description"
                                                    name={interest}
                                                    type="checkbox"
                                                    onClick={() => {
                                                        otherInterests.push(interest);
                                                        setOtherInterests(otherInterests);
                                                    }}
                                                    className="h-4 w-4 rounded bg-sn-black-lightest border-sn-black-lightest text-sn-yellow-dark focus:ring-sn-yellow-dark"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm leading-6">
                                                <label
                                                    htmlFor={interest}
                                                    className="font-medium text-gray-200"
                                                >
                                                    {interest}
                                                </label>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="sm:col-span-6 mt-16">
                                <h3 className="text-xl font-semibold leading-6 text-gray-200">
                                    Billing address
                                </h3>
                            </div>

                            <div className="sm:col-span-6">
                                <div className="relative flex items-start">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="same_billing_address"
                                            aria-describedby="comments-description"
                                            name="same_billing_address"
                                            type="checkbox"
                                            checked={sameBilling}
                                            onChange={() => {
                                                setSameBilling(!sameBilling);
                                            }}
                                            className="h-4 w-4 rounded bg-sn-black-lightest border-sn-black-lightest text-sn-yellow-dark focus:ring-sn-yellow-dark"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm leading-6">
                                        <label
                                            htmlFor="same_billing_address"
                                            className="font-medium text-gray-200"
                                        >
                                            Same billing address as company address
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {!sameBilling && (
                                <>
                                    <div className="sm:col-span-6">
                                        <label
                                            htmlFor="billing_street"
                                            className="block text-sm font-medium leading-6"
                                        >
                                            Street address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required={true}
                                                type="text"
                                                placeholder="Musterstrasse"
                                                name="billing_street"
                                                id="billing_street"
                                                className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="billing_zip"
                                            className="block text-sm font-medium leading-6"
                                        >
                                            ZIP / postal code
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required={true}
                                                type="text"
                                                placeholder="8400"
                                                name="billing_zip"
                                                id="billing_zip"
                                                className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="billing_city"
                                            className="block text-sm font-medium leading-6"
                                        >
                                            City
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required={true}
                                                type="text"
                                                placeholder="Winterthur"
                                                name="billing_city"
                                                id="billing_city"
                                                className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="billing_country"
                                            className="block text-sm font-medium leading-6"
                                        >
                                            Country
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                required={true}
                                                type="text"
                                                placeholder="Switzerland"
                                                name="billing_country"
                                                id="billing_country"
                                                className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className="sm:col-span-6 mt-16">
                                <h3 className="text-xl font-semibold leading-6 text-gray-200">
                                    Additional information
                                </h3>
                            </div>

                            <div className="sm:col-span-6">
                                {radiobuttons(
                                    "Do you need support booking accommodation?",
                                    "accomodation",
                                    [
                                        { id: "accomodation-no", title: "no" },
                                        { id: "accomodation-yes", title: "yes" },
                                    ],
                                    accomodation,
                                    setAccomodation
                                )}
                            </div>

                            <div className="sm:col-span-6">
                                {radiobuttons(
                                    "Have you been at previous Startup Nights?",
                                    "previous_visitor",
                                    [
                                        { id: "previous-no", title: "no" },
                                        { id: "previous-visitor", title: "yes, as a visitor" },
                                        { id: "previous-exhibitor", title: "yes, as an exhibitor" },
                                    ],
                                    previous,
                                    setPrevious
                                )}
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="referral"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Referral (Person, Organisation)
                                </label>
                                <div className="mt-2">
                                    <input
                                        required={false}
                                        type="text"
                                        placeholder="Who is promoting you?"
                                        name="referral"
                                        id="referral"
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    htmlFor="remarks"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Remarks and notes
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        required={false}
                                        id="remarks"
                                        name="remarks"
                                        placeholder="Please note if you have any remarks"
                                        rows={3}
                                        className="w-full rounded-xl border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sn-yellow focus:ring-sn-yellow sm:text-sm sm:leading-6"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 rounded-xl">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-xl bg-sn-yellow py-1.5 px-3 text-base font-semibold leading-7 sm:text-sm sm:leading-6 text-black hover:bg-sn-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 tracking-wide"
                                >
                                    {loading && (
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                    )}
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div
                aria-live="assertive"
                className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-40"
            >
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                    <Transition
                        show={err}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-sn-black ring-2 ring-red-400 shadow-xl shadow-red-900">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <ExclamationCircleIcon
                                            className="h-6 w-6 text-red-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-gray-200">
                                            Shoot! Something went wrong.
                                        </p>
                                        <p className="mt-1 text-sm text-gray-400">
                                            Sorry about that. Please shoot us an email{" "}
                                            <a
                                                className="italic text-sn-yellow underline underline-offset-4"
                                                href="mailto:hello@startup-nights.ch"
                                            >
                                                here
                                            </a>{" "}
                                            and we'll get in touch with you.
                                        </p>
                                    </div>
                                    <div className="ml-4 flex flex-shrink-0">
                                        <button
                                            type="button"
                                            className="inline-flex rounded-md bg-sn-black-lightest text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={() => {
                                                close();
                                            }}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>

                    <Transition
                        show={success}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-sn-black ring-2 ring-green-400 shadow-xl shadow-green-900">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <CheckCircleIcon
                                            className="h-6 w-6 text-green-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-gray-200">
                                            Whoop-whoop!
                                        </p>
                                        <p className="mt-1 text-sm text-gray-400">
                                            Thanks for your application. We'll get in touch soon.
                                            Pinky-promise.
                                        </p>
                                    </div>
                                    <div className="ml-4 flex flex-shrink-0">
                                        <button
                                            type="button"
                                            className="inline-flex rounded-md bg-sn-black-lightest text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={() => {
                                                close();
                                            }}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    );
};

export const boothBlockSchema: Template = {
    name: "booth_registration",
    label: "Booth registration",
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
    ],
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Categories = ({ categories, setCategories }) => {
    return (
        <div className="w-full">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-sn-black-light p-1">
                    {companyCategories.map((category) => (
                        <Tab
                            key={category.name}
                            className={({ selected }) =>
                                classNames(
                                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                                    selected
                                        ? "bg-sn-black-lightest text-sn-yellow shadow"
                                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                )
                            }
                        >
                            {category.name}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {companyCategories.map((category, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames("rounded-xl bg-sn-black-light p-3")}
                        >
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {category.subcategories.map((cat, i) => (
                                    <li key={i} className="relative flex items-start">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id={`category-${idx}-${i}`}
                                                aria-describedby="comments-description"
                                                name={`category-${idx}-${i}`}
                                                type="checkbox"
                                                className="h-4 w-4 rounded bg-sn-black-lightest border-sn-black-lightest text-sn-yellow-dark focus:ring-sn-yellow-dark"
                                                checked={categories[idx].subcategories[i].selected}
                                                onChange={() => {
                                                    categories[idx].subcategories[i].selected =
                                                        !categories[idx].subcategories[i].selected;
                                                    setCategories([...categories]);
                                                }}
                                            />
                                        </div>
                                        <div className="ml-3 text-sm leading-6">
                                            <label
                                                htmlFor={`category-${idx}-${i}`}
                                                className="font-medium text-gray-200"
                                            >
                                                {cat.name}
                                            </label>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

interface RadioButton {
    id: string;
    title: string;
}

const radiobuttons = (
    title: string,
    name: string,
    data: RadioButton[],
    state,
    setState
) => {
    useEffect(() => {
        setState(data[0].id);
    }, []);

    return (
        <div>
            <label className="text-sm font-medium leading-6">{title}</label>
            <fieldset className="mt-4">
                <legend className="sr-only">{title}</legend>
                <div className="relative grid grid-cols-1 space-y-2 sm:flex sm:space-y-0 sm:items-start sm:space-x-8">
                    {data.map((notificationMethod, i) => (
                        <div key={notificationMethod.id} className="flex items-center">
                            <input
                                id={notificationMethod.id}
                                name={name}
                                type="radio"
                                checked={notificationMethod.id === state}
                                className="h-4 w-4 bg-sn-black-lightest border-sn-black-lightest text-sn-yellow focus:ring-indigo-600"
                                onChange={() => setState(notificationMethod.id)}
                            />
                            <label
                                htmlFor={notificationMethod.id}
                                className="ml-3 block text-sm font-medium leading-6"
                            >
                                {notificationMethod.title}
                            </label>
                        </div>
                    ))}
                </div>
            </fieldset>
        </div>
    );
};

const Packages = ({ regPackage, setRegPackage }) => {
    return (
        <RadioGroup value={regPackage} onChange={setRegPackage}>
            <RadioGroup.Label className="block text-sm font-medium leading-6">
                Select your booth package
            </RadioGroup.Label>

            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                {registration_packages.map((mailingList, i) => (
                    <RadioGroup.Option
                        key={mailingList.id}
                        value={mailingList}
                        disabled={mailingList.disabled}
                        className={({ checked, active }) =>
                            classNames(
                                active ? "border-2 border-sn-yellow" : "border-2 border-gray-600",
                                checked ? "border-sn-yellow" : "border-gray-600",
                                mailingList.disabled ? '' : 'cursor-pointer',
                                "relative flex rounded-3xl p-8 shadow-sm bg-sn-black-lightest"
                            )
                        }
                    >
                        {({ checked, active }) => (
                            <div className="overflow-hidden p-0">
                                <span className="flex flex-1 mb-8">
                                    <span className="flex flex-col z-10">
                                        <RadioGroup.Label
                                            as="span"
                                            className="block text-lg font-bold text-gray-200"
                                        >
                                            {mailingList.icon} <span className="mx-1"></span>{" "}
                                            {mailingList.title}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description
                                            as="span"
                                            className="mt-4 flex items-center text-sm text-gray-200"
                                        >
                                            <div className="flex flex-wrap">
                                                {mailingList.description}
                                            </div>
                                        </RadioGroup.Description>
                                        <RadioGroup.Description
                                            as="span"
                                            className="mt-4 text-sm font-medium text-gray-400"
                                        >
                                            {mailingList.price}
                                        </RadioGroup.Description>
                                    </span>
                                </span>
                                <CheckCircleIcon
                                    className={classNames(
                                        !checked ? "invisible" : "",
                                        "h-5 w-5 text-sn-yellow absolute top-5 right-5"
                                    )}
                                    aria-hidden="true"
                                />

                                {!mailingList.disabled && (
                                    <>
                                        <span
                                            className={classNames(
                                                "pointer-events-none absolute -inset-px rounded-3xl"
                                            )}
                                            aria-hidden="true"
                                        />

                                        {mailingList.note && (
                                            <div className={'absolute overflow-hidden lef-0 w-full right-0 bottom-0 flex ' +
                                                'justify-center items-center gap-x-4 py-2 px-4 pl-3 rounded-3xl rounded-t-none ' +
                                                'bg-gradient-to-r from-rose-700 to-red-700'}>
                                                <ExclamationTriangleIcon className="h-6 w-5" />
                                                <span className="font-semibold">{mailingList.note}</span>
                                            </div>
                                        )}
                                    </>
                                )}

                                {mailingList.disabled && (
                                    <div className={'absolute overflow-hidden lef-0 w-full right-0 bottom-0 flex ' +
                                        'justify-center items-center gap-x-4 py-2 px-4 pl-3 rounded-3xl rounded-t-none ' +
                                        'bg-gradient-to-r from-rose-700 to-red-700'}>
                                        <ExclamationTriangleIcon className="h-6 w-5" />
                                        <span className="font-semibold">Sold out!</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    );
};

const companyCategories = [
    {
        name: "Autonomous Systems",
        subcategories: [
            { name: "Artificial Intelligence", selected: false },
            { name: "Augmented & Virtual Reality", selected: false },
            { name: "Data Mining & Machine Learning", selected: false },
            { name: "Mobility Robotics", selected: false },
            { name: "Smart Buildings", selected: false },
            { name: "Smart Cities", selected: false },
            { name: "Supply Chain & Logistics", selected: false },
        ],
    },
    {
        name: "Health Tech",
        subcategories: [
            { name: "Biotech", selected: false },
            { name: "Digital Health", selected: false },
            { name: "Healthcare", selected: false },
            { name: "Medtech & Pharma", selected: false },
            { name: "Wearables", selected: false },
            { name: "Wellbeing", selected: false },
        ],
    },
    {
        name: "Sustainable Tech",
        subcategories: [
            { name: "Agricultural Tech", selected: false },
            { name: "CleanTech", selected: false },
            { name: "Energy Transition", selected: false },
            { name: "Environmental Economics", selected: false },
            { name: "Foodtech", selected: false },
            { name: "Micro- / Nanoech", selected: false },
            { name: "New Materials", selected: false },
            { name: "Social Entrepreneurship", selected: false },
            { name: "Sustainable Living", selected: false },
        ],
    },
    {
        name: "ICT & Services",
        subcategories: [
            { name: "FinTech", selected: false },
            { name: "Funding / Alternative Finance", selected: false },
            { name: "InsurTech", selected: false },
            { name: "LegalTech", selected: false },
            { name: "Payments", selected: false },
            { name: "PropTech", selected: false },
            { name: "RegTech", selected: false },
            { name: "Security & Privacy", selected: false },
            { name: "Art & Culture", selected: false },
            { name: "Consumer Electronics", selected: false },
            { name: "E-Commerce & Online Marketplaces", selected: false },
            { name: "Education", selected: false },
            { name: "Enterprise Software", selected: false },
            { name: "Gaming", selected: false },
            { name: "Industrial Internet & IoT", selected: false },
            { name: "Lifestyle & Fashion", selected: false },
            { name: "Marketing & AdTech", selected: false },
            { name: "Mobile", selected: false },
            { name: "Hardware & Software", selected: false },
            { name: "News & Entertainment", selected: false },
            { name: "Social & Communities", selected: false },
            { name: "Sports & Performance", selected: false },
            { name: "Travel & Tourism", selected: false },
        ],
    },
];

const registration_packages = [
    {
        id: 1,
        icon: "✈️",
        title: "Paperplane",
        price: "CHF 399",
        disabled: false,
        description: "2x2m area with a bar table and 230V outlet",
        note: "",
    },
    {
        id: 2,
        icon: "🚀",
        title: "Rocket",
        price: "CHF 599",
        disabled: false,
        description: "3x3m area with a bar table and 230V outlet",
        note: "",
    },
];

const otherInterest = [
    "Pitching competition",
    "Startup inovation awards",
    "Matching with keynote speaker 1:1",
];
