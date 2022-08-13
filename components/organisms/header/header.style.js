import styled from "styled-components";
import isDark from "../../../utils/isDark";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5px;
  padding: 8px 12px;
  background-color: ${props => isDark(props.themeColor, '#242424', '#fff')};
`
