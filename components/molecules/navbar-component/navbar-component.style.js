import styled from "styled-components";
import isDark from "../../../utils/isDark";

export const NavbarComponentWrapper = styled.section`
  padding: 12px 0;
  border-bottom: 1px solid  ${props => isDark(props.themeColor, '#303030', '#E5E5E5')}
`

export const NavbarComponentTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 8px;
  padding-left: 12px;
  letter-spacing: 0.4px;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  color: #636363;
`