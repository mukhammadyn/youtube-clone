import styled from "styled-components";
import isDark from "../../../utils/isDark";

export const BadgeBtnWrapper = styled.button`
  flex-shrink: 0;
  padding: 6px 12px;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: ${(props) => isDark(props.themeColor, "#fff", "#000")};
  background: ${(props) => isDark(props.themeColor, "#575757", "#F2F2F2")};
  border: 1px solid ${(props) => isDark(props.themeColor, "#424242", "#D9D9D9")};
  border-radius: 16px;
  cursor: pointer;

  ${({ active, themeColor }) => {
    if (active && themeColor === "dark") {
      return "background: #343434;";
    } else if (active) {
      return "background: #000; color: #fff;";
    }
  }}
`;
