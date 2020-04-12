import React from "react";
import classes from "./Statistic.module.scss";
import Wrapper from "../../../hoc/Wrapper/Wrapper";

const statistic = props => (
  <Wrapper>
    {" "}
    <div>
      <div className={classes.Number}>45</div>
      <div className={classes.Title}>countries covered</div>
    </div>
    <div>
      <div className={classes.Number}>45 000</div>
      <div className={classes.Title}>Number of activist</div>
    </div>
    <div>
      <div className={classes.Number}>310</div>
      <div className={classes.Title}>Inspiring stories</div>
    </div>
    <div>
      <div className={classes.Number}>1000</div>
      <div className={classes.Title}>Recognition received</div>
    </div>
  </Wrapper>
);

export default statistic;
