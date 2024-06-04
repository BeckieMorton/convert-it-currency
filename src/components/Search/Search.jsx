import currencylist from "../../data/currencylist.json";
import { useState } from "react";
import { Result } from "../Result/Result";

import styles from "./Search.module.css";

export const Search = () => {
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  //get data from json file into an array to use to map for the dropdown select
  const countryCurrencyData = currencylist.map((item) => ({
    country: item.Country,
    currency: item.CurrencyName,
    currencyCode: item.CurrencyCode,
  }));

  console.log(countryCurrencyData);

  return (
    <div>
      <h3>Search</h3>
      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <p>From</p>
          <select
            value={fromCurrency}
            onChange={(event) => setFromCurrency(event.target.value)}
          >
            {countryCurrencyData.map((list, index) => (
              <option value={list.currencyCode} key={index}>
                {list.country} - {list.currency}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.searchBox}>
          <p> </p>
          <button>&lt;&gt;</button>
        </div>
        <div className={styles.searchBox}>
          <p>To</p>
          <select
            value={toCurrency}
            onChange={(event) => setToCurrency(event.target.value)}
          >
            {countryCurrencyData.map((list, index) => (
              <option value={list.currencyCode} key={index}>
                {list.country} - {list.currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Result toCurrency={toCurrency} fromCurrency={fromCurrency} />
    </div>
  );
};
