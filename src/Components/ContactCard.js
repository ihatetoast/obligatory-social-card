import React, { useState } from "react";
import styled from "styled-components";
import Button from '../UI/Button';
import Card from "../UI/Card";

const ContactWrapper = styled.div`
  align-items: center;
  border-radius: 12px 12px 0 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const StyledName = styled.div`
background: #1f4f6f;
    display: flex;
    margin-bottom: .8em;
    padding: .8em 0;
    width: 100%;
    justify-content: center;
    h3 {
      color: #fff;
      font-size: 1.5rem;
    }

`;
const ImgWrapper = styled.div`
align-items: center;
  border: 2px solid #709599;🇦
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 140px;
  width: 140px;
  img {
    border-radius: inherit;
    height: 130px;
    width: 130px;
  }
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
        <StyledName><h3>{props.name}</h3></StyledName>
        <ImgWrapper>
          <img src={props.avatar} alt="kitten headshot" />
        </ImgWrapper>

        <SocialList>
          <li>email: {props.email}</li>
          <li>phone: {props.phone}</li>
          <li>mobile: {props.mobile}</li>
        </SocialList>
        <Button handleClick={handleShowAddress}>
          {showAddress === true ? "Hide address" : "Show address"}
        </Button>
        {showAddress === true ? (
          <div>
            <p>
              {props.location.street.number + ", " + props.location.street.name}
            </p>
            <p>{props.location.city + ", " + props.location.state}</p>
            <p>{props.location.country}</p>
          </div>
        ) : null}
        <Button handleClick={handleShowAge}>
          {showAge === true ? "Hide age" : "Show age"}
        </Button>
        {showAge === true ? <p>Age: {props.age}</p> : null}
      </ContactWrapper>
    </Card>
  );
};
export default ContactCard;
