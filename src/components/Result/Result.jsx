import { useState } from "react";
import styles from "./Result.module.css";

export const Result = ({ fromCurrency, toCurrency }) => {
  const exchangeRateAPI = `https://v6.exchangerate-api.com/v6/e4e59e71cba709378bb2bfbc/latest/${fromCurrency}`;
  const [exchangeInfo, setExchangeInfo] = useState();
  const [conversionRate, setConversionRate] = useState(null);
  const [amount, setAmount] = useState();

  const fetchExchange = async () => {
    try {
      const response = await fetch(exchangeRateAPI);
      if (!response.ok) {
        throw new Error("Network Response Error");
      }
      const json = await response.json();
      setExchangeInfo(json);

      const rate = json.conversion_rates[toCurrency];
      if (rate !== undefined) {
        setConversionRate(rate);
      } else {
        setConversionRate(null);
      }
    } catch (error) {
      console.log("Error fetching", error);
    }
  };

  console.log(`exchange info:`, exchangeInfo);

  if (conversionRate !== null) {
    console.log(`conversion rate:`, conversionRate);
  } else {
    console.log("toCurrency is not found in any of the objects ");
  }

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.resultsBox}>
        <h3>Amount</h3>
        <p>
          <input
            type="number"
            value={amount}
            min="1"
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount"
          />
        </p>
      </div>
      <div className={styles.resultsBox}>
        <h3>Result</h3>
        <p>
          <button onClick={fetchExchange}>Get Exchange Rate</button>
          <p>
            {amount}&nbsp;{fromCurrency} = {Math.round(conversionRate * amount)}
            &nbsp;
            {toCurrency}
          </p>
        </p>
      </div>
    </div>
  );
};
