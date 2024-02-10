import React, { Component } from "react";
import careersImg from './Assets/careerGreen.jpg'
import "./Careers.css";
import { openings } from "./data";
class Careers extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    // return(
        return (
            <div>
              <img src={careersImg} className="mainImg"></img>
              <div className="aboutUs">
                <div className="AboutUsSecondPart">
                <div>
                      <h3>
Are you passionate about Data warehouse topics and thrive on new challenges in your career?</h3>
<h3>Are you eager to utilize your skills to make significant strides in your field?</h3>
<h3>Look no further than Codeza - your ideal partner for an exciting career!</h3>
                    </div>
                    <div>
                      <h2 className="currentOpeningHeading">Current Openings</h2>
                    </div>
                  <section>
                   

                    <div className="career-list">
                    {openings.map((ele, i) => {
                      return (
                        <div
                          className="openingBlock"
                          xs={3}
                        >
                          <div className="Careerdiscription">
                            <div
                              className={ "servicessubHeading"
                              }
                            >
                              {ele.heading}
                            </div>
                            <div className="openingPoints"><div className="subPointOpening">Experiance: </div>&nbsp;<div className="subPointOpeningValue">{ele.experiance}</div></div>
                            <div className="openingPoints"><div className="subPointOpening">Location: </div>&nbsp;<div className="subPointOpeningValue">Pune, India</div></div>
                            <div className="skills">
                            {ele.skills.map((ele)=><div class="chip">
                                <div class="chip-content">{ele}</div>
                                </div>
                                )}
                            </div>
                          <button className="jdButton" onClick={()=>window.open(`/careers/${ele.id}`)}>Job Description</button>

                          </div>

                        </div>
                      );
                    })}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          );
    // )
  }
}

export default Careers;