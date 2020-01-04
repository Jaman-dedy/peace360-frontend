import React, { Component } from "react";
import Categories from "../../components/Categories/Categories";
import Aux from "../../hoc/Aux/Aux";
import ArticleSliders from "../../components/ArticleSliders/ArticleSliders";

class Home extends Component {
  render() {
    return (
      <Aux>
        <ArticleSliders />
        <Categories />
      </Aux>
    );
  }
}
export default Home;
