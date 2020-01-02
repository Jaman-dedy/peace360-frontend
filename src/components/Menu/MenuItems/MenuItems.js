import React from "react";
import classes from "./MenuItems.module.scss";
import MenuItem from "./MenuItem/MenuItem";

const menuItems = props => (
  <div className={classes.MenuItems}>
    <MenuItem link="/" exact>
      HOME
    </MenuItem>
    <MenuItem link="/consul_research">CONSULTANCY & RESEARCH</MenuItem>
    <MenuItem link="/get_involved">GET INVOLVED</MenuItem>
    <MenuItem link="/contact">CONTACT</MenuItem>
    <MenuItem link="/about_us">ABOUT US</MenuItem>
  </div>
);

export default menuItems;
