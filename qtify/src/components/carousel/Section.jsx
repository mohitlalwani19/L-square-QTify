import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card";
import Carousel from "./Carousel";
import { CircularProgress } from "@mui/material";

let Section = ({ data, type, title }) => {
  let [carouselToggle, setCarouselToggle] = useState(true);
  let handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => {
                return <Card data={item} type={type} />;
              })}
            </div>
          ) : (
            <Carousel
              data={data}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
