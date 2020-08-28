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
      <Link href="/">
        <header>
          <div className="title">
            <h1>Minna tabemos</h1>
            <span>with Noa</span>
          </div>
          <img height="80px" width="80px" className="logo" src="/noa.png"></img>
        </header>
      </Link>
      <div className="content">{children}</div>
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
        .logo {
          margin-left: 10px;
          border-radius: 50%;
        }
        header {
          cursor: pointer;
          width: 100%;
          font-family: 'Indie Flower', cursive;
          background-color: #e590c1;
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: 'row';
        }
        .content {
          text-align: center;
          margin-top: 30px;
          padding: 2rem;
          margin: auto;
        }
      `}</style>
    </>
  );
};
