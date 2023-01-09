import { Fragment } from "react";
import style from "./Slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import swiperImage1 from "../../public/slideImgs/slide-01.jpg";
import swiperImage3 from "../../public/slideImgs/slide-03.jpg";
import image4 from "../../public/slideImgs/slide04.jpg";

import { Autoplay, EffectFade } from "swiper";

const Slider = () => {
  // const [slideStyle, setSlideStyle] = useState(style.ShownSlide1);

  // const slideChangeHandler = (swiper) => {
  //   if (swiper.activeIndex === 2) {
  //     setSlideStyle(style.ShownSlide2);
  //     console.log(slideStyle);
  //   }
  // };

  return (
    <section>
      <div className={style.swiperParrent}>
        <Swiper
          speed={1500}
          modules={[Autoplay, EffectFade]}
          allowTouchMove={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className={style.swiper}
          slideNextClass={style.toShowSlide}
          slideActiveClass={style.ShownSlide}
          slidePrevClass={style.toShowSlide}
        >
          <SwiperSlide>
            <h2 className={`${style.default} ${style.FirstBottomH}`}>
              New Season
            </h2>
            <h3 className={`${style.default} ${style.FirstTopH} `}>
              Womans Collection 2023
            </h3>
            <button className={`${style.default} ${style.ShopButton}`}>
              Shop now
            </button>
            <Image
              quality={100}
              className={style.slideImage}
              src={swiperImage1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <h2 className={`${style.default} ${style.SecondTopH}`}>
              Mans Collection 2023
            </h2>
            <h3 className={`${style.default} ${style.SecondBottomH} `}>
              New Arrivals
            </h3>
            <button className={`${style.default} ${style.ShopButton}`}>
              Shop now
            </button>
            <Image
              quality={100}
              className={style.slideImage}
              src={swiperImage3}
            />
          </SwiperSlide>
          <SwiperSlide>
            <h2 className={`${style.default} ${style.ThiredTopH}`}>
              Woman New Season
            </h2>
            <h3 className={`${style.default} ${style.ThiredBottomH} `}>
              Tops and Jeans
            </h3>
            <button className={`${style.default} ${style.ShopButton}`}>
              Shop now
            </button>
            <Image quality={100} className={style.slideImage} src={image4} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
