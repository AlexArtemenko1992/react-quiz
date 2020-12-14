import React from "react";
import "./Auth.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Inputs/Inputs";
import is from "is_js";
import axios from "axios";

class Auth extends React.Component {
  state = {
    isFormValid: false,
    formControl: {
      email: {
        value: "",
        placeholder: "Enten your email...",
        type: "email",
        label: "Email",
        errorMessage: "Enter correct email for example: test@test.com",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: "",
        placeholder: "Enter your password...",
        type: "password",
        label: "Password",
        errorMessage:
          "Enter correct password.Password must contain at least 6 characters",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
  };

  loginHandler = async () => {
    const auth = {
      email: this.state.formControl.email.value,
      password: this.state.formControl.password.value,
      returnSecureToken: true,
    };
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDFbJ3JV1ADxSoiS5Rb8P0KEkW2o171ot4`,
        auth
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  registrationHandler = async () => {
    const auth = {
      email: this.state.formControl.email.value,
      password: this.state.formControl.password.value,
      returnSecureToken: true,
    };
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDFbJ3JV1ADxSoiS5Rb8P0KEkW2o171ot4`,
        auth
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  submitHandler = (event) => {
    event.preventDefault();
  };

  validate = (value, validation) => {
    if (!value) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validation.email) {
      isValid = is.email(value) && isValid;
    }
    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  };

  onChangeHandler = (event, controlName) => {
    const formControl = { ...this.state.formControl };
    const control = { ...formControl[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validate(control.value, control.validation);

    formControl[controlName] = control;

    let isFormValid = true;

    Object.keys(formControl).forEach((name) => {
      isFormValid = formControl[name].valid && isFormValid;
    });

    this.setState({ formControl, isFormValid });
  };

  renderInputs() {
    const inputs = Object.keys(this.state.formControl).map((controlName, i) => {
      const control = this.state.formControl[controlName];
      return (
        <Input
          type={control.type}
          key={`${control.type}${i}`}
          placeholder={control.placeholder}
          value={control.value}
          label={control.label}
          errorMessage={control.errorMessage}
          valid={control.valid}
          touched={control.touched}
          shouldValidate={true}
          onChange={(e) => this.onChangeHandler(e, controlName)}
        />
      );
    });
    return inputs;
  }

  render() {
    return (
      <div className="auth">
        <div>
          <form onSubmit={this.submitHandler}>
            <h1>Login</h1>

            {this.renderInputs()}

            <Button
              type="success"
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
            >
              Login
            </Button>
            <Button type="error" onClick={this.registrationHandler}>
              Registration
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
