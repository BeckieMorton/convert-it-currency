import styles from "./Search.module.css";

import currencylist from "../../../public/data/currencylist.json";
import { useState } from "react";

export const Search = () => {
  //need to use the currency api to get a list of currencies that are available and populate the dropdowns with this

  const [currencies, setCurrencies] = useState();

  //Your API Key: e4e59e71cba709378bb2bfbc
  //signed up with tnl
  //Example Request: https://v6.exchangerate-api.com/v6/e4e59e71cba709378bb2bfbc/latest/USD
  //list of available currencies is in json file in public folder

  setCurrencies(currencylist.filter((currency) => currency.CurrencyName));

  return (
    <div>
      <h2>Search</h2>
      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <p>From</p>
          <select id="dropdown" name="dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
        <div className={styles.searchBox}>
          <p>To</p>
          <select id="dropdown" name="dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
      </div>
    </div>
  );
};
