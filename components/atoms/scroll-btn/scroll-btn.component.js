import { ScrollBtnIcon, ScrollBtnWrapper } from "./scroll-btn.style";

export const ScrollBtn = ({ children, end }) => {
  return (
    <ScrollBtnWrapper end={end}>
      <ScrollBtnIcon>{children}</ScrollBtnIcon>
    </ScrollBtnWrapper>
  );
};
