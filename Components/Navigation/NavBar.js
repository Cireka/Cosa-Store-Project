import { Fragment, use } from "react";
import style from "./NavBar.module.css";
import Image from "next/image";
import logo from "../../public/logo-01.png";
import { useEffect, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { BiHeart } from "react-icons/bi";
import Link from "next/link";
import ModalCart from "../UI/ModalCart/ModalCart";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";

import { useContext } from "react";
import DataContext from "../Context/coza-context";
// import { useWindowSize } from "@react-hook/window-size";

const NavBar = () => {
  const ctx = useContext(DataContext);
  const [sticky, setSticky] = useState(false);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const burgerMenuHanlder = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  const setfixed = () => {
    if (window.scrollY >= 38) {
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

  const CartHandler = () => {
    setCartIsShown(!cartIsShown);
  };

  const LogoclickHandler = () => {
    route.push("/");
  };

  return (
    <Fragment>
      <section className={style.SectionNav}>
        <div
          className={
            sticky ? style.topBarContainerResponsive : style.topBarContainer
          }
        >
          <div className={style.topBar}>
            <div className={style.BarParParrent}>
              <p>Free shipping for standard order over $100</p>
            </div>
            <div className={style.TopBarLinks}>
              <a className={style.FirstChild} href="#">
                Help & FAQs
              </a>
              <a href="#">My Account</a>
              <a href="#">EN</a>
              <a href="#">USD</a>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {cartIsShown && (
            <Fragment>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={CartHandler}
                transition={{ duration: 0.5 }}
                className={style.Modal}
              ></motion.div>
              <motion.div
                className={style.sidePannelCart}
                animate={{ x: -400 }}
                exit={{ x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ModalCart onClose={CartHandler} />
              </motion.div>
            </Fragment>
          )}
        </AnimatePresence>
        <div className={sticky ? style.StickyNavParrent : style.NavParrent}>
          <nav className={style.Navigation}>
            <div className={style.LinksAndLogo}>
              <Image
                onClick={LogoclickHandler}
                quality={100}
                className={style.logo}
                src={logo}
                alt="Coza store logo"
              />
              <Link href="/">Home</Link>
              <Link href="/Shop">Shop</Link>
              <Link href="/About">About</Link>
              <Link href="/Contact">Contact</Link>
              <Link href="/Blog">Blog</Link>
              <Link href="/CartPage">Cart</Link>
            </div>
            <div className={style.CartAndWishlist}>
              <button onClick={CartHandler} className={style.navIconButtons}>
                <p className={style.iconNum}>{ctx.totalItems}</p>
                <IoMdCart className={style.Icons} />
              </button>
              <button className={style.navIconButtons}>
                <p className={style.iconNum}>4</p>
                <BiHeart className={style.Icons} />
              </button>
              <button
                onClick={burgerMenuHanlder}
                className={style.navIconButtons}
              >
                <RxHamburgerMenu className={style.BurgerMenu} />
              </button>
            </div>
          </nav>
        </div>

        <AnimatePresence>
          {burgerMenuOpen && (
            <motion.div
              className={style.filtetDropDownParrent}
              initial={{ height: 0, opacity: 1, marginBottom: 0 }}
              animate={{ height: "auto", opacity: 1, marginBottom: 52 }}
              exit={{
                height: 0,
                opacity: 1,
                overflow: "hidden",
                marginBottom: 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className={style.test}>ewqeqewq</div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </Fragment>
  );
};

export default NavBar;
