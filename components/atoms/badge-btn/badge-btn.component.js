import { BadgeBtnWrapper } from "./badge-btn.style";

export const BadgeBtn = ({ children, active, themeColor, id }) => {
  return (
    <BadgeBtnWrapper id={id} active={active} themeColor={themeColor}>
      {children}
    </BadgeBtnWrapper>
  );
};
