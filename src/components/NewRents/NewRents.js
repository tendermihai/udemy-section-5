import React from "react";
import "./NewRents.css";
import RentsForm from "../NewRents/RentsForm";

const NewRents = (props) => {
  const SaveRentsDataHandler = (enteredRentData) => {
    const RentsData = {
      ...enteredRentData,
      id: Math.random().toString(),
    };
    console.log(RentsData);
    props.onAddRent(RentsData);
  };

  return (
    <div className="new-rents">
      <RentsForm onSaveRentsData={SaveRentsDataHandler} />
    </div>
  );
};

export default NewRents;
