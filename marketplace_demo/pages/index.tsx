import type { NextPage } from "next";
import Carousel from "../components/Carousel";
import { Page } from "../components/Page";
import MarketplacePage from "./MarketplacePage";
import MyCollectionPage from "./MyCollectionPage";

const Home: NextPage = () => {
  return (
    <MarketplacePage />
  );
};

export default Home;
