import React, {useState} from "react";
import Card from "../UI/Card";

const ContactCard = (props) => {
    const [showAge, setShowAge] = useState(false);
    const [showAddress, setShowAddress] = useState(false);
    const handleShowAge =()=>{
        setShowAge(!showAge);
    }
    const handleShowAddress=()=>{
        setShowAddress(!showAddress)
    }
  return (
    <Card>
      <div className="card">
        <img src={props.avatar} alt="kitten headshot" />
        <p>Name: {props.name}</p>
        <button onClick={handleShowAge}>{showAge === true ? "Hide age" : "Show age"}</button>
        {showAge === true ? <p>Age: {props.age}</p> : null}
        <ul>
            <li>email: {props.email}</li>
            <li>phone: {props.phone}</li>
            <li>mobile:{props.mobile}</li>
        </ul>
        <button onClick={handleShowAddress}>{showAddress === true ? "Hide address" : "Show address"}</button>
        {showAddress === true ? <div>
                <p>{props.location.street.number+', '+props.location.street.name}</p>
                <p>{props.location.city+', '+props.location.state}</p> 
                <p>{props.location.country}</p>
            </div>
            : null}
        
      </div>
    </Card>
  );
}
export default ContactCard;
