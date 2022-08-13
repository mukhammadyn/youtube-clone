import { ButtonWrapper } from "./button.style";

export const Button = ({ themeColor, children, light, round, ...props }) => {
  return (
    <ButtonWrapper themeColor={themeColor} light={light} round={round} {...props}>
      {children}
    </ButtonWrapper>
  );
};
