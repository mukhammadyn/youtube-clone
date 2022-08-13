import {
  NavbarComponentTitle,
  NavbarComponentWrapper,
} from "./navbar-component.style";

export const NavbarComponent = ({ children, title, ...props }) => {
  return (
    <NavbarComponentWrapper {...props}>
      {title && <NavbarComponentTitle>{title}</NavbarComponentTitle>}
      {children}
    </NavbarComponentWrapper>
  );
};
