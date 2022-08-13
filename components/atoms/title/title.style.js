import styled from "styled-components";
import isDark from "../../../utils/isDark";

export const Wrapper = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  color: ${props => isDark(props.themeColor, '#fff', '#000')}
`
