import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Search.module.scss";

class Search extends Component {
  state = {
    searchForm: {
      search: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Search..."
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  };
  inputChangedHandler = (event, inputIdentifier) => {};
  render() {
    let form = (
      <form>
        <Input
          key={this.state.searchForm.search}
          elementType={this.state.searchForm.search.elementType}
          elementConfig={this.state.searchForm.search.elementConfig}
          value={this.state.searchForm.search.value}
          invalid={!this.state.searchForm.search.valid}
          shouldValidate={this.state.searchForm.search.validation}
          touched={this.state.searchForm.search.touched}
          changed={event =>
            this.inputChangedHandler(event, this.state.searchForm.search)
          }
        />
        <Button btnTyp="Success" disabled={!this.state.formIsValid}>
          <i className="fas fa-search"></i>
        </Button>
      </form>
    );
    return <div className={classes.Search}>{form}</div>;
  }
}

export default Search;
