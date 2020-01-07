import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/Home/Home";
import Login from "../containers/Auth/Login/Login";
import Signup from "../containers/Auth/Signup/Signup";

class Routes extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    );
    return <div>{routes}</div>;
  }
}
export default Routes;
