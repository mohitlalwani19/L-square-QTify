import React from "react";
import Button from "./Button";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

let Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Searchbar text="Search an album of your choice"/>
      <Button children="Give Feedback" />
    </nav>
  );
};

export default Navbar;
