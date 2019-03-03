import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  render() {
    return (
      <div>
        <header>
          <span className="title">Register</span>
        </header>
        <form>
          Username:
          <input type="text" />
          <br />
          Email:
          <input type="text" />
          <br />
          Password:
          <input type="password" />
          <br />
          Repeat Password:
          <input type="password" />
          <br />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default Register;
