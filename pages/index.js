import { Fragment } from "react";
import Featured from "../Components/Featured/Featured";
import NavBar from "../Components/Navigation/NavBar";
import Slider from "../Components/Slider/Slider";

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <Slider />
      <Featured />
    </Fragment>
  );
}
