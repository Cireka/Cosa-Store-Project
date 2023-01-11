import { Fragment } from "react";
import NavBar from "../Components/Navigation/NavBar";
import Footer from "../Components/Footer/Footer";
import ContactPage from "../Components/Contact/ContactPage";
import { AnimatePresence, motion } from "framer-motion";

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
