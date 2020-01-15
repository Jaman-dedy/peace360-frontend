import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Aux from "../../../hoc/Aux/Aux";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import LeftSide from "../../../components/Authentication/AuthLeftSide/AuthLeftSide";
import SocialAuth from "../../../components/Authentication/SocialAuth/SocialAuth";
import styles from "../Auth.module.scss";
import classes from "./Signup.module.scss";
import AuthImg from "../../../assets/svg/meetup.svg";
import Backward from "../../../components/Backward/Backward";

class Signup extends Component {
  state = {
    signupForm: {
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
      },
      confirmPassword: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Confirm your password"
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
  checkClickedHandler = e => {};
  render() {
    const checkBoxElementConfig = {
      type: "checkbox"
    };
    const formElementsArray = [];
    for (let key in this.state.signupForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signupForm[key]
      });
    }
    let form = formElementsArray.map(formElement => (
      <Aux key={formElement.id}>
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
        <Backward link="/" />
        <LeftSide />
        <div className={styles.Block}>
          <div className={styles.Image}>
            <img src={AuthImg} alt="" />
          </div>
          <div className={styles.FormBlock}>
            <SocialAuth />
            <div className={styles.FormContent}>
              <div className={styles.Input}>
                <form>
                  {form}
                  <div className={classes.CheckTerms}>
                    <Input
                      elementType="checkbox"
                      elementConfig={checkBoxElementConfig}
                      changed={e => this.checkClickedHandler(e)}
                    />
                    I have read and accept{" "}
                    <NavLink to="#">Terms and conditions</NavLink>
                  </div>
                  <Button>LOG IN</Button>
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
        </div>
      </div>
    );
  }
}

export default Signup;
