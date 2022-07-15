import React from "react";
import style from "./Header.module.css";
import { FaCoins } from "react-icons/fa";
const Header = () => {
  return (
    <React.Fragment>
      <nav className={style.header}>
        <div className={style["header__container"]}>
          <span>
            <FaCoins />
          </span>
          <h2>Cryptocurrency</h2>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
