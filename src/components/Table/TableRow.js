import React from "react";
import style from "./TableRow.module.css";
const TableRow = (props) => {
  console.log("PROPS: " + props);
  return (
    <div className={style["table__row"]}>
      <p>
        <img src={props.currency.image} alt={props.name} />
      </p>
      <p>{props.currency.name}</p>
      <p>{props.currency.symbol}</p>
      <p>${props.currency.current_price.toFixed(2)}</p>
      <p
        className={
          props.currency.price_change_percentage_24h > 0
            ? style.positive
            : style.negative
        }
      >
        {props.currency.price_change_percentage_24h.toFixed(2)}%
      </p>
      <p>{props.currency.total_volume}</p>
      <p>{props.currency.market_cap}</p>
    </div>
  );
};

export default TableRow;
