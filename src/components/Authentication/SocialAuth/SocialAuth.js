import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import classes from "./SocialAuth.module.scss";

const socialAuth = props => (
  <Aux>
    <h2>Join us today</h2>
    <div className={classes.SocialAuth}>
      <i className="fab fa-facebook" style={{ color: "#3b5998" }}></i>
      <i className="fab fa-google" style={{ color: "#dc4e41" }}></i>
      <i className="fab fa-twitter" style={{ color: "#55acee" }}></i>
      <i className="fab fa-linkedin" style={{ color: "#1377b7" }}></i>
    </div>
  </Aux>
);
export default socialAuth;
