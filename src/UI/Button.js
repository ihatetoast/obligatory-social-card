import './Button.css';
function Button(props) {
  const classes = "button " + props.className;
  return <button onClick={props.handleClick} className={classes}>{props.children}</button>;
}
export default Button;
