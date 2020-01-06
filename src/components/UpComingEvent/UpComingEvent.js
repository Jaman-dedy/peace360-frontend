import React from "react";
import Carousels from "./Carousels/Carousels";
import classes from "./UpComingEvent.module.scss";

const upComingEvent = props => (
  <div className={classes.UpComing}>
    <div className={classes.Title}>
      <span>Up coming events</span>
    </div>
    <Carousels />
  </div>
);
export default upComingEvent;
