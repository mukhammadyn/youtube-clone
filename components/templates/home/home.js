import { CategoriesFilter } from "../../organisms/categories-filter";
import { Header } from "../../organisms/header";
import { PremiumAd } from "../../organisms/premium-add/premium-ad.component";

import { Navbar } from "../../organisms/navbar";
import { HomeTempContent, HomeTempMain } from "./home.style";
import MainProvider from "../../../context/main-provider";
import { Container } from "../../container";

export const HomeTemp = () => {
  return (
    <MainProvider>
      <Container>
        <Header />
        <HomeTempMain>
          <Navbar />
          <HomeTempContent>
            <CategoriesFilter />
            <PremiumAd />
          </HomeTempContent>
        </HomeTempMain>
      </Container>
    </MainProvider>
  );
};
