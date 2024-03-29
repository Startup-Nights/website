import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import layoutData from "../../content/global/index.json";

export const Layout = ({ data = layoutData, children }) => {
    return (
        <>
            <Head>
                <title>Startup Nights</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className='min-h-screen flex flex-col'>
                <Header data={data?.header} />
                <div className="flex-1 text-white bg-sn-black flex flex-col">
                    {children}
                </div>
                <Footer
                    data={data?.footer}
                />
            </div>
        </>
    );
};
