import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  width: 100%;
  max-width: 195px;
  max-height: 100vh;
  flex-shrink: 0;
  overflow-x: hidden;

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
`;
