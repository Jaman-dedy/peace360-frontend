import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Aux from "../../../hoc/Aux/Aux";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import LeftSide from "../../../components/Authentication/AuthLeftSide/AuthLeftSide";
import SocialAuth from "../../../components/Authentication/SocialAuth/SocialAuth";
import classes from "./Login.module.scss";
import styles from "../Auth.module.scss";
import AuthImg from "../../../assets/svg/meetup.svg";

class Login extends Component {
  state = {
    loginForm: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email"
        },
        value: "",
        label: "Email",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        label: "Password",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    }
  };
  inputChangeHandler = (event, inputName) => {};
  render() {
    const formElementsArray = [];
    for (let key in this.state.loginForm) {
      formElementsArray.push({
        id: key,
        config: this.state.loginForm[key]
      });
    }
    let form = formElementsArray.map(formElement => (
      <Aux key={formElement.id}>
        <label
          className={[classes[formElement.id]].join(" ")}
          htmlFor={formElement.id}
        ></label>
        <Input
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={event => this.inputChangeHandler(event, formElement.id)}
        />
      </Aux>
    ));
    return (
      <div className={styles.Auth}>
        <LeftSide />
        <div className={styles.Block}>
          <div className={classes.Image}>
            <img src={AuthImg} alt="" />
          </div>
          <div className={styles.FormBlock}>
            <SocialAuth />
            <div className={styles.FormContent}>
              <div className={styles.Input}>
                <form >
                  {form}
                  <Button>LOG IN</Button>
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
        </div>
      </div>
    );
  }
}

export default Login;
