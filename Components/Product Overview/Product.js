import style from "./Product.module.css";

import { RxMagnifyingGlass } from "react-icons/rx";
import { BsFilter } from "react-icons/bs";
import ProductsBox from "../ProductsBox/ProductsBox";

import { useContext, useState } from "react";

import DataContext from "../Context/coza-context";

const Product = () => {
  const ctx = useContext(DataContext);
  const [section, setSection] = useState("Female");

  const sectionHandler = (sectionSelected) => {
    setSection(sectionSelected);
  };

  console.log(section);

  const products = ctx[0];

  const filteredProduct = products.filter((item) => {
    if (item.section === section) {
      return item;
    }
    if (section === "All") {
      return products;
    }
  });

  return (
    <section className={style.ProductOverviewSection}>
      <h1 className={style.title}>PRODUCT OVERVIEW</h1>
      <div className={style.ProductNavParr}>
        <div className={style.SectionButtonsPar}>
          <button
            onClick={() => sectionHandler("All")}
            className={style.sectionButton}
          >
            All Products
          </button>
          <button
            onClick={() => sectionHandler("Female")}
            className={style.sectionButton}
          >
            Women
          </button>
          <button
            onClick={() => sectionHandler("Male")}
            className={style.sectionButton}
          >
            Men
          </button>
          <button
            onClick={() => sectionHandler("Bag")}
            className={style.sectionButton}
          >
            Bag
          </button>
          <button
            onClick={() => sectionHandler("Shoes")}
            className={style.sectionButton}
          >
            Shoes
          </button>
          <button
            onClick={() => sectionHandler("Watch")}
            className={style.sectionButton}
          >
            Watches
          </button>
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
        {filteredProduct.map((data) => {
          console.log(data);
          return (
            <ProductsBox name={data.name} price={data.price} img={data.image} />
          );
        })}
      </div>
    </section>
  );
};
export default Product;
