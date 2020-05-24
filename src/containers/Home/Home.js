import React, { Component } from "react";
import { connect } from "react-redux";
import Categories from "../../components/Categories/Categories";
import * as actions from "../../store/actions/index";
import ArticleSliders from "../../components/ArticleSliders/ArticleSliders";
// import UpComingEvent from '../../components/UpComingEvent/UpComingEvent';
import Statistics from "../../components/Statistics/Statistics";
import VisionMission from "../../components/VisionMission/VisionMission";
import AuthenticationAction from "../../components/AuthenticationAction/AuthenticationAction";
import Layout from "../../hoc/Layout/Layout";
import AuthenticatedUser from "../../components/AuthenticatedUser/AuthenticatedUser";
import Spinner from "../../components/UI/Spinner/Spinner";

class Home extends Component {
  componentDidMount() {
    this.props.onFetchCategory();

    this.props.onFetchMyFollowers();
    this.props.onFetchMyFollowing();
    this.props.onfetChCategories();
  }
  render() {
    let fetchedCategories = null;
    let articleSliders = null;
    const { category } = this.props.categories;
    const { categories } = category;
    const history = this.props.history;

    if (!category.length) {
      fetchedCategories = <Spinner />;
    }
    if (categories !== undefined) {
      articleSliders = <ArticleSliders articles={categories[0].articles} />;
    }
    fetchedCategories = <Categories categories={category} history={history} />;

    return (
      <Layout>
        {this.props.isAuthenticated ? (
          <AuthenticatedUser />
        ) : (
          <AuthenticationAction />
        )}
        {articleSliders}
        {/* <UpComingEvent /> */}
        {fetchedCategories}
        <Statistics />
        <VisionMission />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated:
      state.register.token !== null || state.login.token !== null,
    loading: state.fetchCategories.loading,
    error: state.fetchCategories.error,
    categories: state.fetchCategories,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCategory: () => dispatch(actions.fetchCategory()),
    onFetchMyFollowers: () => dispatch(actions.fetchMyFollowers()),
    onFetchMyFollowing: () => dispatch(actions.fetchMyFollowing()),
    onfetChCategories: () => dispatch(actions.fetchCategories()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
