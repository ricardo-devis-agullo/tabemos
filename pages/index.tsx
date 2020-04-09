import { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <div>
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
      <div>
        <p>Coming soon!</p>
      </div>
      <style jsx>{`
        .logo {
          margin-left: 10px;
          border-radius: 50%;
        }
        header {
          font-family: 'Indie Flower', cursive;
          background-color: #e590c1;
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: 'row';
        }
      `}</style>
    </div>
  );
};

export default Index;
