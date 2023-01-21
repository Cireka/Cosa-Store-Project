import { Fragment } from "react";
import style from "./ModalCart.module.css";
import { HiX } from "react-icons/hi";

import { useContext } from "react";
import DataContext from "../../Context/coza-context";
import Image from "next/image";

import { VscChromeClose } from "react-icons/vsc";

import { useRouter } from "next/router";

const Product = (props) => {
  const ctx = useContext(DataContext);

  const RemoveHandler = () => {
    ctx.removeItem(props.id);
  };

  return (
    <div onClick={RemoveHandler} className={style.ProductsParrent}>
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
  const route = useRouter();
  const ViewCartHandler = () => {
    route.push("/CartPage");
  };

  const ctx = useContext(DataContext);
  const items = ctx.items;
  const totalAmount = ctx.totalAmount;

  const OrderHandler = () => {
    route.push("./Checkout");
  };

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
          {ctx.totalAmount === 0 ? (
            <h2 className={style.Empty}>Your Cart Is Empty</h2>
          ) : (
            items?.map((item) => {
              return (
                <Product
                  key={Math.random()}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  amount={item.amount}
                />
              );
            })
          )}
        </div>
        <div className={style.BottomPart}>
          <h2>Total: {Math.abs(totalAmount.toFixed(2))}$</h2>
          <div className={style.CheckOut}>
            <button onClick={ViewCartHandler}>View Cart</button>
            <button onClick={OrderHandler}>Check Out</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalCart;
