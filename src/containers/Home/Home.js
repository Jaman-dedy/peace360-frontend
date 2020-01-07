import React, { Component } from "react";
import Categories from "../../components/Categories/Categories";
import ArticleSliders from "../../components/ArticleSliders/ArticleSliders";
import UpComingEvent from "../../components/UpComingEvent/UpComingEvent";
import Statistics from "../../components/Statistics/Statistics";
import VisionMission from "../../components/VisionMission/VisionMission";
import AuthenticationAction from "../../components/AuthenticationAction/AuthenticationAction";
import Layout from "../../hoc/Layout/Layout";

class Home extends Component {
  render() {
    return (
      <Layout>
        <AuthenticationAction />
        <ArticleSliders />
        <UpComingEvent />
        <Categories />
        <Statistics />
        <VisionMission />
      </Layout>
    );
  }
}
export default Home;
