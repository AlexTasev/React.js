import React, { Component } from "react";
//import "./BindingForm.css";

class BindingForm extends Component {
  handleChange(e) {
    console.log(`${e.target.name} => ${e.target.value}`);
    this.setState = {
      [e.target.name]: e.target.value
    };
  }
  componentWillMount() {
    this.props.children.forEach(child => {
      if (child.type === 'input') {
        this.setstate({
          [child.props.name]: null
        })
      }
      
    });
  }

  render() {
    return (
        <form onSubmit={(e) => this.props.onSubmit(e, this.state)}>
          {React.Children.map(this.props.children, child => {
            if (child.type === "input") {
              return React.cloneElement(child, {
                onChange: this.handleChange.bind(this),
                ...child.props
              });
            }
            return child;
          })}
          <input type="submit" value="Submit" />
        </form>
    );
  }
}

export default BindingForm;
