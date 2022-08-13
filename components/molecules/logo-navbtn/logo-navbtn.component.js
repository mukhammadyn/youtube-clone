import { Button } from "../../atoms/button";
import { Logo } from "../../atoms/logo";

import Burger from "../../../assets/img/icon-burger.svg";

import { LogoNavBtnWrapper } from "./logo-navbtn.style";
import { useContext } from "react";
import MainContext from "../../../context/main-context";

export const LogoNavBtn = () => {

  const {setOpenBar} = useContext(MainContext)

  return (
    <LogoNavBtnWrapper>
      <Button onClick={() => setOpenBar(prev => !prev)}>
        <Burger />
      </Button>
      <Logo />
    </LogoNavBtnWrapper>
  );
};
