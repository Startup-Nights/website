import { Source_Sans_3 } from 'next/font/google'
import "../styles.css";
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import Script from 'next/script';

// https://nextjs.org/docs/basic-features/font-optimization
const sourceSansPro = Source_Sans_3({
    weight: ['200', '300', '400', '600', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin']
})

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-5JJCJM9' });
    }, []);

    return (
        <main className={sourceSansPro.className}>
            <Script src="https://cloud.ccm19.de/app.js?apiKey=89e260c85efd4f09942508c7065b0a08a35d71a51cab5e0b&amp;domain=64ede395cb4e98fd3603d3a3" />
            <Analytics />
            <Component {...pageProps} />
        </main>
    );
};

export default App;
