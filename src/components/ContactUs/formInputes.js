import React, { Component } from "react";
import "./FormInput.css";

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", phone: "", message: "" };
  }
  render() {
    return (
      <div className="formInputs">
        <label className="label">{this.props.label}</label>
        <input
          name={this.props.name}
          type={this.props.type}
          className="input"
          placeholder={this.props.placeholder} // value={this.state.message}
          onChange={(e)=>this.props.handleChange(e.target.value, this.props.name)}
          required
          width={this.props?.width || '280px'}
        />
        <span className="errorMessage">{this.props.error}</span>
      </div>
    );
  }
}

export default FormInput;
