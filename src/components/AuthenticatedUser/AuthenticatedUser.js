import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as actions from "../../store/actions/index";
import { fetchCurrentUser } from "../../store/actions";

import Wrapper from "../../hoc/Wrapper/Wrapper";
import classes from "./AuthenticatedUser.module.scss";

class AuthenticatedUser extends Component {
  componentDidMount() {
    this.props.onGetUser();
    this.props.onCheckAuthState();
  }
  render() {
    const { currentUser: user } = this.props;
    const currentUser = (
      <div className={classes.User}>
        <Link to="/profile">
          <img src={user.avatar} alt="" />
        </Link>
        <div className={classes.Actions}>
          <ol>
            <li>
              {" "}
              <Link to="/profile">
                {" "}
                <i className="fas fa-user"></i>
                profile
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/categories">
                {" "}
                <i className="fas fa-list"></i>
                Categories
              </Link>
            </li>
            <li>
              <Link to="/logout">
                {" "}
                <i className="fas fa-sign-out-alt"></i>
                logout
              </Link>
            </li>
          </ol>
        </div>
      </div>
    );
    return <Wrapper>{currentUser}</Wrapper>;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.currentUser.loading,
    error: state.currentUser.error,
    currentUser: state.currentUser.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUser: () => dispatch(fetchCurrentUser()),
    onCheckAuthState: () => dispatch(actions.loginCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedUser);
