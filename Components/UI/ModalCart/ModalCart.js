import { Fragment } from "react";
import style from "./ModalCart.module.css";
import { HiX } from "react-icons/hi";

const Modal = (props) => {
  return <div className={style.Modal}>{props.children}</div>;
};

const ModalCart = () => {
  return (
    <Fragment>
      <Modal>
        <div className={style.Parrent}>
          <div className={style.Container}>
            <div className={style.TopPart}>
              <h1>Your Cart</h1>
              <button>
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
        </div>
      </Modal>
    </Fragment>
  );
};

export default ModalCart;
