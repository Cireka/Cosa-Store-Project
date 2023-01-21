import style from "./cart.module.css";

import { useContext } from "react";
import DataContext from "../Context/coza-context";
import Image from "next/image";

import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";

import { VscChromeClose } from "react-icons/vsc";


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
  const removeItemHandler = () => {
    ctx.comletlyRemoveItem(props.id);
  };
  return (
    <div className={style.CartItemParrent}>
      <div className={style.Product}>
        <div onClick={removeItemHandler} className={style.imgContainer}>
          <button className={style.DeleteItemButton}>
            <VscChromeClose />
          </button>
          <div className={style.imgParrent}>
            <Image className={style.img} alt="Image" src={props.img} />
          </div>
        </div>
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
            {ctx.items[0] ? (
              items?.map((item) => {
                return (
                  <CartItems
                    key={Math.random()}
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
        <div className={style.SummaryParrent}>
          <h2>CART TOTALS</h2>
          <div className={style.SubTotal}>
            <h2>Subtotal:</h2>
            <p>${Math.abs(ctx.totalAmount.toFixed(2))}</p>
          </div>
          <div className={style.Border}></div>
          <div className={style.ShippingParrent}>
            <div className={style.ShippingPar}>
              <h2>Shipping:</h2>
              <div className={style.RightSideParrent}>
                <p>
                  There are no shipping methods available. Please double check
                  your address, or contact us if you need any help.
                </p>
                <h3 className={style.ShippingTitle}>Calculate Shipping</h3>
                <select
                  className={style.Select}
                  placeholder="Select The Country"
                >
                  <option>USA</option>
                  <option>UK</option>
                </select>
                <input placeholder="State / Region" type="text" />
                <input placeholder="Postcode / Zip" type="text" />
                <button className={style.TotalButton}>Update Totals</button>
              </div>
            </div>
            <div className={style.BottomPar}>
              <h2>Total:</h2>
              <p>${Math.abs(ctx.totalAmount.toFixed(2))}</p>
            </div>
            <button className={style.OrderButton}>Check Out</button>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
