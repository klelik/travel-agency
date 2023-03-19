import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/12.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={ServiceImg}
        title="Service"
        hide="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
