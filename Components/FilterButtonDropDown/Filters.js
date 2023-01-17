import { Fragment } from "react";
import style from "./Filters.module.css";

import { GiPlainCircle } from "react-icons/gi";

const Filters = (props) => {
  return (
    <Fragment>
      <div className={style.Parrent}>
        <div className={style.listParrent}>
          <ul>
            <h2>Sort By</h2>
            <li>Popularity</li>
            <li>Average rating</li>
            <li onClick={props.LowToHigh}>Price: Low to High</li>
            <li onClick={props.HighToLow}>Price: High to Low</li>
          </ul>
        </div>
        <div className={style.listParrent}>
          <ul>
            <h2>Price</h2>
            <li>All</li>
            <li>$0.00 - $50.00</li>
            <li>$50.00 - $100.00</li>
            <li>$100.00 - $150.00</li>
            <li>$150.00 - $200.00</li>
            <li>$200.00+</li>
          </ul>
        </div>
        <div className={style.listParrent}>
          <ul>
            <h2>Color</h2>
            <li>
              <GiPlainCircle color="black" /> Black
            </li>
            <li>
              <GiPlainCircle color="#4285F4" /> Blue
            </li>
            <li>
              <GiPlainCircle color="Gray" /> Gray
            </li>
            <li>
              <GiPlainCircle color="#82b74b" /> Green
            </li>
            <li>
              <GiPlainCircle color="#c83349" /> Red
            </li>
            <li>
              <GiPlainCircle
                style={{ border: "1px solid gray", borderRadius: "50%" }}
                color="White"
              />{" "}
              White
            </li>
          </ul>
        </div>
        <div>
          <h1 className={style.TagsTitle}>Tags</h1>
          <div className={style.TagsParrent}>
            <h2>Fashion</h2>
            <h2>Lifestyle</h2>
            <h2>Denim</h2>
            <h2>Streetstyle</h2>
            <h2>Crafts</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Filters;
