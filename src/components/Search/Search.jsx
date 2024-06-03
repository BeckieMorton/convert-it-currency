import styles from "./Search.module.css";

import currencylist from "../../data/currencylist.json";
import { useState } from "react";

export const Search = () => {
  //need to use the currency api to get a list of currencies that are available and populate the dropdowns with this

  const countryCurrencyData = currencylist.map((item) => ({
    country: item.Country,
    currency: item.CurrencyName,
  }));

  console.log(`countries:`, countryCurrencyData);

  //Your API Key: e4e59e71cba709378bb2bfbc
  //signed up with tnl
  //Example Request: https://v6.exchangerate-api.com/v6/e4e59e71cba709378bb2bfbc/latest/USD
  //list of available currencies is in json file in public folder

  return (
    <div>
      <h2>Search</h2>
      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <p>From</p>
          <select id="dropdown" name="dropdown">
            {countryCurrencyData.map((list, index) => (
              <option value={list.country} key={index}>
                {list.country} - {list.currency}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.searchBox}>
          <p>To</p>
          <select id="dropdown" name="dropdown">
            {countryCurrencyData.map((list, index) => (
              <option value={list.country} key={index}>
                {list.country} - {list.currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
