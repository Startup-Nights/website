import TagManager from 'react-gtm-module';
import { useEffect } from "react";
import Head from 'next/head';
import Script from 'next/script';

export const useAnalytics = () => {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-5JJCJM9' });
    }, []);

    return (
        <Head>
            <script src="https://cloud.ccm19.de/app.js?apiKey=89e260c85efd4f09942508c7065b0a08a35d71a51cab5e0b&amp;domain=64ede395cb4e98fd3603d3a3" referrerpolicy="origin" />
        </Head>
    )
};
