import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./MenuItems.module.scss";
import MenuItem from "./MenuItem/MenuItem";

toast.configure();

const menuItems = (props) => {
  return (
    <div>
      <div className={classes.MenuItems}>
        <MenuItem link="/" exact>
          HOME
        </MenuItem>
        <MenuItem link="/consultResearch">CONSULTANCY & RESEARCH</MenuItem>
        <MenuItem link="/getInvolved">GET INVOLVED</MenuItem>
        <MenuItem link="/contact">CONTACT</MenuItem>
        <MenuItem link="/aboutUs">ABOUT US</MenuItem>
      </div>
      <ToastContainer />
    </div>
  );
};

export default menuItems;
