import { useContext, useState } from "react";
import MainContext from "../../../context/main-context";

export const useNavbarProps = () => {
  const [active, setActive] = useState("1");

  const handleOnClick = (e) => {
    if (e.target.matches("a[id]")) setActive(e.target.id);
  };

  const {openBar} = useContext(MainContext)

  return {
    active,
    handleOnClick,
    openBar,
  };
};
