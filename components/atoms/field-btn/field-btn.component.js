import { useContext } from "react";
import MainContext from "../../../context/main-context";
import { FieldBtnWrapper } from "./field-btn.style";

export const FieldBtn = ({ children, round }) => {
  const {themeColor} = useContext(MainContext)
  return (
    <FieldBtnWrapper round={round} themeColor={themeColor}>
      {children}
    </FieldBtnWrapper>
  );
};
