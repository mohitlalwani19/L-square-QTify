import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card";
import Carousel from "./Carousel";
import BasicTabs from "./FilterTabs";
import { CircularProgress } from "@mui/material";

let Section = ({
  data,
  type,
  title,
  filteredDataValues = [],
  value = 0,
  handleChange = null,
}) => {
  let [toggle, setToggle] = useState(false);

  let handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {toggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      {type === "song" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {toggle ? (
            <div className={styles.wrapper}>
              {filteredDataValues.map((item) => {
                return <Card data={item} type={type} />;
              })}
            </div>
          ) : (
            <Carousel
              data={filteredDataValues}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
