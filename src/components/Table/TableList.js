import React from "react";
import style from "./TableList.module.css";
import TableRow from "./TableRow";
const TableList = (props) => {
  return (
    <div className={style["table__container"]}>
      <div className={style["table__header"]}>
        <div>Image</div>
        <div>Name</div>
        <div>Symbol</div>
        <div>Price</div>
        <div>24h</div>
        <div>Volume</div>
        <div>Market Cap</div>
      </div>
      {props.filteredData.map((curr) => (
        <TableRow currency={curr} key={curr.id} />
      ))}
    </div>
  );
};

export default TableList;
