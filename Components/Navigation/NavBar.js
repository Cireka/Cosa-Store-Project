import { Fragment } from "react";
import style from "./NavBar.module.css";
import Image from "next/image";
import test from "../../public/logo-01.png";
import { useEffect, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { BiHeart } from "react-icons/bi";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  const setfixed = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 88) {
      setSticky(true);
    }
    if (window.scrollY <= 20) {
      setSticky(false);
    } else {
    }
  };

  useEffect(() => {
    if (window) {
      window?.addEventListener("scroll", setfixed);
    }
  });

  return (
    <Fragment>
      <section className={style.SectionNav}>
        <div className={style.topBarContainer}>
          <div className={style.topBar}>
            <div className={style.BarParParrent}>
              <p>Free shipping for standard order over $100</p>
            </div>
            <div className={style.TopBarLinks}>
              <a href="#">Help & FAQs</a>
              <a href="#">My Account</a>
              <a href="#">EN</a>
              <a href="#">USD</a>
            </div>
          </div>
        </div>
        <div className={style.NavParrent}>
          <nav className={sticky ? style.StickyNavParrent : style.Navigation}>
            <div className={style.LinksAndLogo}>
              <Image
                quality={100}
                className={style.logo}
                src={test}
                alt="Coza store logo"
              />
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">Blog</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
            <div className={style.CartAndWishlist}>
              <button className={style.navIconButtons}>
                <p className={style.iconNum}>2</p>
                <IoMdCart className={style.Icons} />
              </button>
              <button className={style.navIconButtons}>
                <p className={style.iconNum}>4</p>
                <BiHeart className={style.Icons} />
              </button>
            </div>
          </nav>
        </div>
      </section>
    </Fragment>
  );
};

export default NavBar;
