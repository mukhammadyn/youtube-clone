import styled from "styled-components";

export const LogoNavBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 19px;

  @media only screen and (max-width: 834px) {
    & > button {
      display: none;
    }
  }
`
