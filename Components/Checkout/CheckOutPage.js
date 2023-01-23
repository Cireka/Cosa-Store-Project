import style from "./CheckOutPage.module.css";
import React from "react";
import { useContext, useState } from "react";
import DataContext from "../Context/coza-context";
import { VscChromeClose } from "react-icons/vsc";
import { BiMinus, BiPlus } from "react-icons/bi";
import Image from "next/image";
import { useRef } from "react";
import Inputmask from "react-input-mask";
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
  const ctx = useContext(DataContext);
  const items = ctx.items;

  const [phoneValid, setPhoneValid] = useState(true);
  const [cardValid, setCardValid] = useState(true);

  const [cardDateValid, setCardDateValid] = useState(true);
  const [cardSecretValid, setCardSecretValid] = useState(true);

  const CardCVCBlurHandler = (event) => {
    if (event.target.value.length !== 3) {
      setCardSecretValid(false);
    }
  };
  const CardCVCChangeHandler = (event) => {
    if (event.target.value.length === 3) {
      setCardSecretValid(true);
    }
  };

  const CardExpiryBlurHandler = (event) => {
    if (event.target.value.length !== 5) {
      setCardDateValid(false);
    }
  };
  const CardExpiryChangeHandler = (event) => {
    if (event.target.value.length === 5) {
      let month = event.target.value.split("/")[0];
      let year = event.target.value.split("/")[1];
      if (month > 12 || month < 1 || year < 23) {
        setCardDateValid(false);
      } else {
        setCardDateValid(true);
      }
    }
  };

  const CardBlurHandler = (event) => {
    if (event.target.value.length !== 19) {
      setCardValid(false);
    }
  };
  const cardOnChangeHandler = (event) => {
    if (event.target.value.length === 19) {
      setCardValid(true);
    }
  };

  const phoneBlurHandler = (event) => {
    if (event.target.value.length !== 11) {
      setPhoneValid(false);
    }
  };
  const phoneOnChangeHandler = (event) => {
    if (event.target.value.length === 11) {
      setPhoneValid(true);
    }
  };
  const submitHandler = (event) => {
    event.prevent.default;
  };

  return (
    <section className={style.CheckoutSection}>
      <div className={style.CheckoutContainer}>
        <form onSubmit={submitHandler}>
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
                <Inputmask
                  className={!phoneValid && style.ErrorInput}
                  maskPlaceholder={null}
                  mask="999 999 999"
                  required
                  onChange={phoneOnChangeHandler}
                  onBlur={phoneBlurHandler}
                  type="text"
                  placeholder="Phone Number"
                />
                <input required type="email" placeholder="E-Mail" />
              </div>
              {!phoneValid && (
                <p className={style.ErrorMessage}>
                  Please Enter Valid Phone Number
                </p>
              )}
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
                <h2 className={style.MiddleInputTitle}>Card Information</h2>
                <Inputmask
                  className={!cardValid ? style.ErrorInput : style.CreditCard}
                  onBlur={CardBlurHandler}
                  onChange={cardOnChangeHandler}
                  maskPlaceholder={null}
                  mask="9999-9999-9999-9999"
                  required
                  type="text"
                  placeholder="Credit Card Number"
                />
              </div>
              {!cardValid && (
                <p className={style.ErrorMessage}>
                  Please Enter Valid Credit Card Number
                </p>
              )}
            </div>
            <div className={style.PersonalInfoParrent}>
              <div className={style.CardInformationContainer}>
                <div className={style.CreditCardDetails}>
                  <div className={style.CreditCardBox}>
                    <h2>Valid Through</h2>
                    <Inputmask
                      maskPlaceholder={null}
                      onBlur={CardExpiryBlurHandler}
                      onChange={CardExpiryChangeHandler}
                      placeholder="MM/YY"
                      mask="99/99"
                      required
                      className={style.CreditCard}
                      type="text"
                    />
                  </div>
                  <div className={style.CreditCardBox}>
                    <h2>CVC Code</h2>
                    <Inputmask
                      maskPlaceholder={null}
                      onBlur={CardCVCBlurHandler}
                      onChange={CardCVCChangeHandler}
                      required
                      mask="999"
                      className={style.CreditCard}
                      type="password"
                      placeholder="***"
                    />
                  </div>
                </div>
                {!cardDateValid && (
                  <p className={style.ErrorMessage}>
                    Please Enter Valid Credit Card Date
                  </p>
                )}
                {!cardSecretValid && (
                  <p className={style.ErrorMessage}>
                    Please Enter Valid CVC Code
                  </p>
                )}
              </div>
            </div>
            <button type="submit" className={style.OrderBUtton}>
              Make A Purchase
            </button>
          </div>
        </form>
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
