import React from "react";
import Button from "./Button";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

let Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Button children="Give Feedback" />
    </nav>
  );
};

export default Navbar;
