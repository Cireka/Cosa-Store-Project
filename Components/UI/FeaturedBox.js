import style from "./FeaturedBox.module.css";
import Link from "next/link";
import Image from "next/image";

const FeaturedBox = (props) => {
  return (
    <Link href="#" className={style.featuredSection}>
      <div className={style.FeaturedboxParrent}>
        <div className={style.imgParrent}>
          <h1 className={style.title}>{props.title}</h1>
          <p className={style.par}>{props.par}</p>
          <p className={style.shopNow}>Shop Now</p>
          <Image alt="Image" className={style.Featuredimg} src={props.img} />
        </div>
      </div>
    </Link>
  );
};
export default FeaturedBox;
