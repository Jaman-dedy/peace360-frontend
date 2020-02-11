import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import classes from './AuthenticatedUser.module.scss';
import userAvatar from '../../assets/images/avatar.jpg';

class AuthenticatedUser extends Component {
  componentWillMount() {
    this.props.onGetUser();
    if (this.props.error) {
      this.props.onSetRedirectPath();
    }
  }
  render() {
    const redirectPath = <Redirect to={this.props.redirectPath} />;
    const { user } = this.props.currentUser;
    return (
      <div className={classes.User}>
        {redirectPath}
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
  }
}

const mapStateToProps = state => {
  return {
    loading: state.currentUser.loading,
    error: state.currentUser.error,
    currentUser: state.currentUser,
    redirectPath: state.login.authRedirect || state.register.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetUser: () => dispatch(actions.fetchCurrentUser()),
    onSetRedirectPath: () => dispatch(actions.setAuthRedirectPath('/login'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedUser);
