import React from "react";
import style from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style["card__info"]}>
        <h6>{props.type}</h6>
        <h5>{props.value}</h5>
      </div>
      <div
        className={style["card__icon"]}
        style={{ backgroundColor: `${props.colors}` }}
      >
        {props.icon}
      </div>
    </div>
  );
};

export default Card;
