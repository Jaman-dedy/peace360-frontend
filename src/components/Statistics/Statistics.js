import React from "react";
import Statistic from "./Statistic/Statistic";
import classes from "./Statistics.module.scss";

const statistics = () => (
  <div className={classes.Statistics}>
    <Statistic />
  </div>
);

export default statistics;
