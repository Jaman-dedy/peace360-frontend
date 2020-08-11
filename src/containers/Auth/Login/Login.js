import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import Wrapper from "../../../hoc/Wrapper/Wrapper";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import LeftSide from "../../../components/Authentication/AuthLeftSide/AuthLeftSide";
import SocialAuth from "../../../components/Authentication/SocialAuth/SocialAuth";
import classes from "./Login.module.scss";
import styles from "../Auth.module.scss";
import AuthImg from "../../../assets/svg/meetup.svg";
import Backward from "../../../components/Backward/Backward";
import * as actions from "../../../store/actions/login";
import { updatedObject, checkValidity } from "../../../shared/utility";
import Spinner from "../../../components/UI/Spinner/Spinner";
import ErrorPage from "../../../components/UI/Error/ErrorPage";

class Login extends Component {
  state = {
    loginForm: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email",
        },
        value: "",
        label: "Email",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        label: "Password",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    closeError: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      this.setState({ closeError: true });
    }
  }

  inputChangeHandler = (event, inputName) => {
    const updatedInputs = updatedObject(this.state.loginForm, {
      [inputName]: updatedObject(this.state.loginForm[inputName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.loginForm[inputName].validation
        ),
        touched: true,
      }),
    });
    this.setState({ loginForm: updatedInputs });
  };
  submitHandler = (event) => {
    event.preventDefault();

    this.props.onLogin(
      this.state.loginForm.email.value,
      this.state.loginForm.password.value
    );
  };
  closeErrorHandler = (e) => {
    if (this.state.closeError) {
      this.setState((prevState) => {
        return { closeError: !prevState.closeError };
      });
    }
  };
  componentWillUnmount() {
    window.location.reload(false);
  }
  render() {
    let disableButton = false;

    const { error } = this.props;
    let formBlock;
    const formElementsArray = [];
    for (let key in this.state.loginForm) {
      formElementsArray.push({
        id: key,
        config: this.state.loginForm[key],
      });
    }
    formElementsArray.map((element) => {
      if (!element.config.valid) {
        disableButton = true;
      }
      return disableButton;
    });
    let form = formElementsArray.map((formElement) => (
      <Wrapper key={formElement.id}>
        <Input
          required
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => this.inputChangeHandler(event, formElement.id)}
        />
      </Wrapper>
    ));
    if (this.props.loading) {
      form = <Spinner />;
    }
    formBlock = (
      <div className={styles.FormBlock}>
        <SocialAuth />
        <div className={styles.FormContent}>
          <div className={styles.Input}>
            <form onSubmit={this.submitHandler}>
              {form}
              <Button disabled={disableButton}>LOG IN</Button>
            </form>
          </div>
        </div>
        <div className={classes.Actions}>
          <span>Forgot your password?</span>
          <span>
            Don't have an account?{" "}
            <NavLink to="/signup">
              <strong>Sign up</strong>
            </NavLink>
          </span>
        </div>
      </div>
    );
    if (error && this.state.closeError) {
      formBlock = <ErrorPage errorMessage={this.props.error[0].message} />;
    }
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to="/" />;
    }
    return (
      <div className={styles.Auth} onClick={this.closeErrorHandler}>
        {authRedirect}
        <Backward link="/" />
        <LeftSide />
        <div className={styles.Block}>
          <div className={classes.Image}>
            <img src={AuthImg} alt="" />
          </div>
          {formBlock}
        </div>
      </div>
    );
  }
}

const maStateToProps = (state) => {
  return {
    loading: state.login.loading,
    error: state.login.error,
    isAuthenticated: state.login.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => dispatch(actions.login(email, password)),
  };
};

export default connect(maStateToProps, mapDispatchToProps)(Login);
