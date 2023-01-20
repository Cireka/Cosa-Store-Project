import { Fragment } from "react";
import style from "./About.module.css";
import Image from "next/image";

import Image1 from "../../public/AboutPage/about-01.jpg";
import Image2 from "../../public/AboutPage/about-02.jpg";

const AboutComp = () => {
  return (
    <Fragment>
      <section className={style.Section}>
        <div className={style.BackgroundImage}>
          <h1>About</h1>
        </div>
        <div className={style.infoContainer}>
          <div className={style.ParagraphParrent}>
            <h2>Our Story</h2>
            <p>
              Coza Store was born out of a passion for fashion. Our founders, a
              group of fashion enthusiasts, saw a gap in the market for
              high-quality, affordable clothing and decided to create their own
              e-commerce company to fill it. We launched Coza Store with a small
              collection of clothing, but as our customer base grew, so did our
              inventory. Today, we offer a wide range of clothing for men,
              women, and children, with a focus on timeless, versatile styles
              that can be dressed up or down. Our team works hard to curate a
              collection of clothing that is not only stylish but also ethically
              and sustainably made. We are constantly searching for new and
              exciting brands that align with our values, and we are committed
              to providing our customers with a shopping experience that is both
              enjoyable and responsible. We also pride ourselves on our
              exceptional customer service. Our team is always available to
              answer any questions and help you find the perfect outfit for any
              occasion. Thank you for choosing Coza Store for all your fashion
              needs.
            </p>
            <p>
              As we grew, we expanded our product offerings to include a wide
              range of clothing for men, women, and children of all ages. From
              casual wear to formal wear, we have something for everyone. We
              also offer a variety of accessories such as jewelry, bags and
              shoes to complement our clothing collection. We work closely with
              our suppliers and vendors to ensure that we are able to offer our
              customers the latest fashion trends at affordable prices. Our team
              of buyers and stylists travel the world to find the best products,
              and they carefully curate our inventory to make sure that we are
              always offering the most stylish, high-quality clothing.
            </p>
            <p>
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
          </div>
          <div className={style.imgParrent}>
            <Image className={style.Image} src={Image1} alt="Picture" />
          </div>
        </div>
        <div className={style.infoContainer2}>
          <div className={style.imgParrent}>
            <Image className={style.Image} src={Image2} alt="Picture" />
          </div>
          <div className={style.ParagraphParrent2}>
            <h2>Our Mission</h2>
            <p>
              Coza Store was founded with the mission to make fashion accessible
              and affordable for everyone. We believe that everyone should have
              the opportunity to look and feel their best, regardless of their
              budget. Our mission is to provide our customers with a wide range
              of high-quality clothing at prices that are fair and affordable.
              We are constantly expanding and updating our inventory to offer
              the latest styles and trends. We are also committed to ethical and
              sustainable fashion. We carefully curate our collection to include
              clothing that is made with respect for people and the planet. We
              believe that fashion should be enjoyed without guilt or
              compromise. Our goal is to be more than just an e-commerce
              company, we strive to be a community of fashion-forward
              individuals who care about style, ethics, and affordability. We
              are dedicated to providing our customers with the best possible
              shopping experience. From the moment you visit our website to the
              moment you receive your package, we are here to help. Thank you
              for choosing Coza Store as your go-to destination for fashion.
            </p>
            <div className={style.Quotes}>
              <p>
                Creativity is just connecting things. When you ask creative
                people how they did something, they feel a little guilty because
                they didn't really do it, they just saw something. It seemed
                obvious to them after a while.
              </p>
              <span>Steve Job's</span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default AboutComp;
