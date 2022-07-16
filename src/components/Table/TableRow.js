import React from "react";
import style from "./TableRow.module.css";
const TableRow = (props) => {
  return (
    <div className={style["table__row"]}>
      <div>
        <img src={props.currency.image} alt={props.name} />
      </div>
      <div>{props.currency.name}</div>
      <div>{props.currency.symbol.toUpperCase()}</div>
      <div>${props.currency.current_price.toFixed(2)}</div>
      <div
        className={
          props.currency.price_change_percentage_24h > 0
            ? style.positive
            : style.negative
        }
      >
        {props.currency.price_change_percentage_24h.toFixed(2)}%
      </div>
      <div className={style.hide}>${props.currency.total_volume}</div>
      <div className={style.hide}>${props.currency.market_cap}</div>
    </div>
  );
};

export default TableRow;
