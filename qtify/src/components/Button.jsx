import React from "react";
import styles from "./Button.module.css";

let Button = ({ children }) => {
  return <div className={styles.btn}>{children}</div>;
};

export default Button;
