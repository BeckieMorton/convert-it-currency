import { Header } from "../components/Header/Header";
import { Search } from "../components/Search/Search";
import { Footer } from "../components/Footer/Footer";

import styles from "./Home.module.css";
export const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Search />
      <Footer />
    </div>
  );
};
