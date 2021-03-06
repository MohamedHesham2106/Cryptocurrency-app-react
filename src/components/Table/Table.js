import React, { useState } from "react";
import style from "./Table.module.css";
import TableList from "./TableList";
const Table = ({ currency }) => {
  const [search, setSearch] = useState("");

  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
  };
  const filteredData = currency.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className={style.container}>
      <div className={style.search}>
        <input
          type="text"
          placeholder="Search a cryptocurrency..."
          onChange={searchChangeHandler}
        />
      </div>
      <TableList filteredData={filteredData} />
    </div>
  );
};

export default Table;
