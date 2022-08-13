import { useContext } from "react";
import MainContext from "../../../context/main-context";
import { ButtonWrapper } from "./button.style";

export const Button = ({ children, light, round, ...props }) => {
  const {themeColor} = useContext(MainContext)
  return (
    <ButtonWrapper
      themeColor={themeColor}
      light={light}
      round={round}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
};
