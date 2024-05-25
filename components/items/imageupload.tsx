import { PhotoIcon } from "@heroicons/react/24/solid"

export enum UploadState {
    None = 0,
    Uploading,
    Error,
    Finished,
}

export class ImageUploadState {
    status: UploadState
    error: string
    downloadUrl: string
}

export const ImageUpload = ({ state, setState, name, single, resize }) => {
    const id = name.toLowerCase().
        replace(/[^a-zA-Z._]/g, '')

    const handleUpload = async (event: any) => {
        const file = event.target.files[0]
        setState({
            status: UploadState.None,
            error: '',
            downloadUrl: '',
        })

        if (file.size > 10 * 1000000) {
            setState({
                status: UploadState.Error,
                error: 'image too big',
                downloadUrl: '',
            })
        }

        const uploadName = file.name.toLowerCase().
            replace(/[^a-zA-Z._]/g, '')

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

        const spacesUploadResponse = await fetch(data.upload, {
            method: "put",
            headers: {
                "x-amz-acl": "public-read",
                "Content-Type": file.type,
            },
            body: file,
        })

        if (spacesUploadResponse?.status > 200) {
            console.log(spacesUploadResponse);
        }

        if (resize) {
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
        }

        setState({
            status: UploadState.Finished,
            error: '',
            downloadUrl: data.download,
        });
    }

    return (
        <div className="sm:col-span-6">
            {state.status === UploadState.Finished && (
                <>
                    <p className="mt-2 italic block text-sm font-medium leading-6 text-gray-400">
                        Before you submit your application, make sure that you are
                        happy with the preview below.
                    </p>

                    <button
                        type="submit"
                        className="mt-6 flex items-center justify-center rounded-full bg-sn-yellow py-1.5 px-3 text-base font-semibold leading-7 sm:text-sm sm:leading-6 text-black hover:bg-sn-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 tracking-wide"
                        onClick={() => {
                            setState({
                                status: UploadState.None,
                                error: "",
                                downloadUrl: "",
                            });
                        }}
                    >
                        Change image
                    </button>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 group">
                        <div className="">
                            {!single && (
                                <p className="text-gray-400 pb-6">Without hover effect on light background (for example for print media)</p>
                            )}
                            <div className="relative group p-8 bg-white rounded-xl border-2 border-gray-200">
                                <div className="p-4 sm:p-8 rounded-xl">
                                    <img
                                        src={state.downloadUrl}
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>

                        {!single && (
                            <div className="">
                                <p className="text-gray-400 pb-6">With hover effect on light background (for example for links)</p>
                                <div className="relative group p-8 bg-white rounded-xl border-2 border-gray-200">
                                    <div className="hover:bg-gray-50 p-4 sm:p-8 rounded-xl">
                                        <img
                                            src={state.downloadUrl}
                                            className=""
                                        />
                                    </div>
                                </div>
                            </div>
                        )}


                        {!single && (
                            <div className="">
                                <p className="text-gray-400 pb-6">Without hover effect on dark background (for example for for print media)</p>
                                <div className="relative group p-8 bg-sn-black rounded-xl border-2 border-gray-200">
                                    <div className="p-4 sm:p-8 rounded-xl">
                                        <img
                                            src={state.downloadUrl}
                                            className=""
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}

            {state.status !== UploadState.Finished && (
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-200/25 px-6 py-10">
                    {state.status === UploadState.Uploading && (
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

                    {(state.status === UploadState.None ||
                        state.status === UploadState.Error) && (
                            <div className="text-center">
                                <PhotoIcon
                                    className="mx-auto h-12 w-12 text-gray-300"
                                    aria-hidden="true"
                                />

                                <div className="mx-auto flex justify-center mt-4 text-sm items-baseline leading-6 text-gray-600">
                                    <label
                                        htmlFor={id}
                                        className="relative cursor-pointer py-1 px-2 rounded-md bg-sn-black-light hover:bg-sn-black-lightest font-semibold text-sn-yellow focus-within:outline-none focus-within:ring-2 focus-within:ring-sn-yellow focus-within:ring-offset-2"
                                    >
                                        <span>Upload a file</span>
                                        <input
                                            id={id}
                                            name={id}
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
                                {state.status === UploadState.Error &&
                                    state.error !== "" && (
                                        <p className="mt-4 text-xs leading-5 text-red-400">
                                            {state.error}
                                        </p>
                                    )}
                            </div>
                        )}
                </div>
            )}
        </div>

    );
};
