/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavHeader />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
