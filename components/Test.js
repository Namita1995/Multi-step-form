import React, { Component } from 'react';

import list from "../Sample.json";

class Test extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedState: ""
        }
    }

    handleChange = (e) => {
            const {name, value} = e.target
            this.setState({ [name]: value })
    }

    getStates(){
        list.map(
            item => {
                return <option key={list.id}>{item.state}</option>;
            }
        )
    }


    render() {
        
        const states= list.map(
            item => <option id={item.id}>{item.state}</option>
        )
        
        console.log("selected state", this.state.selectedState);
        return(
                <div>
                    <select
                        value={this.state.selectedState}
                        onChange={this.handleChange} >
                        {list.map(
                            item => <option id={item.id}>{item.state}</option>
                        )
                        }
                    </select>
                </div>
        )
               
    }
}

export default Test
