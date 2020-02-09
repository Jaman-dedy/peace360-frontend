import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from '../../components/Categories/Categories';
import ArticleSliders from '../../components/ArticleSliders/ArticleSliders';
import UpComingEvent from '../../components/UpComingEvent/UpComingEvent';
import Statistics from '../../components/Statistics/Statistics';
import VisionMission from '../../components/VisionMission/VisionMission';
import AuthenticationAction from '../../components/AuthenticationAction/AuthenticationAction';
import Layout from '../../hoc/Layout/Layout';
import AuthenticatedUser from '../../components/AuthenticatedUser/AuthenticatedUser';

class Home extends Component {
  render() {
    return (
      <Layout>
        {this.props.isAuthenticated ? (
          <AuthenticatedUser />
        ) : (
          <AuthenticationAction />
        )}
        <ArticleSliders />
        <UpComingEvent />
        <Categories />
        <Statistics />
        <VisionMission />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.register.token !== null || state.login.token !== null
  };
};
export default connect(mapStateToProps, null)(Home);
