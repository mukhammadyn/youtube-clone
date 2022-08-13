import styled from "styled-components";
import isDark from "../../../utils/isDark";

export const BarNavWrapper = styled.a`
  display: flex;
  align-items: center;
  column-gap: 16px;
  padding: 6px 12px;
  text-decoration: none;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => isDark(props.themeColor, "#fff", "#000")};

  ${(props) =>
    props.active &&
    `background-color: ${isDark(props.themeColor, "#303030", "#D9D9D9")}`}
`;
