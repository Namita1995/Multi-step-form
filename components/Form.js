import React, { Component } from 'react'
import PrimaryDetails from "./PrimaryDetails";
import OfficialDetails from "./OfficialDetails";
import Submission from "./Submission";
import Success from "./Success";

class Form extends Component {

    constructor(props){
        super(props);
        this.state={
            step: 1,
            firstName:"",
            middleName:"",
            lastName:"",
            state: "",
            city:"",
            organisationName:"",
            experience:"",
            salary:"",
            age:"",
            message: ""
        }
    }

    //Proceed to next step
    nextStep = () => {
        const {step}= this.state;
        this.setState(
            {
                step: step + 1
            }
        );
    }

    //to go to previous step
    prevStep = () => {
        const {step}= this.state;
        this.setState(
            {
                step: step - 1
            }
        );
    }

    // handleChange =input =>e => {
        
    //     this.setState({
    //             [input]: e.target.value
    //         });
    // }

    
    handleChange =input =>e => {
        
        this.setState({
                [input]: e.target.value
            });
    }

    render() {
        const {step} = this.state;
        const {firstName, middleName, lastName, state, city, organisationName, experience, salary, age, message} =this.state;
        const values= { firstName, middleName, lastName, state, city, organisationName, experience, salary, age, message};
        
                switch (step) {
                    case 1:
                        return(
                            <PrimaryDetails
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                        );
                    
                    case 2: 
                        return(
                            <OfficialDetails
                                prevStep={this.prevStep}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                        );
                    case 3: 
                        return(
                            <Submission
                                prevStep={this.prevStep}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                        );
                    case 4: 
                    return(
                        <Success
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}   
                        />
                    );
                    
                    default:
                        return null;
                }
    }

}

export default Form;
