import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/8.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero" heroImg={AboutImg} title="About" hide="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
