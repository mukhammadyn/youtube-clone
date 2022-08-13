import { BarNav } from "../../atoms/bar-nav";
import { CategoriesFilter } from "../../organisms/categories-filter";
import { Header } from "../../organisms/header";
import { PremiumAd } from "../../organisms/premium-add/premium-ad.component";

import { Navbar } from "../../organisms/navbar";
import { HomeTempContent, HomeTempMain } from "./home.style";
import MainProvider from "../../../context/main-provider";

export const HomeTemp = () => {
  return (
    <MainProvider>
      <Header />
      <HomeTempMain>
        <Navbar />
        <HomeTempContent>
          <CategoriesFilter />
          <PremiumAd />
        </HomeTempContent>
      </HomeTempMain>
    </MainProvider>
  );
};
