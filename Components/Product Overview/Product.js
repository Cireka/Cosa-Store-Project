import style from "./Product.module.css";

import { RxMagnifyingGlass } from "react-icons/rx";
import { BsFilter } from "react-icons/bs";
import ProductsBox from "../ProductsBox/ProductsBox";

import { useContext } from "react";

import DataContext from "../Context/coza-context";

const Product = () => {
  const ctx = useContext(DataContext);
  console.log(ctx);
  return (
    <section className={style.ProductOverviewSection}>
      <h1 className={style.title}>PRODUCT OVERVIEW</h1>
      <div className={style.ProductNavParr}>
        <div className={style.SectionButtonsPar}>
          <button className={style.sectionButton}>All Products</button>
          <button className={style.sectionButton}>Women</button>
          <button className={style.sectionButton}>Men</button>
          <button className={style.sectionButton}>Bag</button>
          <button className={style.sectionButton}>Shoes</button>
          <button className={style.sectionButton}>Watches</button>
        </div>
        <div className={style.FilterParrent}>
          <button className={style.FilterButton}>
            <RxMagnifyingGlass className={style.FilterIcons} />
            Filter
          </button>
          <button className={style.FilterButton}>
            <BsFilter className={style.FilterIcons} />
            Sarch
          </button>
        </div>
      </div>
      <div className={style.ProductBoxParrent}>
        <ProductsBox img={ctx[0].image} />
      </div>
    </section>
  );
};
export default Product;
