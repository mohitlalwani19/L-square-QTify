import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

let Card = ({ data, type }) => {
  let getCard = (type) => {
    switch (type) {
      case "album": {
        let { image, follows, title } = data;
        return (
          <div className={styles.cardFrame}>
            <div className={styles.card}>
              <img src={image} alt="song poster" />
              <div className={styles.banner}>
                <Chip
                  label={`${follows} Follows`}
                  size="small"
                  className={styles.chip}
                />
              </div>
            </div>
            <div className={styles.title}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <div></div>;
    }
  };

  return getCard(type);
};

export default Card;
