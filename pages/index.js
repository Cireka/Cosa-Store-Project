import { Fragment } from "react";
import Featured from "../Components/Featured/Featured";
import NavBar from "../Components/Navigation/NavBar";
import Product from "../Components/Product Overview/Product";
import Slider from "../Components/Slider/Slider";
import CozaProvider from "../Components/Context/CozaProvider";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <CozaProvider>
      <NavBar />
      <Slider />
      <Featured />
      <Product />
      <Footer />
    </CozaProvider>
  );
}
