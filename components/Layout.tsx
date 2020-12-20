import Head from 'next/head';
import Link from 'next/link';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Roboto&display=swap"
          rel="stylesheet"
          key="google-font-cabin"
        />
      </Head>
      <header className="flex cursor-pointer justify-center items-center w-full bg-pink-300">
        <Link href="/">
          <div className="title">
            <h1 className="text-4xl">Minna tabemos</h1>
            <span>with Noa</span>
          </div>
        </Link>
        <a
          href="https://www.instagram.com/minnaisho/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            height="80px"
            width="80px"
            className="ml-4 rounded-full"
            src="/noa.png"
          ></img>
        </a>
      </header>
      <div className="content text-center p-8">{children}</div>
      <style jsx global>{`
        ul,
        body,
        html {
          padding: 0;
          margin: 0;
        }
        body {
          font-family: 'Roboto', sans-serif;
          line-height: 1.6;
          color: #222;
          background: #fafafa;
        }
        ol,
        ul {
          list-style: none outside none;
        }
        h1 {
          margin: 0;
        }
        a {
          color: #2ecc40;
          text-decoration: none;
        }
      `}</style>
      <style jsx>{`
        header {
          font-family: 'Indie Flower', cursive;
        }
      `}</style>
    </>
  );
};
