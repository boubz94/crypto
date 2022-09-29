import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div>
          <img
            className={classes.logo}
            src="https://assets-global.website-files.com/5f15b50525745912903311ad/5f15b505dd58c115cd49d484_Logo-full-white.svg"
            alt=""
          />
        </div>

        <div className={classes.title}>
          <h1>title</h1>
        </div>
        <Link to={"/"} className={classes.btnWatch}>
          WatchList
        </Link>
      </header>
    </>
  );
};

export default Header;
