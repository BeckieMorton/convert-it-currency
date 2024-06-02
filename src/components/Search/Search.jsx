import styles from "./Search.module.css";

export const Search = () => {
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
