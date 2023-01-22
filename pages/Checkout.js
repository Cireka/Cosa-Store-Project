import { Fragment } from "react";
import CheckOutPage from "../Components/Checkout/CheckOutPage";
import NavBar from "../Components/Navigation/NavBar";
import Footer from "../Components/Footer/Footer";

const CheckOut = () => {
  return (
    <Fragment>
      <NavBar />
      <CheckOutPage />
      <Footer />
    </Fragment>
  );
};

export default CheckOut;
