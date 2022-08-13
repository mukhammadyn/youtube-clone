import { useContext } from "react";
import MainContext from "../../../context/main-context";

import CheckIcon from "../../../assets/img/icon-check.svg";
import { Wrapper } from "./subtitle.style";

export const Subtitle = ({ children, check }) => {
  const { themeColor } = useContext(MainContext);
  return (
    <Wrapper themeColor={themeColor}>
      {children} {check && <CheckIcon />}
    </Wrapper>
  );
};
