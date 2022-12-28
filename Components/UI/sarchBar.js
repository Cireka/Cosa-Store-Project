import { Fragment } from "react";
import style from "./SarchBar.module.css";

import { SlMagnifier } from "react-icons/sl";

const SarchBar = () => {
  return (
    <div className={style.sarchPar}>
      <button>
        <SlMagnifier className={style.Icon} />
      </button>
      <input type="search" placeholder="Sarch..." />
    </div>
  );
};

export default SarchBar;
