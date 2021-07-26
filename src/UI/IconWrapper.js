import React from 'react';
import './IconWrapper.css';

const IconWrapper = (props) => {
  const classes = "icon-wrapper " + props.className;
  return (
    <li className={classes}>
      {props.children}
    </li>
  )
}
export default IconWrapper;