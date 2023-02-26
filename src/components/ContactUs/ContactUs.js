import React, { Component } from "react";
// import { Carousel } from "react-responsive-carousel";
// import Img from "./Assets/HR-hiring-Complete-Controller.jpeg";
import "./ContactUs.css";
import FormInput from "./formInputes";
// import { OurApproach } from "./data";
// import ContactUsImage from "./Assets/ContactUs.jpeg";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email:"", phone:"", message:""};
  }

  handleChange(event, name) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    const data= new FormData(event.target);
    console.log(Object.fromEntries(data.entries()))
  }
  render() {
    return (
      <div className="formBackground">
       <form onSubmit={this.handleSubmit} className="form">
        <h1 className="formh1"> LET'S CONNECT</h1>
        <FormInput name="name" placeholder="Name" label="Name" type="text" handleChange={this.handleChange}/>
        <FormInput name="email" placeholder="Email" label="Email" type="email"/>

        <FormInput name="phone" placeholder="Phone" label="Phone" type="text"/>
        <FormInput name="message" placeholder="Message" label="Message" type="text"/>
        <input type="submit" value="Submit" className="submitButton"/>

      </form>
      </div>
    );
  }
}

export default ContactUs;
