import React, { Component } from "react";
import "./TalentAcquisition.css";
import { wwdList } from "./data";

class TalentAcquisition extends Component {
    constructor(props) {
        super(props);
      }
    
  render() {
    return (
        <div className="wwdaboutUs">
        <div className="TalentAcquisitionPart">
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
    );
  }
}

export default TalentAcquisition;
