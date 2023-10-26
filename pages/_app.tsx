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
      <Script src="https://cloud.ccm19.de/app.js?apiKey=89e260c85efd4f09942508c7065b0a08a35d71a51cab5e0b&amp;domain=64ede395cb4e98fd3603d3a3" />
      <Analytics />
      <Component {...pageProps} />
    </main>
  );
};

export default App;
