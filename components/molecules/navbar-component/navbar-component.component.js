import { useContext } from "react";
import MainContext from "../../../context/main-context";
import {
  NavbarComponentTitle,
  NavbarComponentWrapper,
} from "./navbar-component.style";

export const NavbarComponent = ({ children, title, ...props }) => {
  const {themeColor} = useContext(MainContext)

  return (
    <NavbarComponentWrapper themeColor={themeColor} {...props}>
      {title && <NavbarComponentTitle>{title}</NavbarComponentTitle>}
      {children}
    </NavbarComponentWrapper>
  );
};
