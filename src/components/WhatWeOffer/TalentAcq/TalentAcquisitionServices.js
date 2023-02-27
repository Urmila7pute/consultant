import React, { Component } from "react";
import "./TalentAcq.css";
import { data } from "./data";

class TalentAcq extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="homeSecondPart">
        <section className="what-we-offer">
          <div>
            <h1 className="what-we-offer-heading">
              TALENT ACQUISITION SERVICES
            </h1>
          </div>
          <ul className="talentAcq-ul">
            {data.map((ele, i) => {
              return (
                <li key={i} className={"list"}>
                  <>
                    {ele.bold && (
                      <>
                        <b>{ele.bold}</b>&nbsp;
                      </>
                    )}
                    {ele.content}
                  </>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}
export default TalentAcq;
