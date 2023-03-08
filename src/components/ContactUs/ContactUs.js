import React, { Component } from "react";
import "./ContactUs.css";
import FormInput from "./formInputes";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email:"", phone:"", message:""};
  }

  handleChange(event, name) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    event.preventDefault();
    const data= new FormData(event.target);
    console.log(Object.fromEntries(data.entries()))
    document.getElementById("form").reset();
  }
  render() {
    return (
      <div className="formBackground">
       <form onSubmit={this.handleSubmit} className="form" id="form">
        <h1 className="formh1"> LET'S CONNECT</h1>
        <FormInput name="name" placeholder="Name" label="Name" type="text" handleChange={this.handleChange}/>
        <FormInput name="email" placeholder="Email" label="Email" type="email"/>

        <FormInput name="phone" placeholder="Phone" label="Phone" type="number"/>
        <FormInput name="message" placeholder="Message" label="Message" type="text"/>
        <input type="submit" value="Submit" className="submitButton"/>

      </form>
      </div>
    );
  }
}

export default ContactUs;
