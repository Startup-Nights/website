import { Source_Sans_3 } from 'next/font/google'
import "../styles.css";
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import Script from 'next/script';

// https://nextjs.org/docs/basic-features/font-optimization
const sourceSansPro = Source_Sans_3({
    weight: ['200', '300', '400', '600', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin']
})

// react strict mode, see
// https://stackoverflow.com/a/74158550
const App = ({ Component, pageProps }) => {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-5JJCJM9' });
    }, []);

    // https://stackoverflow.com/a/62088643
    // in case there is a hash in the route, scroll to it
    useEffect(() => {
        setTimeout(() => {
            const hashId = window.location.hash
            if (hashId) {
                const element = document.querySelector(hashId)
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest',
                    });
                }
            }
        }, 500)
    })

    return (
        <main className={sourceSansPro.className}>
            {process.env.VERCEL_ENV === "production" && (
                <Script src={`https://cloud.ccm19.de/app.js?apiKey=${process.env.CCM19_API_KEY}&amp;domain=${process.env.CCM19_DOMAIN}`} />
            )}

            <Analytics />
            <Component {...pageProps} />
        </main>
    );
};

export default App;
