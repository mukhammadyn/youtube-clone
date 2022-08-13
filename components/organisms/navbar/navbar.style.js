import styled from "styled-components";
import isDark from "../../../utils/isDark";

export const NavbarWrapper = styled.nav`
  width: 100%;
  max-width: 195px;
  max-height: 100vh;
  flex-shrink: 0;
  overflow-x: hidden;
  background-color: ${props => isDark(props.themeColor, '#212121', '#fff')};

  &::-webkit-scrollbar {
    width: 6px;
    height: 0px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #909090;
    border-radius: 20px;
    border: 3px solid #909090;
  }

  @media only screen and (max-width: 834px) {
    display: none;
  }
`;
