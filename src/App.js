import React, { useEffect, useState, useCallback } from "react";
import Header from "./components/Header/Header";
import Overview from "./components/Overview/Overview";
import Table from "./components/Table/Table";
import axios from "axios";
import Footer from "./components/Footer/Footer";

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
      <Table currency={currency} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
