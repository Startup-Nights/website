import { ExclamationTriangleIcon, PhotoIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { Template } from "tinacms";

enum uploadState {
    None = 0,
    Uploading,
    Error,
    Finished,
}

enum imageType {
    Logo = 'Logo',
    Team = 'Team',
}

class imageDimension {
    name: string;
    width: number;
    height: number;
}

function getImageDimensions(image: imageType): imageDimension[] {
    switch (image) {
        case imageType.Team:
            return [{ name: 'team_small', width: 500, height: 500 }]
        case imageType.Logo:
            return [
                { name: 'logo_small', width: 600, height: 300 },
            ]
        default:
            return [{ name: 'unknown_small', width: 600, height: 300 }]
    }
}

export const Crop = ({ data }) => {
    const checks = [
        { name: 'is a png file', id: 'png-format', checked: false },
        { name: 'has a sensible filename (like startup-nights.png, SEO relevant)', id: 'sensible-filename', checked: false },
        { name: 'has your company in the filename (SEO relevant)', id: 'company-filename', checked: false },
        { name: 'has a sufficient quality (not pixelated, at least 600 x 300 px)', id: 'quality', checked: false },
        { name: 'has a transparent background', id: 'background', checked: false },
    ]

    const [typeOfImage, setTypeOfImage] = useState(imageType.Logo)
    const [checkItems, setCheckItems] = useState(checks)
    const [companyLogoLoading, setCompanyLogoLoading] = useState({
        downloadUrl: [],
        error: "",
        state: uploadState.None,
    });

    const handleUpload = async (event: any) => {
        setCompanyLogoLoading({
            downloadUrl: [],
            error: "",
            state: uploadState.Uploading,
        });
        const file = event.target.files[0];

        // make sure that the file is not too big
        if (file.size > 10 * 1000000) {
            setCompanyLogoLoading({
                downloadUrl: [],
                error:
                    "Logo is too big: " +
                    Math.floor(file.size / 1000000) +
                    " MB instead of max. 10 MB",
                state: uploadState.Error,
            });

            return;
        }

        let uploadName = file.name
        uploadName = uploadName.replace('(', '').replace(')', '').replace(' ', '')

        const response = await fetch("https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-70cb3437-eee1-474d-8ad6-387035b15671/website/spaces", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                filename: uploadName,
            }),
        });

        let data = await response.json();
        if (data.error) {
            console.log(data.error);
        }
        const filename = data.filename

        const uploadResponse = await fetch(data.upload, {
            method: "put",
            headers: {
                "x-amz-acl": "public-read",
                "Content-Type": file.type,
            },
            body: file,
        });

        const urls: string[] = []
        const dimensions = getImageDimensions(typeOfImage)

        for (const dimension of dimensions) {
            console.log('resizing to: ' + JSON.stringify(dimension))

            const resizeResponse = await fetch("https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-70cb3437-eee1-474d-8ad6-387035b15671/website/resize", {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    filename: filename,
                    width: dimension.width,
                    height: dimension.height,
                }),
            })

            data = await resizeResponse.json()
            if (data.error) {
                console.log(data.error);
            }

            urls.push(data.download)
        }

        setCompanyLogoLoading({
            state: uploadState.Finished,
            error: "",
            downloadUrl: urls,
        });
    };

    return (
        <div className="bg-sn-black-light">
            <div className="max-w-5xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-16">
                    <h1 className="mb-12 block text-6xl font-bold tracking-tight text-gray-200 lg:text-6xl">
                        Logo preview
                    </h1>
                    <p className="max-w-2xl mx-auto mt-8 text-left text-base font-regular tracking-normal text-gray-400">
                        In order to make sure that we use the right logo and that it complies with your CI/CD, we ask you to check the preview of your logo first before sending it to us. To make this process as frictionless as possible, the logo also has to comply to a minimal set of rules.
                    </p>
                    <p className="max-w-2xl mx-auto mt-4 text-left text-base font-regular tracking-normal text-gray-400">
                        Once you are happy with the preview, you can simply send us the generated link from the bottom.
                    </p>

                    <div className="mt-6 rounded-3xl bg-sn-black-lightest p-8 text-left max-w-2xl mx-auto">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <ExclamationTriangleIcon
                                    className="h-5 w-5 text-sn-yellow"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="ml-3">
                                <h3 className="font-medium text-gray-200">
                                    About this preview
                                </h3>
                                <p className="mt-2 text-gray-400">
                                    To be very explicit - it will display your logo exactly the way it will show up on the website!
                                    We won't edit or adjust your logo.
                                </p>
                                <p className="mt-2 text-gray-400">
                                    To get an idea how this will be used, you can take a look <Link className="italic underline underline-offset-4 text-sn-yellow" href={'/partner'}>at the partner page</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {companyLogoLoading.state === uploadState.Finished && (
                    <>
                        <div className="max-w-2xl mx-auto">
                            {typeOfImage === imageType.Logo && (
                                <div className="">
                                    <div className="relative group p-8 bg-white rounded-xl border-2 border-gray-200">
                                        <div className="bg-gray-100 p-4 sm:p-8 rounded-xl">
                                            <img
                                                src={companyLogoLoading.downloadUrl[0]}
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {typeOfImage === imageType.Team && (
                                <div className="">
                                    <div className="relative group p-8 bg-white rounded-xl border-2 border-gray-200">
                                        <div className="p-4 sm:p-8 rounded-full">
                                            <img
                                                src={companyLogoLoading.downloadUrl[0]}
                                                className="rounded-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                        <div className="max-w-2xl mx-auto">
                            <p className="mt-12 block text-base font-medium leading-6 text-gray-400">
                                Before using this link, make sure that you are happy with the transparency, the spacing around your logo and in general with the preview. If you are happy, you can use the following link to reference your logo in booth or partner applications. Link to the image:</p>
                            {companyLogoLoading.downloadUrl.map((item) => (
                                <p className="mt-4">
                                    <code className="bg-sn-black-lightest text-sm px-2 py-1 rounded-md leading-8 text-gray-200">
                                        {item}
                                    </code>
                                </p>
                            ))}

                            <p className="mt-12 block text-base font-medium leading-6 text-gray-400">
                                If you are not happy and want to adjust the logo, either click the button below or refresh the page.
                            </p>

                            <button
                                className="mt-6 flex items-center justify-center rounded-full bg-sn-yellow py-1.5 px-3 text-base font-semibold leading-7 sm:text-sm sm:leading-6 text-black hover:bg-sn-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 tracking-wide"
                                onClick={() => {
                                    setCompanyLogoLoading({
                                        state: uploadState.None,
                                        error: "",
                                        downloadUrl: [],
                                    });
                                }}
                            >
                                Change logo
                            </button>
                        </div>

                    </>
                )}

                {companyLogoLoading.state !== uploadState.Finished && (
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-200/25 px-6 py-10">
                        {companyLogoLoading.state === uploadState.Uploading && (
                            <svg
                                className="animate-spin -ml-1 mr-3 h-8 w-8 text-white"
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

                        {(companyLogoLoading.state === uploadState.None ||
                            companyLogoLoading.state === uploadState.Error) && (

                                <div className="text-center">
                                    <PhotoIcon
                                        className="mx-auto h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                    />

                                    <div className="max-w-2xl grid mt-4 text-sm items-baseline leading-6 text-gray-600">
                                        <p className="text-left text-base font-regular tracking-normal text-gray-400">
                                            Quality check; your logo...
                                        </p>
                                        <div className="mx-auto text-left mt-2 text-gray-400">
                                            <ul role="list" className="">
                                                {checkItems.map((check: any, i: number) => (
                                                    <li key={check.id}>
                                                        <div className="flex h-6 items-center">
                                                            <input
                                                                id={check.id}
                                                                name={check.id}
                                                                type="radio"
                                                                className="h-4 w-4 rounded bg-sn-black-lightest border-sn-black-lightest text-sn-yellow-dark focus:ring-sn-yellow-dark"
                                                                checked={checkItems[i].checked}
                                                                onChange={() => {
                                                                    checkItems[i].checked = !checkItems[i].checked
                                                                    setCheckItems([...checkItems])
                                                                }}
                                                            />
                                                            <div className="ml-3 text-sm leading-6">
                                                                <label
                                                                    htmlFor={check.id}
                                                                    className="font-medium text-gray-200"
                                                                >
                                                                    {check.name}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mx-auto text-left mt-2 text-gray-400">
                                            <fieldset className="mt-4">
                                                <legend className="sr-only">Type of image to upload</legend>
                                                <div className="relative grid grid-cols-1 space-y-2 sm:flex sm:space-y-0 sm:items-start sm:space-x-8">
                                                    {[imageType.Logo, imageType.Team].map((image) => (
                                                        <div key={image} className="flex items-center">
                                                            <input
                                                                id={image}
                                                                type="radio"
                                                                checked={image === typeOfImage}
                                                                className="h-4 w-4 bg-sn-black-lightest border-sn-black-lightest text-sn-yellow focus:ring-indigo-600"
                                                                onChange={() => setTypeOfImage(image)}
                                                            />
                                                            <label
                                                                htmlFor={image}
                                                                className="ml-3 block text-sm font-medium leading-6"
                                                            >
                                                                {image}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </fieldset>
                                        </div>

                                        <label
                                            htmlFor="company_logo"
                                            className={
                                                `relative cursor-pointer py-1 px-2 rounded-md bg-sn-black-lightest hover:bg-sn-black-lightest font-semibold mt-6 ${checkItems.filter(check => check.checked).length !== checks.length ? 'text-gray-400 line-through' : 'text-sn-yellow'}`
                                            }
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                disabled={checkItems.filter(check => check.checked).length !== checks.length}
                                                id="company_logo"
                                                name="company_logo"
                                                accept=".png"
                                                multiple={false}
                                                onChange={(event) => handleUpload(event)}
                                                type="file"
                                                className="sr-only"
                                            />
                                        </label>
                                    </div>

                                    <p className="mt-2 text-xs leading-5 text-gray-500">
                                        PNG up to 10MB
                                    </p>
                                    {companyLogoLoading.state === uploadState.Error &&
                                        companyLogoLoading.error !== "" && (
                                            <p className="mt-4 text-xs leading-5 text-red-400">
                                                {companyLogoLoading.error}
                                            </p>
                                        )}
                                </div>
                            )}
                    </div>
                )}
            </div>
        </div>
    )
}

export const cropBlockSchema: Template = {
    name: "crop",
    label: "crop",
    fields: [
        {
            type: "string",
            label: "Title",
            name: "title",
        },
    ],
};

