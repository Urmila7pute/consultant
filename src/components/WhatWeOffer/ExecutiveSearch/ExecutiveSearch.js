import React, { Component } from "react";
import "./ExecutiveSearch.css";
import { data } from "./data";

class ExecutiveSearch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="homeSecondPart">
        <section className="what-we-offer">
          <div>
            <h1 className="what-we-offer-heading">EXECUTIVE SEARCH</h1>
          </div>
          <ul className="ul">
            {data.map((ele, i) => {
              return (
                <li key={i} className={"list"}>
                  {ele.content}
                  {ele?.list && (
                    <ul className="nestedlist">
                      {ele.list.map((li, index) => {
                        return <li key={index} className={"nextedlistli"}>{li}</li>;
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}
export default ExecutiveSearch;
