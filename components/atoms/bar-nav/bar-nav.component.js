import Link from "next/link";
import { useContext } from "react";
import MainContext from "../../../context/main-context";
import { BarNavWrapper } from "./bar-nav.style";

export const BarNav = ({ children, active, id }) => {
  const { themeColor } = useContext(MainContext);
  return (
    <Link href="/" passHref>
      <BarNavWrapper id={id} active={active === id} themeColor={themeColor}>
        {children}
      </BarNavWrapper>
    </Link>
  );
};
