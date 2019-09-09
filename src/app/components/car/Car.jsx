import React from "react";
import CarList from "../../../containers/CarList";
import CarDetails from "../../../containers/CarDetails"

const Car = () => {
  return (
    <>
      <h3>Cars list :</h3>
      <CarList />
      <CarDetails/>

    </>
  );
};

export default Car;
