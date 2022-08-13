import { useContext, useState } from "react";
import MainContext from "../../../context/main-context";

export const useHeaderProps = () => {
  const [isOpen, setOpen] = useState(false);

  const { themeColor } = useContext(MainContext);

  return {
    isOpen,
    setOpen,
    themeColor,
  };
};
