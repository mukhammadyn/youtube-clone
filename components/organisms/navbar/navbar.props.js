import { useState } from "react";

export const useNavbarProps = () => {
  const [active, setActive] = useState("1");

  const handleOnClick = (e) => {
    if (e.target.matches("a[id]")) setActive(e.target.id);
  };

  return {
    active,
    handleOnClick,
  };
};
