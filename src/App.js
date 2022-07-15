import React, { useEffect, useState, useCallback } from "react";
import Header from "./components/Header/Header";
import Overview from "./components/Overview/Overview";
import CurrencyTable from "./components/Table/CurrencyTable";
import axios from "axios";

function App() {
  const [currency, setCurrency] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false";
  const fetchCurrency = useCallback(async () => {
    try {
      const response = await axios.get(url);
      setCurrency(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchCurrency();
  }, [fetchCurrency]);

  return (
    <React.Fragment>
      <Header />
      <Overview />
      <CurrencyTable currency={currency} />
    </React.Fragment>
  );
}

export default App;
