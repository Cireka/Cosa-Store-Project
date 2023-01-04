import style from "./Product.module.css";

import { RxMagnifyingGlass } from "react-icons/rx";
import { HiX } from "react-icons/hi";
import { BsFilter } from "react-icons/bs";
import ProductsBox from "../ProductsBox/ProductsBox";
import { useState } from "react";
import DataContext from "../Context/coza-context";

import { motion, AnimatePresence } from "framer-motion";
import Filters from "../FilterButtonDropDown/Filters";
import SarchBar from "../UI/sarchBar";

import image1 from "../../public/productImgs/Product-01.jpg";
import image2 from "../../public/productImgs/Product-02.jpg";
import image3 from "../../public/productImgs/Product-03.jpg";
import image4 from "../../public/productImgs/Product-04.jpg";
import image5 from "../../public/productImgs/Product-05.jpg";
import image6 from "../../public/productImgs/Product-06.jpg";
import image7 from "../../public/productImgs/Product-07.jpg";
import image8 from "../../public/productImgs/Product-08.jpg";
import image9 from "../../public/productImgs/Product-09.jpg";
import image10 from "../../public/productImgs/Product-10.jpg";
import image11 from "../../public/productImgs/Product-11.jpg";
import image12 from "../../public/productImgs/Product-12.jpg";
import image13 from "../../public/productImgs/Product-13.jpg";
import image14 from "../../public/productImgs/Product-14.jpg";
import image15 from "../../public/productImgs/Product-15.jpg";
import image16 from "../../public/productImgs/Product-16.jpg";

const Product = (props) => {
  const [section, setSection] = useState("All");
  const [filter, setFilter] = useState(false);
  const [sarch, setSarch] = useState(false);

  const sectionHandler = (sectionSelected) => {
    setSection(sectionSelected);
  };

  const data = [
    {
      name: "Esprit Ruffle Shirt",
      price: 16.64,
      id: "i1",
      image: image1,
      section: "Female",
      key: Math.random(),
      amount: 1,
    },
    {
      name: "Office Top",
      price: 35.31,
      id: "i2",
      image: image2,
      section: "Female",
      key: Math.random(),
      amount: 1,
    },
    {
      name: "Only Check Trouser",
      price: 25.5,
      id: "i3",
      section: "Male",
      image: image3,
      key: Math.random(),
      amount: 1,
    },
    {
      name: "Classic Trench Coat",
      price: 75.0,
      id: "i4",
      image: image4,
      section: "Female",
      key: Math.random(),
      amount: 1,
    },
    {
      name: "Front Pocket Jumper",
      price: 34.75,
      id: "i5",
      image: image5,
      section: "Female",
      key: Math.random(),
      amount: 1,
    },
    {
      name: "Vintage Inspired Classic",
      price: 93.2,
      id: "i6",
      image: image6,
      section: "Watch",
      key: Math.random(),
      amount: 1,
    },
    {
      name: "Shirt in Stretch Cotton",
      price: 52.66,
      id: "i7",
      image: image7,
      section: "Female",
      key: Math.random(),
      amount: 1,
    },
    {
      name: "Pieces Metallic Printed",
      price: 75.0,
      id: "i8",
      image: image8,
      section: "Female",
      key: Math.random(),
      amount: 1,
    },
    {
      name: "Converse All Star Hi Plimsolls",
      price: 75.0,
      id: "i9",
      section: "Shoes",
      image: image9,
      key: Math.random(),
      amount: 1,
    },
    {
      name: "Femme T-Shirt In Stripe",
      price: 25.85,
      id: "i10",
      section: "Female",
      image: image10,
      key: Math.random(),
      amount: 1,
    },
    {
      name: "Herschel Blue Top",
      price: 63.16,
      id: "i11",
      section: "Male",
      image: image11,
      key: Math.random(),
      amount: 1,
    },
    {
      name: "Herschel Buckel",
      price: 63.15,
      id: "i12",
      section: "Male",
      image: image12,
      key: Math.random(),
      amount: 1,
    },
    {
      name: "T-Shirt with Sleeve",
      price: 18.49,
      id: "i13",
      section: "Female",
      image: image13,
      key: Math.random(),
      amount: 1,
    },
    {
      name: "Pretty Little Thing",
      price: 54.79,
      id: "i14",
      section: "Female",
      image: image14,
      key: Math.random(),
      amount: 1,
    },

    {
      name: "Mini Silver Mesh Watch",
      price: 86.85,
      id: "i15",
      section: "Watch",
      image: image15,
      key: Math.random(),
      amount: 1,
    },
    {
      name: "Square Neck Back",
      price: 29.64,
      id: "i18",
      section: "Female",
      image: image16,
      key: Math.random(),
      amount: 1,
    },
  ];

  const filteredProduct = data.filter((item) => {
    if (item.section === section) {
      console.log(item);
      return item;
    }
    if (section === "All") {
      return data;
    }
  });

  const sarchHandler = () => {
    if (filter === true) {
      setFilter(!filter);
      setSarch(!sarch);
    }
    if (filter === false) {
      setSarch(!sarch);
    } else {
      setSarch(!sarch);
    }
  };

  const filterHandler = () => {
    if (sarch === true) {
      setFilter(!filter);
      setSarch(!sarch);
    }
    if (sarch === false) {
      setFilter(!filter);
    } else {
      setFilter(!filter);
    }
  };

  return (
    <section className={style.ProductOverviewSection}>
      {props.showTitle && <h1 className={style.title}>PRODUCT OVERVIEW</h1>}
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
          <button onClick={filterHandler} className={style.FilterButton}>
            {filter ? (
              <HiX className={style.FilterIcons} />
            ) : (
              <BsFilter className={style.FilterIcons} />
            )}
            Filter
          </button>

          <button onClick={sarchHandler} className={style.FilterButton}>
            {sarch ? (
              <HiX className={style.FilterIcons} />
            ) : (
              <RxMagnifyingGlass className={style.FilterIcons} />
            )}
            Sarch
          </button>
        </div>
      </div>
      <AnimatePresence>
        {filter && (
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
            <Filters />
          </motion.div>
        )}
        {sarch && (
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
            <SarchBar />
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
                  id={data.id}
                  amount={data.amount}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className={style.ButtonParrent}>
        <button>Load More</button>
      </div>
    </section>
  );
};
export default Product;
