import Link from "next/link";
import { BarNavWrapper } from "./bar-nav.style";

export const BarNav = ({ children, themeColor, active, id }) => {
  return (
    <Link href="/" passHref>
      <BarNavWrapper id={id} active={active === id} themeColor={themeColor}>
        {children}
      </BarNavWrapper>
    </Link>
  );
};
