import "./style.css";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <main id="home">
      <Header />
      <section className="welcome">
        <article>
          <h1>
            Welcome to <span className="txt-logo">Quotea App</span>
          </h1>
        </article>
      </section>
    </main>
  );
};

export default Home;
