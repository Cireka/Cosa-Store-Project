import { Fragment } from "react";
import NavBar from "../Components/Navigation/NavBar";
import Footer from "../Components/Footer/Footer";
import AboutComp from "../Components/About/About";

const About = () => {
  return (
    <Fragment>
      <NavBar />
      <AboutComp />
      <Footer />
    </Fragment>
  );
};
export default About;
