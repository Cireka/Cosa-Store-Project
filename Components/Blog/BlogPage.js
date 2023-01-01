import { Fragment } from "react";
import style from "./Blog.module.css";
import Image from "next/image";
import Link from "next/link";

import Image1 from "../../public/BlogPage/blog-01.jpg";
import Image2 from "../../public/BlogPage/blog-02.jpg";
import Image3 from "../../public/BlogPage/blog-03.jpg";

import Image4 from "../../public/BlogPage/product-min-01.jpg";
import Image5 from "../../public/BlogPage/product-min-02.jpg";
import Image6 from "../../public/BlogPage/product-min-03.jpg";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { SlMagnifier } from "react-icons/sl";

const BlogPage = () => {
  const BlogTemplate = (props) => {
    return (
      <Fragment>
        <div className={style.Blog}>
          <div className={style.ImageParrent}>
            <Image className={style.Image} alt="Blog Image" src={props.Image} />
          </div>
          <div className={style.BlogParParrent}>
            <h1>{props.Title}</h1>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
              dictum vitae sapien eu varius
            </p>
          </div>
          <div className={style.CredentialsParrent}>
            <p>By Admin | StreetStyle, Fashion, Couple | 8 Comments</p>
            <button>
              CONTINUE READING <HiOutlineArrowNarrowRight />
            </button>
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <section className={style.Section}>
      <div className={style.backgroundImage}>Blog</div>
      <div className={style.FlexConatiner}>
        <div className={style.BlogParrent}>
          <BlogTemplate
            Title={"8 Inspiring Ways to Wear Dresses in the Winter"}
            Image={Image1}
          />
          <BlogTemplate
            Title={"The Great Big List of Men’s Gifts for the Holidays"}
            Image={Image2}
          />
          <BlogTemplate
            Title={"5 Winter-to-Spring Fashion Trends to Try Now"}
            Image={Image3}
          />
          <div className={style.pageNav}>
            <button className={style.main}>1</button>
            <button>2</button>
          </div>
        </div>
        <div className={style.SidePannelParrent}>
          <div className={style.SarchParrent}>
            <SlMagnifier className={style.sarchIcon} />
            <input
              className={style.SarchInput}
              placeholder="Sarch..."
              type="email"
            />
          </div>

          <div className={style.CategoriesParrent}>
            <h4>Categories</h4>
            <div className={style.Categories}>
              <p>Fashion</p>
              <p>Beauty</p>
              <p>Street Style</p>
              <p>Life Style</p>
              <p>DIY & Crafts</p>
            </div>
          </div>
          <div className={style.FeaturedProductsParrent}>
            <h4>Featured Products</h4>
            <div className={style.FeaturedPar}>
              <div>
                <Image alt="product image" src={Image4} />
              </div>
              <div className={style.productInfoParrent}>
                <p>White Shirt With Pleat Detail Back</p>
                <span>$19.00</span>
              </div>
            </div>
            <div className={style.FeaturedPar}>
              <div>
                <Image alt="product image" src={Image5} />
              </div>
              <div className={style.productInfoParrent}>
                <p>White Shirt With Pleat Detail Back</p>
                <span>$19.00</span>
              </div>
            </div>
            <div className={style.FeaturedPar}>
              <div>
                <Image alt="product image" src={Image6} />
              </div>
              <div className={style.productInfoParrent}>
                <p>White Shirt With Pleat Detail Back</p>
                <span>$19.00</span>
              </div>
            </div>
          </div>
          <div className={style.ArchivePar}>
            <h4>Archive</h4>
            <div className={style.InfoParrent}>
              <p>July 2022</p>
              <p>(9)</p>
            </div>
            <div className={style.InfoParrent}>
              <p>June 2022</p>
              <p>(39)</p>
            </div>
            <div className={style.InfoParrent}>
              <p>May 2022</p>
              <p>(29)</p>
            </div>
            <div className={style.InfoParrent}>
              <p>April 2022</p>
              <p>(22)</p>
            </div>
            <div className={style.InfoParrent}>
              <p>March 2022</p>
              <p>(32)</p>
            </div>
            <div className={style.InfoParrent}>
              <p>February 2022</p>
              <p>(21)</p>
            </div>
            <div className={style.InfoParrent}>
              <p>January 2022</p>
              <p>(11)</p>
            </div>
            <div className={style.InfoParrent}>
              <p>December 2021</p>
              <p>(19)</p>
            </div>
          </div>
          <div className={style.TagsParrent}>
            <h4>Tags</h4>
            <div className={style.Tags}>
              <Link href="#">Fashion</Link>
              <Link href="#">Lifestyle</Link>
              <Link href="#">Denim</Link>
              <Link href="#">StreetStyle</Link>
              <Link href="#">Crafts</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
