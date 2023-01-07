import style from "./cart.module.css";
import { Fragment } from "react";

import { useContext } from "react";
import DataContext from "../Context/coza-context";
import Image from "next/image";

import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";

const CartItems = (props) => {
  const ctx = useContext(DataContext);
  const removeHandler = () => {
    ctx.removeItem(props.id);
  };
  const totalamount = props.amount;
  const totalCost = props.price * props.amount;
  const addItemHandler = () => {
    ctx.addItem({
      name: props.name,
      price: props.price,
      image: props.img,
      id: props.id,
      amount: props.amount,
    });
  };
  return (
    <div className={style.CartItemParrent}>
      <div className={style.Product}>
        <Image src={props.img} />
        <h2>{props.name}</h2>
      </div>
      <h2>$ {props.price}</h2>
      <div className={style.AmmountParrent}>
        <BiMinus className={style.icons} onClick={removeHandler}></BiMinus>
        <h2>{totalamount}</h2>
        <BiPlus className={style.icons} onClick={addItemHandler}></BiPlus>
      </div>
      <h2 className={style.Total}>$ {totalCost.toFixed(2)}</h2>
    </div>
  );
};

const Cart = () => {
  const ctx = useContext(DataContext);
  const items = ctx.items;

  return (
    <Fragment>
      <section className={style.SecitonCart}>
        <div className={style.CartContainer}>
          <div className={style.ItemsParrent}>
            <div className={style.Titles}>
              <h2 className={style.FirstChild}>Product</h2>
              <h2>Price</h2>
              <h2>Quantity</h2>
              <h2>Total</h2>
            </div>
            <div className={style.MaxHeight}>
              {items.amount ? (
                items?.map((item) => {
                  return (
                    <CartItems
                      name={item.name}
                      img={item.image}
                      price={item.price}
                      amount={item.amount}
                      id={item.id}
                    />
                  );
                })
              ) : (
                <div className={style.CartEmpty}>
                  <h1>Your Cart Is Empty</h1>
                </div>
              )}
            </div>
            <div className={style.Coupon}>
              <input placeholder="Coupon Code" type="text" />
              <button>Apply Coupon</button>
            </div>
          </div>
          <div className={style.SummaryParrent}></div>
        </div>
      </section>
    </Fragment>
  );
};

export default Cart;
