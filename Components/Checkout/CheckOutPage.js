import style from "./CheckOutPage.module.css";
import React from "react";

const CheckOutPage = () => {
  return (
    <section className={style.CheckoutSection}>
      <div className={style.CheckoutContainer}>
        <div className={style.CheckoutFrom}>
          <h1>Check Out</h1>
          <p>Shipping Details</p>
          <div className={style.PersonalInfoParrent}>
            <h2>Personal Information</h2>
            <div className={style.PersonalInfoContainer}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className={style.PersonalInfoParrent}>
            <h2>Contact Information</h2>
            <div className={style.PersonalInfoContainer}>
              <input type="number" placeholder="Phone Number" />
              <input type="email" placeholder="E-Mail" />
            </div>
          </div>
          <div className={style.PersonalInfoParrent}>
            <h2>Delivery Address</h2>
            <div className={style.PersonalInfoContainer}>
              <input
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
                className={style.CreditCard}
                type="text"
                placeholder="Name On The Card"
              />
              <h2>Card Information</h2>
              <input
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
                    className={style.CreditCard}
                    type="number"
                    placeholder="MM/YY"
                  />
                </div>
                <div className={style.CreditCardBox}>
                  <h2>CVC Code</h2>
                  <input
                    className={style.CreditCard}
                    type="number"
                    placeholder="***"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.CheckoutItems}>
          <h1>Check Out</h1>
          <p>Shipping Details</p>
        </div>
      </div>
    </section>
  );
};

export default CheckOutPage;
