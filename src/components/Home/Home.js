import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import Img from "./Assets/HR-hiring-Complete-Controller.jpeg";
import Img1 from "./Assets/recruitment2.jpeg";
import Img2 from "./Assets/recruitment3.jpeg";

import "./Home.css";
import { WhatWeOfferData, WhoAreWe, OurApproach } from "./data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        {/* <Carousel showArrows={true} showThumbs={false} showStatus={false}  infiniteLoop={true} autoPlay>
          <div>
            <img src={Img} style={{ height: "50vh", width: "100%" }} />
          </div>
          <div>
            <img src={Img1} style={{ height: "50vh", width: "100%" }} />
          </div>
          <div>
            <img src={Img2} style={{ height: "50vh", width: "100%" }} />
          </div>
        </Carousel> */}
        {/* <div className="homeSecondPart">
          <section className="what-we-offer">
            <div>
              <h1 className="what-we-offer-heading">WHAT WE OFFER</h1>
            </div>
            <div className="what-we-offer-list-home">
              {WhatWeOfferData.map((ele, i) => {
                return (
                  <div
                    className="what-we-offer-element"
                    // xs={3}
                    onMouseOver={() => this.onHover(i)}
                    onMouseOut={() => this.onHoverOut()}
                  >
                    <div id={i} className="what-we-offer-logo">
                      <box-icon
                        name={ele.iconName}
                        color={
                          this.state.hoveredCard === i ? "#00a0e3" : "black"
                        }
                      ></box-icon>
                    </div>
                    <div className="what-we-offer-discription">
                      <div
                        className={
                          this.state.hoveredCard === i
                            ? "wwo-subHeading-hover"
                            : "wwo-subHeading"
                        }
                      >
                        {ele.heading}
                      </div>
                      <div className="what-we-offer-subDescription">
                        {ele.description}
                      </div>
                      <a href={ele.linkName} className="what-we-offer-more">
                        More info
                        <i class="icon-right-open-mini pi-icon-right"></i>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div> */}
        <div className="AboutUsSecondPart">
            <section>
              <div>
                <h2 className="what-we-offer-heading">Welcome to Codeza Solutions Private Limited</h2>
              </div>
              <p className="paragraph">
              Welcome to Codeza, tomorrow's services and knowledge provider in field of Data warehousing field. Codeza is your trusted partner in developing and testing the next generation data warehouse projects. We are a start-up based in India, founded in 2021.
              </p>
              <p className="paragraph">
              Codeza Solutions is a consulting and managed services firm dedicated to helping clients enable better decision making. We offer customers business intelligence and analytic tool selection, predictive modeling development, Realtime streaming analytics, Profitability costing models, BPM design and delivery optimization. Codeza guides their customers to a solution that enhances business modeling enabling better analysis and insight into their data. We believe that the power of technology combined with best practices will give customers the ability to make fact-based decisions.
              </p>
              <p className="paragraph">
              Our goal for 2025 is to reach a team of 20 highly skilled employees, demonstrating our commitment to growth and excellence. We understand the evolving needs of the industry, and our focus is on sustainable value add solutions.
              </p>
            </section>
          </div>
        <div className="who-are-we">
          <div className="homeSecondPart">
            <section>
              <div>
                <h2 className="what-we-offer-heading">WHO ARE WE</h2>
              </div>
              <ul className="whoweare-ul">
                {WhoAreWe.map((ele, i) => {
                  return (
                    <li key={i} className={"who-are-we-list"}>
                      {ele}
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
