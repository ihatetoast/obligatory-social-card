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
        <img src="http://placekitten.com/150/150" alt="kitten headshot" />
        <p>Name: Dude McTude</p>
        <p>email: dude@mctude.com</p>
        <button onClick={handleShowAge}>{showAge === true ? "Hide age" : "Show age"}</button>
        {showAge === true ? <p>Age: 25</p> : null}
      </div>
    </Card>
  );
}
export default ContactCard;
