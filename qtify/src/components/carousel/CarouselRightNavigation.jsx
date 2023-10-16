import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../assets/rightArrow.svg";

let CarouselRightNavigation = () => {
  let swiper = useSwiper();
  let [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, [isEnd, swiper, swiper.isEnd]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightNavigation;
