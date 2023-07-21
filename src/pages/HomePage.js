import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Menu />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
