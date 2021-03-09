import React, { Component } from 'react'

import "./OfficialDetails.css"

class OfficialDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    
    render() {
        const {values, handleChange}= this.props;
        return (
            <div className="wrapper">
                <div className="form-wrapper">
      
                <h1>Enter Official Details</h1>

                <form>
                    <div className="organisationName">
                        <label>OrganisationName</label>
                        <input 
                            type="text" 
                            placeholder="Enter your OrganisationName" 
                            name="organisationName"
                            value={values.organisationName}
                            onChange={handleChange("organisationName")}
                        />
                    </div>
                    <br/>
                    <div className="experience">
                        <label>Experience</label>
                        <input 
                            type="text" 
                            placeholder="Enter your Experience" 
                            name="experience"
                            value={values.experience}
                            onChange={handleChange("experience")}
                        />
                    </div>
                    <br/>
                    <div className="salary">
                        <label>Salary</label>
                        <input 
                            type="text" 
                            placeholder="Enter your Salary" 
                            name="salary"
                            value={values.salary}
                            onChange={handleChange("salary")}
                        />
                    </div>
                    <br/>
                    <div className="age">
                        <label>Age</label>
                        <input 
                            type="text" 
                            placeholder="Enter your Age" 
                            name="age"
                            value={values.age}
                            onChange={handleChange("age")}
                        />
                    </div>

                    <div className="continue">
                        <button onClick={this.back}>Back</button>
                        <button onClick={this.continue}>Continue</button>
                    </div>
                </form>
                
                </div>
            </div>
        )
    }
}

export default OfficialDetails;
