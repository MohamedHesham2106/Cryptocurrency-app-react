import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div></div>
      <div>Copyright &copy; 2022 Mohamed Hesham</div>
      <div>
        Data provided by
        <a
          href="https://www.coingecko.com/en/api/documentation"
          target="_blank"
          rel="noreferrer"
        >
          CoinGecko
        </a>
      </div>
    </div>
  );
};

export default Footer;
