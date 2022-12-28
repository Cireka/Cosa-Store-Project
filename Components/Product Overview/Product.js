import style from "./Product.module.css";

import { RxMagnifyingGlass } from "react-icons/rx";
import { HiX } from "react-icons/hi";
import { BsFilter } from "react-icons/bs";
import ProductsBox from "../ProductsBox/ProductsBox";
import { useContext, useState } from "react";
import DataContext from "../Context/coza-context";

import { motion, AnimatePresence } from "framer-motion";
import Filters from "../FilterButtonDropDown/Filters";

const Product = () => {
  const ctx = useContext(DataContext);
  const [section, setSection] = useState("All");
  const [filter, setFilter] = useState(false);

  const sectionHandler = (sectionSelected) => {
    setSection(sectionSelected);
  };

  const products = ctx[0];

  const filteredProduct = products.filter((item) => {
    if (item.section === section) {
      console.log(item);
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
          <button
            onClick={() => setFilter(!filter)}
            className={style.FilterButton}
          >
            {filter ? (
              <HiX className={style.FilterIcons} />
            ) : (
              <BsFilter className={style.FilterIcons} />
            )}
            Filter
          </button>
          <button className={style.FilterButton}>
            <RxMagnifyingGlass className={style.FilterIcons} />
            Sarch
          </button>
        </div>
      </div>
      <AnimatePresence>
        {filter && (
          <motion.div
            className={style.filtetDropDownParrent}
            initial={{ height: 0, opacity: 1, marginTop: 42 }}
            animate={{ height: "auto", opacity: 1, marginTop: 42 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Filters />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={style.ProductBoxParrent}>
        <AnimatePresence>
          {filteredProduct.map((data) => {
            return (
              <motion.div
                exit={{ opacity: 0, duration: 0.2 }}
                key={data.key}
                layoutId={data.key}
                layout
              >
                <ProductsBox
                  name={data.name}
                  price={data.price}
                  img={data.image}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};
export default Product;
