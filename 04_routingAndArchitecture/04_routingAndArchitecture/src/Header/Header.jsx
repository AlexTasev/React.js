import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <NavLink to="/" className="logo">
          Interactive IMDB
        </NavLink>
        <div className="header-right">
          <NavLink to="/">Home</NavLink>
          {this.props.username 
          ? (
            <span>
              <Link to="#">Welcome {this.props.username}!</Link>
              <Link to="/logout">Logout</Link>
            </span>
          ) 
          : (
            <span>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </span>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
