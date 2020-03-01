import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import Aux from '../../hoc/Aux/Aux';
import classes from './AuthenticatedUser.module.scss';
import userAvatar from '../../assets/images/avatar.jpg';

class AuthenticatedUser extends Component {
  componentWillMount() {
    this.props.onGetUser();
    this.props.onCheckAuthState();
  }
  render() {
    const { user } = this.props.currentUser;
    const currentUser = (
      <div className={classes.User}>
        <Link to="/profile">
          <img src={user.avatar} alt="" />
        </Link>
        <div className={classes.Actions}>
          <ol>
            <li>
              {' '}
              <Link to="/profile">
                {' '}
                <i className="fas fa-user"></i>
                profile
              </Link>
            </li>
            <li>
              <Link to="/logout">
                {' '}
                <i className="fas fa-sign-out-alt"></i>
                logout
              </Link>
            </li>
          </ol>
        </div>
      </div>
    );
    const redirectPath = <Redirect to="/" />;
    return <Aux>{this.props.error ? redirectPath : currentUser}</Aux>;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.currentUser.loading,
    error: state.currentUser.error,
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetUser: () => dispatch(actions.fetchCurrentUser()),
    onCheckAuthState: () => dispatch(actions.loginCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedUser);
