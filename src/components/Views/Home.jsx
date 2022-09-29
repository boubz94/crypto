import React from "react";
import Liste from "../Items/Liste";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.subTitledContainer}>
        <h3>List Of Crypto</h3>
      </div>

      <div className={classes.list}>
        <Liste />
      </div>
    </div>
  );
};

export default Home;
