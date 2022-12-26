import style from "./ProductsBox.module.css";
import Image from "next/image";

const ProductsBox = (props) => {
  return (
    <div className={style.imgContainer}>
      <div className={style.imgParrent}>
        <Image className={style.img} src={props.img} alt="Product Img" />
        <button className={style.button}>Quick View</button>
      </div>
      <h2>{props.name}</h2>
      <p>{props.price}</p>
    </div>
  );
};
export default ProductsBox;
