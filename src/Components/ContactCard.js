import React, { useState } from "react";
import styled from "styled-components";
import Card from "../UI/Card";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledName = styled.h3`
  display: inline;
  text-align: center;
  padding: 0.5em 0;
`;
const ImgWrapper = styled.div`
  background: aliceblue;
  display: flex;
  align-items: flex-start;
`;
const SocialList = styled.ul`
  list-style: none;
  padding-left: 0;
`;
const ContactCard = (props) => {
  const [showAge, setShowAge] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const handleShowAge = () => {
    setShowAge(!showAge);
  };
  const handleShowAddress = () => {
    setShowAddress(!showAddress);
  };
  return (
    <Card className="contact-card">
      <ContactWrapper>
        <StyledName>{props.name}</StyledName>
        <ImgWrapper>
          <img src={props.avatar} alt="kitten headshot" />
          <button onClick={handleShowAge}>
            {showAge === true ? "Hide age" : "Show age"}
          </button>
          {showAge === true ? <p>Age: {props.age}</p> : null}
        </ImgWrapper>

        <SocialList>
          <li>email: {props.email}</li>
          <li>phone: {props.phone}</li>
          <li>mobile: {props.mobile}</li>
        </SocialList>
        <button onClick={handleShowAddress}>
          {showAddress === true ? "Hide address" : "Show address"}
        </button>
        {showAddress === true ? (
          <div>
            <p>
              {props.location.street.number + ", " + props.location.street.name}
            </p>
            <p>{props.location.city + ", " + props.location.state}</p>
            <p>{props.location.country}</p>
          </div>
        ) : null}
      </ContactWrapper>
    </Card>
  );
};
export default ContactCard;
