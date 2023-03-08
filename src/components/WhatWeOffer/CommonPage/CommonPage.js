import React, { Component } from "react";
import "./CommonPage.css";
import { InternationalRecruitmentData, RecruitmentProcessData, StartupHiringData, ContractStaffingData } from "./data";

class CommonPage extends Component {
  constructor(props) {
    super(props);
    this.state={
        data:[],
        title:""
    }
  }
  componentDidMount(){
    console.log("this.props.history", window.location.pathname)
    let data=[];
    let title=""
    if(window.location.pathname === "/internationalRecruitment"){
        data=InternationalRecruitmentData;
        title="INTERNATIONAL RECRUITMENT"
    }
    if(window.location.pathname === "/recruitmentProcess"){
        data=RecruitmentProcessData;
        title="RECRUITMENT PROCESS OUTSOURCING"
    }
    if(window.location.pathname === "/startupHiring"){
        data=StartupHiringData;
        title="STARTUP HIRING"
    }
    if(window.location.pathname === "/contractStaffing"){
        data=ContractStaffingData;
        title="CONTRACT STAFFING"
    }
    
    this.setState({data:data, title:title})
  }
  render() {
    return (
      <div className="homeSecondPart">
        <section className="what-we-offer">
          <div>
            <h1 className="what-we-offer-heading">
            {this.state.title}
            </h1>
          </div>
          <ul className="ul">
            {this.state.data.map((ele, i) => {
              return (
                <li key={i} className={"list"}>
                    {ele}
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}
export default CommonPage;
