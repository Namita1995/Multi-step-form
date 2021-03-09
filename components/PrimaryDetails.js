import React, { Component } from 'react';

import "./PrimaryDetails.css";
// import list from "../cities.json";
import list from "../Sample.json";

class PrimaryDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            message:""
        }
    }

    continue = e => {
        e.preventDefault();
        if(this.props.firstName === undefined || this.props.lastName === undefined ){
            this.setState({message:"All fields are mandatory"})
            
        }
        else{
            this.setState({message: null})
            this.props.nextStep();
        }
        // this.props.nextStep();
        
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }
    
    render() {
        
        const {values, handleChange}= this.props;
        const states= list.map(
            item => <option id={item.id}>{item.state}</option>
        )
        
        
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Enter Primary Details</h1>
                    <form>
                    <div>
                        <div className="firstName">
                            <label>FirstName</label>
                            <input 
                                type="text" 
                                placeholder="Enter your FirstName" 
                                name="firstName"
                                fullwidth
                                value={values.firstName}
                                onChange={handleChange("firstName")}
                            />
                        </div>
                        <br/>
                        <div className="middleName">
                            <label>MiddleName</label>
                            <input 
                                type="text" 
                                placeholder="Enter your MiddleName" 
                                name="middleName"
                                
                                value={values.middleName}
                                onChange={handleChange("middleName")}
                            />
                        </div>
                        <br/>
                        <div className="lastName">
                            <label>LastName</label>
                            <input 
                                type="text" 
                                placeholder="Enter your LastName" 
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange("lastName")}
                            />
                        </div>
                        <br/>
                        <div>
                            <label>State</label>
                            <select
                                value={this.state.selectedState}
                                onChange={this.handleChange} 
                            >
                            {list.map(
                                item => <option id={item.id}>{item.state}</option>
                            )
                            }
                            </select>
                        </div>
                        
                    </div>
                
                <div className="continue">
                    <button type="submit" onClick={this.continue}>Continue</button>
                </div>
                </form>
                </div>
            </div>
        )
    }
}

export default PrimaryDetails;
