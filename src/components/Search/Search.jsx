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
      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <label>From</label>
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
          <button
            style={{
              fontWeight: "900",
              fontSize: "16px",
              borderRadius: "60px",
            }}
          >
            {/* <img src="./assets/switch-green.png" alt="switch currency" /> */}
            &#x21c6;
          </button>
        </div>
        <div className={styles.searchBox}>
          <label>To</label>
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
