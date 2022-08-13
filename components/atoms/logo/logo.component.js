import Link from "next/link";

import { LogoLink } from "./logo.style";
import LogoYoutube from "../../../assets/img/logo-youtube.svg";

export const Logo = ({ themeColor }) => {
  return (
    <Link href="/" passHref>
      <LogoLink themeColor={themeColor}>
        <LogoYoutube />
      </LogoLink>
    </Link>
  );
};
