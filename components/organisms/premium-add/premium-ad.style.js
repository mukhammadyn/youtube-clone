import styled from "styled-components";

export const PremiumAdWrapper = styled.aside`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 41px 45px 64px 20px;

  @media only screen and (max-width: 610px) {
    display: none;
  }
`;

export const PremiumAdContent = styled.div``;

export const PremiumAdDesc = styled.p`
  max-width: 329px;
  margin-top: 16px;
  margin-bottom: 16px;
  font-family: "Rubik", "Arial", sans-serif;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  color: #000000;
`;

export const PremiumAdBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
`;
