import style from "./CheckOutPage.module.css";
import React from "react";
import { useContext } from "react";
import DataContext from "../Context/coza-context";
import { VscChromeClose } from "react-icons/vsc";
import { BiMinus, BiPlus } from "react-icons/bi";
import Image from "next/image";
import { useRef } from "react";

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

const CheckOutPage = () => {
  const cardNumberRef = useRef();

  function formatCardNumber(input) {
    return input
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  }

  const creditCardChangeHandler = (event) => {
    const input = event.target.value;
    const formattedInput = formatCardNumber(input);
    event.target.value = formattedInput;
  };

  function formatedDate(input) {
    return input
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{2})/g, "$1/")
      .trim();
  }

  const creditCardDateChangeHandler = (event) => {
    if (event.target.value.length <= 5) {
      const input = event.target.value;
      const formattedInput = formatedDate(input);
      event.target.value = formattedInput;
    }
  };

  function formatedPhone(input) {
    return input
      .replace(/[^\d]/g, "")
      .replace(/(.{3})/g, "$1 ")
      .trim();
  }

  const phoneNumberChangeHandler = (event) => {
    const input = event.target.value;
    const formattedInput = formatedPhone(input);
    event.target.value = formattedInput;
  };

  const ctx = useContext(DataContext);
  const items = ctx.items;
  return (
    <section className={style.CheckoutSection}>
      <div className={style.CheckoutContainer}>
        <div className={style.CheckoutFrom}>
          <h1>Check Out</h1>
          <p>Shipping Details</p>
          <div className={style.PersonalInfoParrent}>
            <h2>Personal Information</h2>
            <div className={style.PersonalInfoContainer}>
              <input required type="text" placeholder="First Name" />
              <input required type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className={style.PersonalInfoParrent}>
            <h2>Contact Information</h2>
            <div className={style.PersonalInfoContainer}>
              <input
                required
                onChange={phoneNumberChangeHandler}
                type="text"
                maxLength="11"
                placeholder="Phone Number"
              />
              <input required type="email" placeholder="E-Mail" />
            </div>
          </div>
          <div className={style.PersonalInfoParrent}>
            <h2>Delivery Address</h2>
            <div className={style.PersonalInfoContainer}>
              <input
                required
                className={style.Address}
                type="text"
                placeholder="Address"
              />
            </div>
          </div>
          <div className={style.PersonalInfoParrent}>
            <div className={style.CardInformationContainer}>
              <h2>Payment Info</h2>
              <input
                required
                className={style.CreditCard}
                type="text"
                placeholder="Name On The Card"
              />
              <h2>Card Information</h2>
              <input
                required
                maxLength="19"
                onChange={creditCardChangeHandler}
                ref={cardNumberRef}
                className={style.CreditCard}
                type="text"
                placeholder="Credit Card Number"
              />
            </div>
          </div>
          <div className={style.PersonalInfoParrent}>
            <div className={style.CardInformationContainer}>
              <div className={style.CreditCardDetails}>
                <div className={style.CreditCardBox}>
                  <h2>Valid Through</h2>
                  <input
                    required
                    maxLength="5"
                    onChange={creditCardDateChangeHandler}
                    className={style.CreditCard}
                    type="text"
                    placeholder="MM/YY"
                  />
                </div>
                <div className={style.CreditCardBox}>
                  <h2>CVC Code</h2>
                  <input
                    required
                    maxLength="3"
                    className={style.CreditCard}
                    type="password"
                    placeholder="***"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className={style.OrderBUtton}>Make A Purchase</button>
        </div>
        <div className={style.CheckoutItems}>
          <h1>Your Orders</h1>
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
              {Math.abs(ctx.totalAmount.toFixed(2)) === 0 ? (
                <h2>Your Cart Is Empty</h2>
              ) : (
                <h2>Grand Total Of ${Math.abs(ctx.totalAmount.toFixed(2))}</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOutPage;
