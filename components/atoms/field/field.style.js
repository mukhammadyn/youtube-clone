import styled from "styled-components";
import isDark from "../../../utils/isDark";

export const Input = styled.input`
  width: 100%;
  max-width: 479px;
  padding: 8px 8px 8px 12px;
  background: ${props => isDark(props.themeColor, '#181818', '#FFFFFF')};
  border: 1px solid ${props => isDark(props.themeColor, '#424242', '#CCCCCC')};
  border-radius: 1px 0px 0px 1px;
  outline: none;

  &::placeholder {
    font-size: 14px;
    line-height: 16px;
    color: #888888;
  }

  &:focus {
    border-color: #1c62b9;
  }

  @media only screen and (max-width: 510px) {
    padding: 4px 3px 4px 10px;
  }
`
