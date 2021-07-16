import React, {useState} from "react";
import Card from "../UI/Card";

const ContactCard = (props) => {
    const [showAge, setShowAge] = useState(false);
    const handleShowAge =()=>{
        setShowAge(!showAge);
    }
  return (
    <Card>
      <div className="card">
        <img src={props.avatar} alt="kitten headshot" />
        <p>Name: {props.name}</p>
        <p>email: {props.email}</p>
        <button onClick={handleShowAge}>{showAge === true ? "Hide age" : "Show age"}</button>
        {showAge === true ? <p>Age: {props.age}</p> : null}
      </div>
    </Card>
  );
}
export default ContactCard;
