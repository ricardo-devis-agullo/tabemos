import { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap"
          rel="stylesheet"
          key="google-font-cabin"
        />
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        body,
        html {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
        }
        h1 {
          margin: 0;
        }
      `}</style>
    </>
  );
}
