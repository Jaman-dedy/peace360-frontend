import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/Home/Home";
import Login from "../containers/Auth/Login/Login";
import Signup from "../containers/Auth/Signup/Signup";
import SingleArticle from "../components/SingleArticle/SingleArticle";
import Profile from "../components/Profile/Profile";
import AboutUs from "../components/AboutUs/AboutUs";
import Contact from "../components/Contact/Contact";
import GetInvolved from "../components/GetInvolved/GetInvolved";
import Research_Consultancy from "../components/Research_Consultancy/Research_Consultancy";
import singleConsultancy from "../components/Research_Consultancy/SingleConsultancy/singleConsultancy";
import Logout from "../containers/Auth/Logout/Logout";
import CreateArticle from "../components/SingleArticle/Article/Article";
import EditProfile from "../components/Profile/EditProfile/EditProfile";
import * as actions from "../store/actions/index";
import AllCategories from "../components/Categories/CategoryList/allCategories";
import SingleCategory from "../components/Categories/CategoryList/oneCategory.js/singleCategory";
class Routes extends Component {
  componentDidMount() {
    this.props.onAuthCheckState();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/singleArticle" component={SingleArticle} />
        <Route path="/profile" component={Profile} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route path="/getInvolved" component={GetInvolved} />
        <Route path="/logout" component={Logout} />
        <Route path="/consultResearch" component={Research_Consultancy} />
        <Route path="/singleConsultancy" component={singleConsultancy} />
        <Route path="/createArticle" component={CreateArticle} />
        <Route path="/editProfile" component={EditProfile} />
        <Route path="/categories" component={AllCategories} />
        <Route
          path="/singleCategory/:category_Title"
          component={SingleCategory}
        />
      </Switch>
    );
    return <div>{routes}</div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthCheckState: () => dispatch(actions.loginCheckState()),
  };
};

export default connect(null, mapDispatchToProps)(Routes);
