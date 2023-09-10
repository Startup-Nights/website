import { PhotoIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Template } from "tinacms";

enum uploadState {
    None = 0,
    Uploading,
    Error,
    Finished,
}

export const Crop = ({ data }) => {
    const [companyLogoLoading, setCompanyLogoLoading] = useState({
        downloadUrl: "",
        error: "",
        state: uploadState.None,
    });

    const handleUpload = async (event: any) => {
        setCompanyLogoLoading({
            downloadUrl: "",
            error: "",
            state: uploadState.Uploading,
        });
        const file = event.target.files[0];

        // make sure that the file is not too big
        if (file.size > 10 * 1000000) {
            setCompanyLogoLoading({
                downloadUrl: "",
                error:
                    "Logo is too big: " +
                    Math.floor(file.size / 1000000) +
                    " MB instead of max. 10 MB",
                state: uploadState.Error,
            });

            return;
        }

        const response = await fetch("https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-70cb3437-eee1-474d-8ad6-387035b15671/website/spaces", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                filename: file.name,
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

        const resizeResponse = await fetch("https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-70cb3437-eee1-474d-8ad6-387035b15671/website/resize", {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ filename: filename }),
        })

        data = await resizeResponse.json()
        if (data.error) {
            console.log(data.error);
        }

        setCompanyLogoLoading({
            state: uploadState.Finished,
            error: "",
            downloadUrl: data.download,
        });
    };

    return (
        <div className="bg-sn-black-light">
            <div className="max-w-5xl mx-auto py-12 px-8 lg:p-24">
                <div className="text-center mb-20">
                    <h1 className="mb-12 block text-6xl font-bold tracking-tight text-gray-200 lg:text-6xl">
                        Logo preview
                    </h1>
                    <p className="max-w-2xl mx-auto mt-8 text-left text-base font-regular tracking-normal text-gray-400">
                        Here you have the possibility to check how your logo will appear on our website. We have listed the different type of usages that we might have so you don't have to worry about your logo not being visible.
                    </p>
                </div>

                {companyLogoLoading.state === uploadState.Finished && (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 group">
                            <div className="">
                                <p className="text-gray-400 pb-6">Light background</p>
                                <div className="relative group p-8 bg-white rounded-xl border-2 border-gray-200">
                                    <div className="p-4 sm:p-8 rounded-xl">
                                        <img
                                            src={companyLogoLoading.downloadUrl}
                                            className=""
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <p className="text-gray-400 pb-6">Light background + hover preview</p>
                                <div className="relative group p-8 bg-white rounded-xl border-2 border-gray-200">
                                    <div className="bg-gray-100 p-4 sm:p-8 rounded-xl">
                                        <img
                                            src={companyLogoLoading.downloadUrl}
                                            className=""
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="">
                                <p className="text-gray-400 pb-6">Dark background</p>
                                <div className="relative group p-8 bg-sn-black rounded-xl border-2 border-gray-200">
                                    <div className="p-4 sm:p-8 rounded-xl">
                                        <img
                                            src={companyLogoLoading.downloadUrl}
                                            className=""
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <p className="text-gray-400 pb-6">Dark background + hover preview</p>
                                <div className="relative group p-8 bg-sn-black rounded-xl border-2 border-gray-200">
                                    <div className="bg-sn-black-light p-4 sm:p-8 rounded-xl">
                                        <img
                                            src={companyLogoLoading.downloadUrl}
                                            className=""
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <p className="mt-12 block text-base font-medium leading-6 text-gray-400">
                            Before using this link, make sure that you are happy with the transparency, the spacing around your logo and in general with the preview. If you are happy, you can use the following link to reference your logo in booth or partner applications. Link to the image:</p>
                        <p className="mt-4"><code className="bg-sn-black-lightest text-sm px-2 py-1 rounded-md leading-8 text-gray-200">{companyLogoLoading.downloadUrl}</code></p>

                        <p className="mt-12 block text-base font-medium leading-6 text-gray-400">
                            If you are not happy and want to adjust the logo, either click the button below or refresh the page.
                        </p>


                        <button
                            className="mt-6 flex items-center justify-center rounded-full bg-sn-yellow py-1.5 px-3 text-base font-semibold leading-7 sm:text-sm sm:leading-6 text-black hover:bg-sn-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 tracking-wide"
                            onClick={() => {
                                setCompanyLogoLoading({
                                    state: uploadState.None,
                                    error: "",
                                    downloadUrl: "",
                                });
                            }}
                        >
                            Change logo
                        </button>

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

                                    <div className="mx-auto flex justify-center mt-4 text-sm items-baseline leading-6 text-gray-600">
                                        <label
                                            htmlFor="company_logo"
                                            className="relative cursor-pointer py-1 px-2 rounded-md bg-sn-black-light hover:bg-sn-black-lightest font-semibold text-sn-yellow focus-within:outline-none focus-within:ring-2 focus-within:ring-sn-yellow focus-within:ring-offset-2"
                                        >
                                            <span>Upload a file</span>
                                            <input
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

