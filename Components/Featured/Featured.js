import style from "./Featured.module.css";
import FeaturedBox from "../UI/FeaturedBox";

import banner1 from "../../public/featuredimages/banner-01.jpg";

import banner2 from "../../public/featuredimages/banner-02.jpg";

import banner3 from "../../public/featuredimages/banner-03.jpg";

const Featured = () => {
  return (
    <section className={style.featuredSection}>
      <div className={style.FeaturedParrent}>
        <FeaturedBox par={"Spring 2023"} title={"Woman"} img={banner1} />
        <FeaturedBox par={"Spring 2023"} title={"Man"} img={banner2} />
        <FeaturedBox par={"New Trend"} title={"Accesories"} img={banner3} />
      </div>
    </section>
  );
};
export default Featured;
