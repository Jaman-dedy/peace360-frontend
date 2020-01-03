import React from "react";
import Search from "../../../containers/Search/Search";
import classes from "./Toolbar.module.scss";
import MenuItems from "../MenuItems/MenuItems";
import Logo from "../../Logo/Logo";

const toolbar = props => (
  <nav className={classes.Toolbar}>
    <Logo />
    <MenuItems />
    <Search />
  </nav>
);

export default toolbar;
