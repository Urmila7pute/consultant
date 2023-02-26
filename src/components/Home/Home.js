import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import Img from "./Assets/HR-hiring-Complete-Controller.jpeg";
import "./Home.css";
import { WhatWeOfferData, WhoAreWe, OurApproach,  } from "./data";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { hoveredCard: null };
  }

  onHover = (index) => {
    this.setState({ hoveredCard: index });
  };

  onHoverOut = () => {
    this.setState({ hoveredCard: null });
  };

  render() {
    return (
      <div>
        <Carousel showArrows={true} showThumbs={false} showStatus={false}>
          <div>
            <img src={Img} style={{ height: "50vh", width: "100%" }} />
          </div>
        </Carousel>
        <div className="homeSecondPart">
          <section className="what-we-offer">
            <div>
              <h1 className="what-we-offer-heading">WHAT WE OFFER</h1>
            </div>
            <div className="what-we-offer-list">
              {WhatWeOfferData.map((ele, i) => {
                return (
                  <div
                    className="what-we-offer-element"
                    xs={3}
                    onMouseOver={() => this.onHover(i)}
                    onMouseOut={() => this.onHoverOut()}
                  >
                    <div id={i} className="what-we-offer-logo">
                      <box-icon
                        name={ele.iconName}
                        color={
                          this.state.hoveredCard === i ? 
                          "#00a0e3" 
                          : "black"
                        }
                      ></box-icon>
                    </div>
                    <div className="what-we-offer-discription">
                      <div
                        className={
                          this.state.hoveredCard===i ? "what-we-offer-subHeading-hover" :
                          "what-we-offer-subHeading"
                        }
                      >
                        {ele.heading}
                      </div>
                      <div className="what-we-offer-subDescription">
                        {ele.description}
                      </div>
                      {/* <a href={ele.linkName} className="what-we-offer-more">
                        More info
                        <i class="icon-right-open-mini pi-icon-right"></i>
                      </a> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <div className="who-are-we">
        <div className="homeSecondPart">
          <section>
            <div>
              <h2 className="what-we-offer-heading">WHO ARE WE</h2>
            </div>
            <ul>
            {WhoAreWe.map((ele, i) => {
              return <li key={i} className={"who-are-we-list"}>{ele}</li>;
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
