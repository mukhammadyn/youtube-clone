import styled from "styled-components";
import isDark from "../../../utils/isDark";

export const ButtonWrapper = styled.button`
  flex-shrink: 0;
  padding: 0;
  background: transparent;
  border: none;
  ${props => props.round && 'border-radius: 50%;'}
  cursor: pointer;
  color: ${(light, themeColor) => {
    if(light) {
      return isDark(themeColor, '#FFFFFF', '#00000')
    } else {
      return isDark(themeColor, '#909090', '#00000')
    }
  }};
`
