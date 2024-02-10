import React, { Component } from "react";
import './CareerDescription.css';
import { openings } from "../Careers/data";
import FormInput from "../ContactUs/formInputes";
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
class CareerDescription extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedJD: {}, formData:{} }
    }
    componentDidMount() {
        console.log('propssss', this.props)
        const seperateUrls = this.props?.location?.pathname.split("/") || ""
        const current = openings.filter(ele => ele.id === seperateUrls[seperateUrls.length - 1])
        this.setState({ selectedJD: current[0] })
        if(current[0].discription || current[0].Responsibilities?.length || current[0].Requirements?.length){

        }else{
           window.location.href ="/404"
        }
    }
    onChangeForm = (name, value) =>{
        console.log('name, value', name, value)
        const { formData: form } = this.state;
        form[`${name}`]=value;
        this.setState({formData:form})
    }
    handleSubmit(event){
        //  event.preventDefault();
         console.log("this.state handleSubmit", this.state.formData)
    // console.log(`The name you entered was: ${this.state.formData}`)
    }
    render() {
        const { selectedJD } = this.state;
        // console.log('this.state', this.state)
        const { Responsibilities, discription, Requirements, niceToHave } = selectedJD
        return (
            <div className="careerPage">
                <div className="parts">
                    <h2 className="heading">{selectedJD.heading}</h2>
                    {selectedJD.discription && <>
                        <h3>Job Description</h3>
                        <div className="subPointCareer">{selectedJD.discription}</div>
                    </>}
                    {Responsibilities?.length && <>
                        <h3 className="headingH3Career">Responsibilities</h3>
                        <ul className="openingList">
                            {Responsibilities.map((ele) => <li className='listItemCareer'>{ele}</li>)}
                        </ul>
                    </>}
                    {Requirements?.length && <>
                        <h3 className="headingH3Career">Requirements</h3>
                        <ul className="openingList">
                            {Requirements.map((ele) => <li className='listItemCareer'>{ele}</li>)}
                        </ul>
                    </>}
                    {niceToHave?.length && <>
                        <h3 className="headingH3Career">Nice To Have</h3>
                        <ul className="openingList">
                            {niceToHave.map((ele) => <li className='listItemCareer'>{ele}</li>)}
                        </ul>
                    </>}
                </div>
                 <div className="parts2">
                    <form  className="Resumeform" id="form" action="" //onSubmit={this.handleSubmit}
                    onSubmit={e=>e.preventDefault()}
                    >
                        <h1 className="formh1"> Apply Now</h1>
                        <FormInput name="name" placeholder="Name" label="Name" type="text" handleChange={this.onChangeForm} />
                        <FormInput name="email" placeholder="Email" label="Email" type="email" handleChange={this.onChangeForm} />
                        <FormInput name="phone" placeholder="Phone" label="Phone" type="number" handleChange={this.onChangeForm}/>
                        <FormInput name="message" placeholder="Current Location" label="Current Location" type="text"handleChange={this.onChangeForm}/>
                        <FormInput name="expectedCtc" placeholder="Expected CTC" label="Expected CTC" type="text" handleChange={this.onChangeForm}/>
                        <FormInput name="noticePeriod" placeholder="Notice Period" label="Notice Period" type="text" handleChange={this.onChangeForm}/>
                        <input type="file" id="resume" class="sr-only" aria-label="Resume" onChange={(e)=>{console.log('e',e);const files = e.target.files;console.log("files", files)}} hidden />
                        <label for="resume" class="btn" aria-hidden="true">Upload Resume</label>
                        <div>
                            <span id="file-chosen" className="nofilechoosen">No file chosen</span>
                        </div>
                        <input type="submit" value="Submit" className="submitButton"
                        onClick={()=>this.handleSubmit()}
                        />

                    </form>
                </div>
            </div>
        );
    }
}
export default CareerDescription;
