import { Fragment } from "react";
import style from "./DetailedProductView.module.css";

import Image from "next/image";

import image1 from "../../public/Detailed Products Pic/product-detail-02.jpg";
import image2 from "../../public/Detailed Products Pic/product-detail-01.jpg";
import image3 from "../../public/Detailed Products Pic/product-detail-03.jpg";

import { useState } from "react";

const DetailedProductView = (props) => {
  const [image, setImage] = useState(image1);

  return (
    <Fragment>
      <div onClick={props.modalManager} className={style.Modal}></div>
      <div className={style.PannelCart}>
        <div className={style.Container}>
          <div className={style.SmallImagesParrent}>
            <Image
              onClick={() => setImage(image1)}
              quality={100}
              alt="Product Image"
              className={`${style.imgSmall} ${
                image === image1 && style.Border
              }`}
              src={image1}
            />
            <Image
              onClick={() => setImage(image2)}
              quality={100}
              alt="Product Image"
              className={`${style.imgSmall} ${
                image === image2 && style.Border
              }`}
              src={image2}
            />
            <Image
              onClick={() => setImage(image3)}
              quality={100}
              alt="Product Image"
              className={`${style.imgSmall} ${
                image === image3 && style.Border
              }`}
              src={image3}
            />
          </div>
          <Image alt="Product Image" className={style.img} src={image} />
          <div className={style.Details}>
            <h2>Lightweight Jacket</h2>
            <p className={style.Price}>$55.99</p>
            <p className={style.Description}>
              Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
              ligula. Mauris consequat ornare feugiat.
            </p>
            <div className={style.ParrentOfInputs}>
              <div className={style.inputParrent}>
                <p>Select Size</p>
                <select id="Size">
                  <option>Size S</option>
                  <option>Size M</option>
                  <option>Size L</option>
                  <option>Size XL</option>
                </select>
              </div>
              <div className={style.inputParrent}>
                <p>Select Color</p>
                <select id="Colors">
                  <option>Blue</option>
                  <option>Red</option>
                  <option>Gray</option>
                  <option>White</option>
                </select>
              </div>
              <button className={style.button}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailedProductView;
