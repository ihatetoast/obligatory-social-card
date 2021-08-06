import React from "react";
import styled from "styled-components";

const AddressBlock = (props) => {
  return (
    <div>
      <p>{props.streetnumber + ", " + props.streetName}</p>
      <p>{props.city + ", " + props.state}</p>
      <p>{props.country}</p>
    </div>
  );
};
export default AddressBlock;
