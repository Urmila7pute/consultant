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
      <>
      <div className="container">
        <div className="firstBlock">
          <h1 className="formh1"> CONTACT </h1>
          <div className="thanksMessage"> Thanks for visiting our website.</div>
          <div  className="thanksMessage"> Awaiting to hear from you. </div>
            <div className="rows">
              <div className="circleIcon">
                  <div className="boxIcon">
                  <box-icon
                    name="envelope"
                    type="solid"
                    flip="horizontal"
                    // color="#fdfcfc"
                    color='white'
                  size='xs'
                  ></box-icon>
                  </div>
              </div>
              <div><b>Email</b> : info@codeza.in</div>
            </div>
           
            <div className="rows">
              <div className="circleIcon">
                  <div className="boxIcon">
                  <box-icon
                    name="phone-call"
                    type="solid"
                    // color="#fdfcfc"
                    color='white'
                    size='xs'
                  ></box-icon>
                  </div>
              </div>
              <div><b>Mobile</b> : +91-9960611617</div>
            </div>
            <div className="rows">
              <div className="circleIcon">
                  <div className="boxIcon">
                  <box-icon
                    name="location-plus"
                    type="solid"
                    flip="horizontal"
                    // color="#fdfcfc"
                    color='white'
                  size='xs'
                  ></box-icon>
                  </div>
              </div>
              <div><b>Address</b> : Pune, Maharashtra, India</div>
            </div>

        </div>
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
       
      </div>
       <div className="letsWorkTogether">
       Let's work together!
       </div>
       </>
    );
  }
}

export default ContactUs;
