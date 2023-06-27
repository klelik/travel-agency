import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/8.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import ExtensionPick from "../components/ExtensionPick";

function Test() {
  return (
    <>
      <Navbar />
      <Hero cName="hero" heroImg={AboutImg} title="About" hide="hide" />
      <ExtensionPick />
      <Footer />
    </>
  );
}

export default Test;
