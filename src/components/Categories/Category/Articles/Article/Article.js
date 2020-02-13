/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import classes from './Article.module.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../../../store/actions/index';
import experienceImg from '../../../../../assets/images/experience1.jpg';

class Article extends Component {
  componentDidMount() {
    this.props.onSetRedirectPath();
  }
  render() {
    console.log('this.props', this.props);
    return (
      <NavLink to={this.props.redirectUrl}>
        <div className={classes.Article}>
          <div>
            <img src={experienceImg} alt="experience" />
          </div>
          <div className={classes.Title}>
            Peace is a stress-free state of security and calmness
          </div>
          <div className={classes.Details}>
            EmaBush 2 days ago | &#128338; 4 min to read
          </div>
        </div>
      </NavLink>
    );
  }
}

const mapStateToProps = state => {
  return {
    redirectUrl: state.login.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetRedirectPath: () =>
      dispatch(actions.setAuthRedirectPath('/SingleArticle'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
