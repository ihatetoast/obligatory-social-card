import React, { useState } from "react";
import emailIcon from "../icons/email.png";
import phoneIcon from "../icons/phone.png";
import mobileIcon from "../icons/mobile-phone.png";
import styled from "styled-components";
import Button from "../UI/Button";
import Card from "../UI/Card";
import IconWrapper from "../UI/IconWrapper";
import AddressBlock from './AddressBlock';

const ContactWrapper = styled.div`
  align-items: center;
  border-radius: 12px 12px 0 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-bottom: 1.25em;
  position: relative;
`;
const StyledName = styled.div`
  background: #1f4f6f;
  display: flex;
  margin-bottom: 0.8em;
  padding: 0.8em 0;
  width: 100%;
  justify-content: center;
  h3 {
    color: #fff;
    font-size: 1.5rem;
  }
`;
const ImgWrapper = styled.div`
  align-items: center;
  border: 2px solid #709599;
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
  margin: 1em auto;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  width: 40%;
`;
// change the props to an obj. but not tonight. 
const ContactCard = (props) => {
  const [showAddress, setShowAddress] = useState(false);
  const handleShowAddress = () => {
    setShowAddress(!showAddress);
  };
  return (
    <Card className="contact-card">
      <ContactWrapper>
        <StyledName>
          <h3>{props.name}</h3>
        </StyledName>
        <ImgWrapper>
          <img src={props.avatar} alt={props.name} />
        </ImgWrapper>

        <SocialList>
          <IconWrapper
            className="icon-wrapper"
            hoverContent={props.email}
            imgSrc={emailIcon}
          />
          <IconWrapper
            className="icon-wrapper"
            hoverContent={props.phone}
            imgSrc={phoneIcon}
          />
          <IconWrapper
            className="icon-wrapper"
            hoverContent={props.mobile}
            imgSrc={mobileIcon}
          />
        </SocialList>
        <Button handleClick={handleShowAddress}>
          {showAddress === true ? "Hide address" : "Show address"}
        </Button>
        {showAddress === true ? <AddressBlock streetNumber={props.location.street.number} streetName={props.location.street.name} city={props.location.city} state={props.location.state} country={props.location.country} />: null}

   
      </ContactWrapper>
    </Card>
  );
};
export default ContactCard;
