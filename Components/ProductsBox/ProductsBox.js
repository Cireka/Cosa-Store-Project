import style from "./ProductsBox.module.css";
import Image from "next/image";

import { useContext, useState } from "react";
import DataContext from "../Context/coza-context";
import DetailedProductView from "../DetailedProductView/DetailedProductView";

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

  return (
    <div className={style.products}>
      {detailedProduct && (
        <DetailedProductView modalManager={ProductViewHandler} />
      )}
      <div className={style.imgContainer}>
        <div className={style.imgParrent}>
          <Image className={style.img} src={props.img} alt="Product Img" />
          <button onClick={ProductViewHandler} className={style.button}>
            Quick View
          </button>
        </div>
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
  );
};
export default ProductsBox;
