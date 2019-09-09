import React, { Component } from "react";
import { connect } from "react-redux";

class CarDetails extends Component {
    render(){
       
        if(!this.props.detail){
            return (
                <p>detel info</p>
            )
        }
        return(
            <div>
                <p>{this.props.detail.description}</p> 
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        detail: state.details
    }
}

export default connect(mapStateToProps)(CarDetails)