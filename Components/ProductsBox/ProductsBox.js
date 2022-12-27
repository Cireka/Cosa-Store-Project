import style from "./ProductsBox.module.css";
import Image from "next/image";
import { Fragment } from "react";

const ProductsBox = (props) => {
  return (
    <div className={style.products}>
      <div className={style.imgContainer}>
        <div className={style.imgParrent}>
          <Image className={style.img} src={props.img} alt="Product Img" />
          <button className={style.button}>Quick View</button>
        </div>
      </div>
      <div className={style.detailsParrent}>
        <h2 className={style.name}>{props.name}</h2>
        <p className={style.price}>${props.price}</p>
      </div>
    </div>
  );
};
export default ProductsBox;
