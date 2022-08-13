import styled from "styled-components";

export const HeaderButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 26px;

  @media only screen and (max-width: 526px) {
    column-gap: 15px;
  }
`;

export const HeaderButtonsItem = styled.div`
  display: none;

  @media only screen and (max-width: 500px) {
    ${(props) => props.isVisible && "display: block;"}
  }
`;
