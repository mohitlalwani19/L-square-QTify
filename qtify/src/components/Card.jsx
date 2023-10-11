import React from "react";
import styles from "./Card.module.css";
import cardImg from "../assets/thumbnail.png";

let Card = () => {
  return (
    <div className={styles.cardFrame}>
      <div className={styles.card}>
        <img src={cardImg} alt="song poster" />
        <div className={styles.btn}>100 Follows</div>
      </div>
      <div>New Bollywood</div>
    </div>
  );
};

export default Card;