import style from "./ProductsBox.module.css";
import Image from "next/image";

import { useContext } from "react";
import DataContext from "../Context/coza-context";

const ProductsBox = (props) => {
  const context = useContext(DataContext);
  const ctx = context[1][0];

  const addToCartHandler = () => {
    ctx.addItem({ name: props.name, price: props.price, image: props.image });
  };
  console.log(ctx.items);
  return (
    <div className={style.products}>
      <div className={style.imgContainer}>
        <div className={style.imgParrent}>
          <Image className={style.img} src={props.img} alt="Product Img" />
          <button className={style.button}>Quick View</button>
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
