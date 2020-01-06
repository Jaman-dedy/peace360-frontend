import React, { Component } from "react";
import Categories from "../../components/Categories/Categories";
import Aux from "../../hoc/Aux/Aux";
import ArticleSliders from "../../components/ArticleSliders/ArticleSliders";
import UpComingEvent from "../../components/UpComingEvent/UpComingEvent";
import Statistics from "../../components/Statistics/Statistics";
import VisionMission from "../../components/VisionMission/VisionMission";

class Home extends Component {
  render() {
    return (
      <Aux>
        <ArticleSliders />
        <UpComingEvent />
        <Categories />
        <Statistics />
        <VisionMission />
      </Aux>
    );
  }
}
export default Home;
