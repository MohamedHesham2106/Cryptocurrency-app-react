import React from "react";
import CardList from "../Card/CardList";
import style from "./Overview.module.css";
const Overview = () => {
  return (
    <div className={style.overview}>
      <h1>Overview</h1>
      <h5>
        Today:{" "}
        <span>
          {new Date().toLocaleString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </h5>
      <CardList />
    </div>
  );
};

export default Overview;
