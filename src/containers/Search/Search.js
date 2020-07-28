import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Search.module.scss";
import * as actions from "../../store/actions/index";

class Search extends Component {
  state = {
    searchForm: {
      search: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Search...",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
    search: "",
  };
  onchage = (e) => {
    this.setState({ search: e.target.value });
  };

  componentDidMount() {
    this.props.onfetChCategories();
  }

  inputChangedHandler = (event, inputIdentifier) => {};
  render() {
    const { category } = this.props.categories;
    const { categories } = category;
    const { search } = this.state;
    if (categories !== undefined) {
      categories.forEach((category) => {
        if (category.articles.length > 0) {
          if (search === category.articles[0].title) {
            return category.articles[0].title;
          }
        }
      });
    }

    let form = (
      <form>
        <Input lebel="search article" icon="search" onchage={this.onchage} />
        <Button btnTyp="Success" disabled={!this.state.formIsValid}>
          <i className="fas fa-search" onchage={this.onchage} />
        </Button>
      </form>
    );
    return <div className={classes.Search}>{search}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.fetchCategories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onfetChCategories: () => dispatch(actions.fetchCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
