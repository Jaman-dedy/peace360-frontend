import React, { Component } from "react";
import Aux from "../Aux/Aux";
import classes from "./Layout.module.scss";
import Toolbar from "../../components/Menu/Toolbar/Toolbar";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
