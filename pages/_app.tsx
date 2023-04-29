import { Source_Sans_Pro } from 'next/font/google'
import "../styles.css";

// https://nextjs.org/docs/basic-features/font-optimization
const sourceSansPro = Source_Sans_Pro({
  weight: '400',
  subsets: ['latin']
})

const App = ({ Component, pageProps }) => {
  return <main className={sourceSansPro.className}>
    <Component {...pageProps} />
  </main>;
};

export default App;
