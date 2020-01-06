import React from "react";
import classes from "./VisionMission.module.scss";

const visionMission = () => (
  <div className={classes.VisionMission}>
    <div className={classes.Mission}>
      <h2>Our mission</h2>
      <span>
        Promote transformative peace narratives through peacebuilding
        information and education.
      </span>
    </div>
    <div className={classes.Vision}>
      <h2>Our vision</h2>
      <span>
        Inspire, connect, and amplify global peacebuilding efforts with local
        stories.
      </span>
    </div>
  </div>
);

export default visionMission;
