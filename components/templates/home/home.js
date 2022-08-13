import { CategoriesFilter } from "../../organisms/categories-filter";
import { Header } from "../../organisms/header";
import { PremiumAd } from "../../organisms/premium-add/premium-ad.component";

import { Navbar } from "../../organisms/navbar";
import { HomeTempContent, HomeTempMain } from "./home.style";
import MainProvider from "../../../context/main-provider";
import { Container } from "../../container";
import { VideoList } from "../../organisms/video-list";

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
            <VideoList />
          </HomeTempContent>
        </HomeTempMain>
      </Container>
    </MainProvider>
  );
};
