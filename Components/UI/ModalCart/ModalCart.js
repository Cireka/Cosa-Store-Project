import { Fragment } from "react";
import style from "./ModalCart.module.css";
import { HiX } from "react-icons/hi";



const ModalCart = (props) => {
  return (
    <Fragment>
      {/* <Modal onClose={props.onClose}></Modal> */}
      <div className={style.Container}>
        <div className={style.TopPart}>
          <h1>Your Cart</h1>
          <button onClick={props.onClose}>
            <HiX />
          </button>
        </div>
        <div className={style.ProductsParrent}>
          <h1>Your Cart</h1>
          <h1>Your Cart</h1>
          <h1>Your Cart</h1>
        </div>
        <div>
          <button>Buy</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalCart;
