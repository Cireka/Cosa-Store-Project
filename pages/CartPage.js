import { Fragment } from "react";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Navigation/NavBar";
import Cart from "../Components/Cart Page/Cart";

const CartPage = () => {
  return (
    <Fragment>
      <NavBar />
      <Cart />
      <Footer />
    </Fragment>
  );
};
export default CartPage;
