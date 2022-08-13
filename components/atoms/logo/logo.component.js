import Link from "next/link";

import { LogoLink } from "./logo.style";
import LogoYoutube from "../../../assets/img/logo-youtube.svg";
import { useContext } from "react";
import MainContext from "../../../context/main-context";

export const Logo = () => {
  const {themeColor} = useContext(MainContext)
  return (
    <Link href="/" passHref>
      <LogoLink themeColor={themeColor}>
        <LogoYoutube />
      </LogoLink>
    </Link>
  );
};
