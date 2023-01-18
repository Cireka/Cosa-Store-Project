import Featured from "../Components/Featured/Featured";
import NavBar from "../Components/Navigation/NavBar";
import Product from "../Components/Product Overview/Product";
import Slider from "../Components/Slider/Slider";
import Footer from "../Components/Footer/Footer";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <Slider />
      <Featured />
      <Product title={true} />
      <Footer />
    </Fragment>
  );
}
