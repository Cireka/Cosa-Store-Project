import { Fragment, use } from "react";
import style from "./ModalCart.module.css";
import { HiX } from "react-icons/hi";

import { useContext } from "react";
import DataContext from "../../Context/coza-context";
import Image from "next/image";

const Product = (props) => {
  return (
    <div className={style.ProductsParrent}>
      <div className={style.ImageParent}>
        <Image alt="Product Image" quality={100} src={props.image} />
      </div>
      <div className={style.productInfoParrent}>
        <h2>{props.name}</h2>
        <p>1 X {props.price} $</p>
      </div>
    </div>
  );
};

const ModalCart = (props) => {
  const ctx = useContext(DataContext);
  const items = ctx.items;

  return (
    <Fragment>
      <div className={style.Container}>
        <div className={style.TopPart}>
          <h1>Your Cart</h1>
          <button onClick={props.onClose}>
            <HiX />
          </button>
        </div>
        <div className={style.maxHeight}>
          {items?.map((item) => {
            return (
              <Product image={item.image} name={item.name} price={item.price} />
            );
          })}
        </div>
        <div className={style.BottomPart}>
          <h2>Total: {ctx.totalAmount}$</h2>
          <div className={style.CheckOut}>
            <button>View Cart</button>
            <button>Check Out</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalCart;
