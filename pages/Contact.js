import { Fragment } from "react";
import NavBar from "../Components/Navigation/NavBar";
import Footer from "../Components/Footer/Footer";
import ContactPage from "../Components/Contact/ContactPage";

const Contact = () => {
  return (
    <Fragment>
      <NavBar />
      <ContactPage />
      <Footer margin={true} />
    </Fragment>
  );
};
export default Contact;
