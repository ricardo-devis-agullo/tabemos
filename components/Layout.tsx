import Head from 'next/head';

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
      <header>
        <div className="title">
          <h1>Minna tabemos</h1>
          <span>with Noa</span>
        </div>
        <img
          height="50px"
          width="50px"
          className="logo"
          src="/noatoon.png"
        ></img>
      </header>
      <div className="content">{children}</div>
      <style jsx global>{`
        body,
        html {
          margin: 0;
          line-height: 1.6;
          color: #222;
          max-width: 40rem;
          padding: 2rem;
          margin: auto;
          background: #fafafa;
        }
        body {
          font-family: 'Roboto', sans-serif;
        }
        h1 {
          margin: 0;
        }
        a {
          color: #2ecc40;
        }
      `}</style>
      <style jsx>{`
        .logo {
          margin-left: 10px;
          border-radius: 50%;
        }
        header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          font-family: 'Indie Flower', cursive;
          background-color: #e590c1;
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: 'row';
        }
        .content {
          margin-top: 30px;
        }
      `}</style>
    </>
  );
};
