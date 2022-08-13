import styled from "styled-components";
import isDark from "../../../utils/isDark";

export const ButtonWrapper = styled.button`
  flex-shrink: 0;
  padding: 0;
  background: transparent;
  border: none;
  ${(props) => props.round && "border-radius: 50%;"}
  cursor: pointer;
  ${({ light, themeColor }) => {
    if (light) {
      return `color: ${isDark(themeColor, "#FFFFFF", "#00000")};`;
    } else {
      return `color: ${isDark(themeColor, "#909090", "#00000")};`;
    }
  }};
`;
