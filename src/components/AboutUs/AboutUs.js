import React, { Component } from "react";
import "./AboutUs.css";
import { DWHlist, OurApproach, wwdList } from "./data";
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
        <div className="aboutUs">
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
        </div>
        <div className="wwdaboutUs">
        <div className="AboutUsSecondPart">
            <section>
              <div>
                <h2 className="what-we-offer-heading">WHAT WE DO</h2>
              </div>
              <div className="what-we-do-block">
                {wwdList.map((ele, i)=>{
                  return <div className="wwdItem" //style={{height: i===1?"549px":'auto'}}
                  >
                  <div className="whatWeDoHeader">{ele.title}</div>
                  {ele.discription && <div className="wwddis" > {ele.discription}</div>}
                  <div className="wwdlistDes">{ele.listDes}</div>
                  <ul>
                    {ele.list.map((ele, i) => {
                      return (
                        <li key={i} className={"wwdlist"}>
                          {ele.label}
                          {ele.children && 
                          <ul>
                            {ele.children.map((child)=> {return (<li className={"wwdsublist"}>{child}</li>)})}
                          </ul>}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                })}
              </div>
            </section>
          </div>
          </div>
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
              <ul className="aboutUs-ul">
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
      </div>
    );
  }
}

export default AboutUs;
