import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="Footer">
          <div className="FooterSecondPart">
            <section className="conatctUs">
              <div>
                <p className="heading">Contact Us</p>
              </div>
              <div className="contactUsList">
                <box-icon
                  name="location-plus"
                  type="solid"
                  flip="horizontal"
                  color="#fdfcfc"
                ></box-icon>
                <div>
                  <h1 className="contactKey">Address</h1>
                </div>
                <div className="conatctValue"> : Pune, Maharashtra, India</div>
              </div>
              <div className="contactUsList">
                <box-icon
                  name="phone-call"
                  type="solid"
                  color="#fdfcfc"
                ></box-icon>
                <div>
                  <h1 className="contactKey">Phone</h1>
                </div>
                <div className="conatctValue"> : +91-9960611617</div>
              </div>
              <div className="contactUsList">
                <box-icon
                  name="envelope"
                  type="solid"
                  flip="horizontal"
                  color="#fdfcfc"
                ></box-icon>
                <div>
                  <h1 className="contactKey">Email</h1>
                </div>
                <div className="conatctValue"> : info@codeza.in</div>
              </div>
            </section>
            <section className="designedBySection">
              <div className="designedBy">
                © 2024 
                &nbsp;
                <h1 className="designedByH1"> Codeza Solutions Private Limited </h1>
                &nbsp;
                 All right reserved. | Design By 
                 &nbsp;
                <h1 className="designedByH1">Codeza Solutions Private Limited</h1>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
