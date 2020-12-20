import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { Layout } from '../components/Layout';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
