import styled from "styled-components";
import isDark from "../../../utils/isDark";

export const LogoLink = styled.a`
  display: flex;
  color: ${props => isDark(props.themeColor, '#FFFFFF', '#000000')};
`
