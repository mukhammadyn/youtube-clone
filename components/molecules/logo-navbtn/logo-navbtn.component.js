import { Button } from "../../atoms/button";
import { Logo } from "../../atoms/logo";

import Burger from "../../../assets/img/icon-burger.svg";

import { LogoNavBtnWrapper } from "./logo-navbtn.style";

export const LogoNavBtn = () => {
  return (
    <LogoNavBtnWrapper>
      <Button>
        <Burger />
      </Button>
      <Logo />
    </LogoNavBtnWrapper>
  );
};
