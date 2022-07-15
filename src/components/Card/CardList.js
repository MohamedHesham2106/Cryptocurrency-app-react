import React, { useState, useEffect, useCallback } from "react";
import style from "./CardList.module.css";
import axios from "axios";
import { FaCoins, FaChartPie, FaChartArea, FaChartBar } from "react-icons/fa";
import Card from "./Card";
const CardList = () => {
  const [categories, setCategories] = useState([]);
  const [assetPlatforms, setAssetPlatforms] = useState([]);
  const [exchanges, setExchanges] = useState([]);
  const [indexes, setIndexes] = useState([]);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/categories/list",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      setCategories(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const fetchAssetPlatforms = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/asset_platforms",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      setAssetPlatforms(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const fetchExchanges = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/exchanges",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      setExchanges(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const fetchIndexes = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/indexes",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      setIndexes(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const transformedData = [
    {
      type: "CATEGORIES",
      value: categories.length,
      icons: <FaCoins />,
      color: "#e53934",
    },
    {
      type: "EXCHANGES",
      value: exchanges.length,
      icons: <FaChartArea />,
      color: "#43a047",
    },
    {
      type: "ASSET PLATFORM",
      value: assetPlatforms.length,
      icons: <FaChartPie />,
      color: "#f98c00",
    },
    {
      type: "MARKET INDEXES",
      value: indexes.length,
      icons: <FaChartBar />,
      color: "#407ad6",
    },
  ];

  useEffect(() => {
    fetchCategories();
    fetchAssetPlatforms();
    fetchExchanges();
    fetchIndexes();
  }, [fetchCategories, fetchAssetPlatforms, fetchExchanges, fetchIndexes]);
  return (
    <div className={style["card__container"]}>
      {transformedData.map((data) => (
        <Card
          type={data.type}
          value={data.value}
          key={data.type}
          icon={data.icons}
          colors={data.color}
        />
      ))}
    </div>
  );
};

export default CardList;
