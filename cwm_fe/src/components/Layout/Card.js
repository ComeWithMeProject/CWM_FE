import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.container} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
