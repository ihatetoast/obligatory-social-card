import React from "react";
import Card from '../UI/Card'



const AddressBlock = (props) => {
  return (
    <Card className="address-card">
      <p>{props.streetNumber + ", " + props.streetName}</p>
      <p>{props.city + ", " + props.state}</p>
      <p>{props.country}</p>
    </Card>
  );
};
export default AddressBlock;
