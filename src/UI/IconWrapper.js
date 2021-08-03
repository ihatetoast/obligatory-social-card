import React from "react";
import styled from "styled-components";
const StyledListItem = styled.li`
  background: #fff;
  display: inline-block;
  width: 30px;
  height: 30px;
  img {
    width: 100%;
  }
`;

// UP NEXT: CENTER THE INFO DIV BELOW THE ICON. ADD TRIANGLE/ROTATED SQUARE
const StyledDetail = styled.div`
  background-color: #fff;
  border: 1px solid #1f4f6f;
  border-radius: 3px;
  box-shadow: 0px 2px 2px rgba(31, 79, 111, 0.5);
  display: none;
  font-size: 0.8rem;
  padding: 5px 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  white-space: nowrap;
  ${StyledListItem}:hover & {
    display: block;
  }
`;
const IconWrapper = (props) => {
  const classes = "icon-wrapper " + props.className;
  return (
    <StyledListItem className={classes}>
      <img src={props.imgSrc} alt="icon" />
      <StyledDetail>{props.hoverContent}</StyledDetail>
    </StyledListItem>
  );
};
export default IconWrapper;
