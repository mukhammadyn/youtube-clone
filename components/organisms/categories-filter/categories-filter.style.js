import styled from "styled-components";
import isDark from "../../../utils/isDark";

export const CategoriesFilterWrapper = styled.div`
  position: relative;
  padding: 12px 0 12px 20px;
  border-top: 1px solid ${props => isDark(props.themeColor, '#303030', '#E8E8E8')};
  border-bottom: 1px solid  ${props => isDark(props.themeColor, '#303030', '#E8E8E8')};
`
