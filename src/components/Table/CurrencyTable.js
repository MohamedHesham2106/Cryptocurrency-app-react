import React, { useState } from "react";
import style from "./CurrencyTable.module.css";
import TableRow from "./TableRow";

const CurrencyTable = ({ currency }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
  };
  const filteredData = currency.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
  const pageChangeHandler = (event, index) => {
    setPage(index);
  };

  return (
    <div className={style.container}>
      <div className={style.search}>
        <input
          type="text"
          placeholder="Search a cryptocurrency..."
          onChange={searchChangeHandler}
        />
      </div>
      <div className={style["table__container"]}>
        <div className={style["table__header"]}>
          <p>Image</p>
          <p>Name</p>
          <p>Symbol</p>
          <p>Price</p>
          <p>24h</p>
          <p>Volume</p>
          <p>Market Cap</p>
        </div>
        {filteredData.map((curr) => (
          <TableRow currency={curr} key={curr.id} />
        ))}
      </div>
    </div>
  );
};

export default CurrencyTable;
