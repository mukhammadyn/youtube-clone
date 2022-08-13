import { forwardRef, useContext, useState } from "react";
import MainContext from "../../../context/main-context";
import { Input } from "./field.style";

const Field = ({ type, name, placeholder, label, ...props }, ref) => {
  const { themeColor } = useContext(MainContext);

  const [value, setValue] = useState("");

  return (
    <Input
      ref={ref}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      name={name}
      themeColor={themeColor}
      placeholder={placeholder}
      ariaLabel={label}
      {...props}
    />
  );
};

export default forwardRef(Field);
