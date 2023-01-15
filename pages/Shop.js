import { Fragment } from "react";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Navigation/NavBar";
import Product from "../Components/Product Overview/Product";

const Shop = () => {
  return (
    <Fragment>
      <NavBar />
      <Product showTitle={false} />
      <Footer />
    </Fragment>
  );
};
export default Shop;
