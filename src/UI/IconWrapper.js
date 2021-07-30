import React from "react";
import styled from "styled-components";
const StyledListItem = styled.li`
  background: #fff;
  display: inline-block;
  position: relative;
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
  box-shadow: 0 1px 2px rgba(31, 79, 111, 0.25);
  display: none;
  padding: 5px 10px;
  position: absolute;
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
