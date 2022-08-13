import styled from "styled-components";
import isDark from "../../../utils/isDark";

export const Wrapper = styled.p`
  margin-top: 3px;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => isDark(props.themeColor, "#909090", "#727272")};
`;
