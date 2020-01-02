import React from "react";
import classes from "./Toolbar.module.scss";
import MenuItems from "../MenuItems/MenuItems";
import Logo from "../../Logo/Logo";

const toolbar = props => (
  <nav className={classes.Toolbar}>
    <Logo />
    <MenuItems />
    <div>Search</div>
  </nav>
);

export default toolbar;
