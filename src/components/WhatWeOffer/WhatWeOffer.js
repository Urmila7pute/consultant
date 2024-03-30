import React, { Component } from "react";
import "./WhatWeOffer.css";
import { WhatWeOfferData } from "./data";

class WhatWeOffer extends Component {
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
        <div className="homeSecondPart">
          <section className="">
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
        </div> 
      </div>
    );
  }
}

export default WhatWeOffer;
