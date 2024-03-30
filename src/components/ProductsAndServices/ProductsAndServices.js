import React, { Component } from "react";
import "./services.css";
// import { OurApproach } from "./data";
// import prodtcsAndServicesImg from "./Assets/productsAndServices.jpg";
import prodtcsAndServicesImg from "./Assets/service.png";
import { WhatWeOfferData } from "../Home/data";
import { services } from "./data";


class ProductsAndServices extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={prodtcsAndServicesImg} className="mainImg"></img>
        <div className="aboutUs">
          <div className="AboutUsSecondPart">
            <section>
              <div>
                <h2 className="what-we-offer-heading">Services</h2>
              </div>
              <div className="what-we-offer-list">
              {services.map((ele, i) => {
                return (
                  <a href={`${ele.linkName}`}>
                  <div
                    className="servicesItem"
                    xs={3}
                  >
                    <div className="what-we-offer-discription">
                      <div
                        className={ "what-we-offer-subHeading"
                        }
                      >
                        {ele.heading}
                      </div>
                      <ul className="servicesSubList">
                        {ele.list.map((ele)=><li className='listItem'>{ele}</li>)}
                      </ul> 
                    </div>
                  </div>
                  </a>
                );
              })}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsAndServices;
