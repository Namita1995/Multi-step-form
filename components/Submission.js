import React, { Component } from 'react';

import "./Submission.css";

class Submission extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.nextStep();    
    }

    render() {
        console.log(" final state values",this.props.values);
        const {firstName, middleName, lastName, state, city, organisationName, experience, salary, age} = this.props.values;

        return (
            <div className="submit-wrapper">

                <h1>Confirm</h1>
                <div className="details-wrapper">
                <div>
                    <h3>FirstName</h3>
                    <h6>{firstName}</h6>
                </div>
                <div>
                    <h3>MiddleName</h3>
                    <h6>{middleName}</h6>
                </div>
                <div>
                    <h3>LastName</h3>
                    <h6>{lastName}</h6>
                </div>
                <div>
                    <h3>State</h3>
                    <h6>{state}</h6>
                </div>
                <div>
                    <h3>City</h3>
                    <h6>{city}</h6>
                </div>
                <div>
                    <h3>OrganisationName</h3>
                    <h6>{organisationName}</h6>
                </div>
                <div>
                    <h3>Experience</h3>
                    <h6>{experience}</h6>
                </div>
                <div>
                    <h3>Salary</h3>
                    <h6>{salary}</h6>
                </div>
                <div>
                    <h3>Age</h3>
                    <h6>{age}</h6>
                </div>
                <br/>
                <div className="submit">
                    <button onClick={this.back}>Back</button>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
                </div>
                
            </div>
        )
    }
}

export default Submission;
