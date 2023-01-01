import style from "./Footer.module.css";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import icon1 from "../../public/icons/icon-pay-01.png";
import icon2 from "../../public/icons/icon-pay-02.png";
import icon3 from "../../public/icons/icon-pay-03.png";
import icon4 from "../../public/icons/icon-pay-04.png";
import icon5 from "../../public/icons/icon-pay-05.png";

import Image from "next/image";

const Footer = (props) => {
  return (
    <section className={props.margin ? style.noMargin : style.SectionFooter}>
      <div className={style.FooterContainer}>
        <div className={style.FooterSectionParrent}>
          <h1>CATEGORIES</h1>
          <a href="#">Woman</a>
          <a href="#">Man</a>
          <a href="#">Shoes</a>
          <a href="#">Watches</a>
        </div>
        <div className={style.FooterSectionParrent}>
          <h1>HElP</h1>
          <a href="#">Track Order</a>
          <a href="#">Returns</a>
          <a href="#">Shipping</a>
          <a href="#">FAQs</a>
        </div>
        <div className={style.FooterSectionParrent}>
          <h1>GET IN TOUCH</h1>
          <p>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className={style.iconsParrent}>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div className={style.FooterSectionParrent}>
          <h1>NEWSLETTER</h1>
          <input placeholder="email@example.com" type="email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className={style.FooterCopyRightsParrent}>
        <div className={style.iconParrent}>
          <Image src={icon1} alt="Payment Method Image" />
          <Image src={icon2} alt="Payment Method Image" />
          <Image src={icon3} alt="Payment Method Image" />
          <Image src={icon4} alt="Payment Method Image" />
          <Image src={icon5} alt="Payment Method Image" />
        </div>
        <p>
          Copyright ©2022 All rights reserved | Made with by{" "}
          <a href="#">Colorlib</a> & distributed by <a href="#">ThemeWagon</a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
