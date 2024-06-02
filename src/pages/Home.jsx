import React from "react";
import { Header } from "../components/Header/Header";
import { Search } from "../components/Search/Search";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <Footer />
    </div>
  );
};
