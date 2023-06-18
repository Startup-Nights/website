import { Source_Sans_Pro } from 'next/font/google'
import "../styles.css";
import { LinkedInPixel, MetaPixel, TiktokPixel, useAnalytics } from '../components/items/analytics';
import { Analytics } from '@vercel/analytics/react';

// https://nextjs.org/docs/basic-features/font-optimization
const sourceSansPro = Source_Sans_Pro({
  weight: ['200', '300', '400', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

const App = ({ Component, pageProps }) => {
  useAnalytics()
  return (
    <main className={sourceSansPro.className}>
      <Analytics />
      <MetaPixel />
      <LinkedInPixel />
      <TiktokPixel />
      <Component {...pageProps} />
    </main>
  );
};

export default App;
