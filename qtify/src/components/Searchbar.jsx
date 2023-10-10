import React from "react";
import { ReactComponent as SearchIcon } from "../assets/searchIcon.svg";
import styles from "./Searchbar.module.css";

let Searchbar = ({ text }) => {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder={text} />
      <button className={styles.sbutton}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default Searchbar;
