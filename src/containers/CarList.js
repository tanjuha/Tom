import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {selectCar} from "../actions/carActions";

class CarList extends Component {
  render() {
    console.log(this.props.cars);
    return (
      <ol>
        {this.props.cars.map(car => {
          return (
            <li key={car.id}>
              {car.name}
              <button onClick = {() => this.props.selectCar(car)} type="button" className="btn btn-success">
                info
              </button>
            </li>
          );
        })}
      </ol>
    );
  }
}
function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

 function mapDispatchToProps(dispatch) {
     return bindActionCreators({selectCar} , dispatch)
 }

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
