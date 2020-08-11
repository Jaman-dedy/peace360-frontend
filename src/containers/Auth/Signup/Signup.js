import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Wrapper from "../../../hoc/Wrapper/Wrapper";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import LeftSide from "../../../components/Authentication/AuthLeftSide/AuthLeftSide";
import SocialAuth from "../../../components/Authentication/SocialAuth/SocialAuth";
import styles from "../Auth.module.scss";
import classes from "./Signup.module.scss";
import AuthImg from "../../../assets/svg/meetup.svg";
import Backward from "../../../components/Backward/Backward";
import * as actions from "../../../store/actions/signup";
import { updatedObject, checkValidity } from "../../../shared/utility";
import Spinner from "../../../components/UI/Spinner/Spinner";
import ErrorPage from "../../../components/UI/Error/ErrorPage";
class Signup extends Component {
  state = {
    signupForm: {
      username: {
        elementType: "input",
        elementConfig: {
          type: "username",
          placeholder: "User name",
        },
        value: "",
        label: "Username",
        validation: {
          required: true,
          minLength: 5,
        },
        valid: false,
        touched: false,
      },
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
      confirmPassword: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Confirm your password",
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
  submitHandler = (event) => {
    event.preventDefault();
    this.props.onRegister(
      this.state.signupForm.username.value,
      this.state.signupForm.email.value,
      this.state.signupForm.password.value
    );
  };
  inputChangeHandler = (event, inputName) => {
    const updatedInputs = updatedObject(this.state.signupForm, {
      [inputName]: updatedObject(this.state.signupForm[inputName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.signupForm[inputName].validation
        ),
        touched: true,
      }),
    });
    this.setState({ signupForm: updatedInputs });
  };
  checkClickedHandler = (e) => {};
  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      this.setState({ closeError: true });
    }
  }
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
    const { error } = this.props;
    let formBlock;
    let disableButton = false;
    const checkBoxElementConfig = {
      type: "checkbox",
    };
    const formElementsArray = [];
    for (let key in this.state.signupForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signupForm[key],
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
              <div className={classes.CheckTerms}>
                <Input
                  elementType="checkbox"
                  elementConfig={checkBoxElementConfig}
                  changed={(e) => this.checkClickedHandler(e)}
                />
                I have read and accept{" "}
                <NavLink to="#">Terms and conditions</NavLink>
              </div>
              <Button disabled={disableButton}>SIGN UP</Button>
            </form>
          </div>
        </div>
        <div className={classes.Actions}>
          <span>
            Already have an account?{" "}
            <NavLink to="/login">
              <strong>Log in</strong>
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
          <div className={styles.Image}>
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
    loading: state.register.loading,
    error: state.register.error,
    isAuthenticated: state.register.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (username, email, password) =>
      dispatch(actions.register(username, email, password)),
  };
};

export default connect(maStateToProps, mapDispatchToProps)(Signup);
