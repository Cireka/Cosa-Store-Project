import { Fragment } from "react";
import style from "./ModalCart.module.css";
import { HiX } from "react-icons/hi";

import { useContext } from "react";
import DataContext from "../../Context/coza-context";
import Image from "next/image";

import { VscChromeClose } from "react-icons/vsc";

const Product = (props) => {
  const ctx = useContext(DataContext);

  const RemoveHandler = () => {
    ctx.removeItem(props.id);
  };

  return (
    <div layout onClick={RemoveHandler} className={style.ProductsParrent}>
      <div className={style.GrandMother}>
        <button className={style.DeleteItemButton}>
          <VscChromeClose className={style.Xicon} />
        </button>
        <div className={style.ImageParent}>
          <Image
            className={style.Image}
            alt="Product Image"
            quality={100}
            src={props.image}
          />
        </div>
      </div>
      <div className={style.productInfoParrent}>
        <h2>{props.name}</h2>
        <p>
          {props.amount} X {props.price} $
        </p>
      </div>
    </div>
  );
};

const ModalCart = (props) => {
  const ctx = useContext(DataContext);
  const items = ctx.items;
  const totalAmount = ctx.totalAmount;

  return (
    <Fragment>
      <div layout className={style.Container}>
        <div className={style.TopPart}>
          <h1>Your Cart</h1>
          <button onClick={props.onClose}>
            <HiX />
          </button>
        </div>
        <div layout className={style.maxHeight}>
          {items?.map((item) => {
            return (
              <Product
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                amount={item.amount}
              />
            );
          })}
        </div>
        <div className={style.BottomPart}>
          <h2>Total: {Math.abs(totalAmount.toFixed(2))}$</h2>
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
