import React from "react";
import styled from "styled-components";

const StyledListItem = styled.li`
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
  &:after{
    ${'' /* content: "I am content for styling"; */}
    background: #fff;
    position: absolute;

  }

  
`;
// ON HOVER, SHOW THE CONTENT AS BEFORE OR AFTER`
const StyledIcon = styled.img`
width: 100%;
`
const IconWrapper = (props) => {
  const classes = "icon-wrapper " + props.className;
  return <StyledListItem className={classes}><StyledIcon src={props.imgSrc} alt="icon"/> </StyledListItem>
};
export default IconWrapper;
