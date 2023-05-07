import React, { useEffect, useState } from "react";
import type { Template } from "tinacms";
import { ContentBlock, ContentBlockSchema } from "../items/contentblock";
import Head from "next/head";

export const Tito = ({ data }) => {
    // https://stackoverflow.com/questions/55393226/disable-hydration-only-partially-hydrate-a-next-js-app
    // https://github.com/vercel/next.js/discussions/35773#discussioncomment-2622885
    // https://goulet.dev/posts/consuming-web-component-react-typescript/
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="bg-sn-black-light">
            <Head>
                <script src="https://js.tito.io/v2/with/inline" async></script>
            </Head>
            <div className="max-w-7xl mx-auto py-12 px-8 lg:p-24">
                <div className="grid grid-cols-1 items-center">
                    <div id="sn-tito-embedded-widget" className="flex items-center">
                        <tito-widget
                            event="ecw/startup-nights-2023"
                            save-metadata-parameters="utm_*"
                        ></tito-widget>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const titoBlockSchema: Template = {
    name: "tito",
    label: "Tito",
    fields: [
        ContentBlockSchema,
    ],
};
