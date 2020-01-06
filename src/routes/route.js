import React, { Component } from "react";
import Layout from "../hoc/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/Home/Home";

class Routes extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}
export default Routes;
