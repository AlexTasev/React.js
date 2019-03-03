import React, { Component } from "react";
import "./App.css";

import Article from "../Article/Article";
import RegisterForm from "../RegisterForm/RegisterForm";
import Navigation from "../Navigation/Navigation";
import warningWrapper from "../../hocs/warningWrapper";
import errorHandlingWrapper from "../../hocs/errorHandlingWrapper";
import BindingForm from "../BindingForm/BindingForm";

const ArticleWithWarning = warningWrapper(errorHandlingWrapper(Article));
const RegisterFormWithWarning = warningWrapper(
  errorHandlingWrapper(RegisterForm)
);
const NavigationWithWarning = warningWrapper(errorHandlingWrapper(Navigation));

class App extends Component {
  onSubmit(e, data) {
    e.preventDefault();
  }
  render() {
    return (
      <section className="App">
        <BindingForm onSubmit={this.onSubmit}>
        <h1>Login Form</h1>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
        </BindingForm>
        <BindingForm onSubmit={this.onSubmit}>
          <h1>Register Form</h1>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <input type="password" name="repeatPasswor" placeholder="Repeat password" />
        </BindingForm>
        <BindingForm onSubmit={this.onSubmit}>
          <h1>Create Movie Form</h1>
          <input type="text" name="title" placeholder="Title" />
          <input type="description" name="description" placeholder="Description" />
          <input type="posterUrl" name="posterUrl" placeholder="PosterUrl" />
        </BindingForm>
        <ArticleWithWarning />
        <RegisterFormWithWarning />
        <NavigationWithWarning />
      </section>
    );
  }
}

export default App;
