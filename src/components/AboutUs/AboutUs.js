import React, { Component } from "react";
// import { Carousel } from "react-responsive-carousel";
// import Img from "./Assets/HR-hiring-Complete-Controller.jpeg";
import "./AboutUs.css";
import { OurApproach } from "./data";
import aboutUSImage from "./Assets/aboutUs.jpeg";

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src={aboutUSImage} className="aboutUsImage"></img>
        <div className="aboutUs">
          <div className="AboutUsSecondPart">
            <section>
              <div>
                <h2 className="what-we-offer-heading">OUR APPROACH</h2>
              </div>
              <ul>
                {OurApproach.map((ele, i) => {
                  return (
                    <li key={i} className={"list"}>
                      {ele}
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>
        <div className="AboutUsSecondPart">
            <section>
              <div>
                <h2 className="what-we-offer-heading">VISION AND MISSION</h2>
              </div>
              <ul>
                {OurApproach.map((ele, i) => {
                  return (
                    <li key={i} className={"list"}>
                      {ele}
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
      </div>
    );
  }
}

export default AboutUs;
