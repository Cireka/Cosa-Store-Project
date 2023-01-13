import style from "./ProductsBox.module.css";
import Image from "next/image";

import { Fragment, useContext, useState } from "react";
import DataContext from "../Context/coza-context";
import DetailedProductView from "../DetailedProductView/DetailedProductView";
import { motion } from "framer-motion";

const ProductsBox = (props) => {
  const ctx = useContext(DataContext);

  const [detailedProduct, setDetailedProduct] = useState(false);

  const addToCartHandler = () => {
    ctx.addItem({
      name: props.name,
      price: props.price,
      image: props.img,
      id: props.id,
      amount: props.amount,
    });
  };

  const ProductViewHandler = () => {
    setDetailedProduct(!detailedProduct);
  };
  const transition = { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] };
  return (
    <Fragment>
      {detailedProduct && (
        <DetailedProductView modalManager={ProductViewHandler} />
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={transition}
        className={style.products}
      >
        <div className={style.imgContainer}>
          <div className={style.imgParrent}>
            <Image className={style.img} src={props.img} alt="Product Img" />
            <button onClick={ProductViewHandler} className={style.button}>
              Quick View
            </button>
          </div>
          <div className={style.detailsParrent}>
            <div>
              <h2 className={style.name}>{props.name}</h2>
              <p className={style.price}>${props.price}</p>
            </div>
            <div>
              <button onClick={addToCartHandler} className={style.addToCart}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </Fragment>
  );
};
export default ProductsBox;
