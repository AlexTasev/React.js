import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./Home/Home";
import Register from "./Register/Register.jsx";
import Login from "./Login/Login.jsx";
import Create from "./Create/Create";
import Header from "./Header/Header";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: null
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e, data, isSignup) {
    e.preventDefault();
    fetch("http://localhost:9999/auth/sign" + (isSignup ? 'up': 'in'), {
      method: "post",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then(rawData => rawData.json())
    .then(responceBody => {
      if (responceBody.username) {
        this.setState({
          username: responceBody.username
        })
      }
    })
  }
  render() {
    return (
      <div className="App">
        <Header username={this.state.username} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/register"
            render={() => (
              <Register
                handleSubmit={this.handleSubmit.bind(this)}
                handleChange={this.handleChange}
              />
            )}
          />
          <Route
            path="/login"
            render={() => (
              <Login
                handleSubmit={this.handleSubmit.bind(this)}
                handleChange={this.handleChange}
              />
            )}
          />
          <Route path="/create" component={Create} />
          <Route render={() => <h1>Not found!</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
