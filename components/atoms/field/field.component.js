import { forwardRef, useState } from "react";
import { Input } from "./field.style";

const Field = (
  { type, name, themeColor, placeholder, label, ...props },
  ref
) => {

  const [value, setValue] = useState('')

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
