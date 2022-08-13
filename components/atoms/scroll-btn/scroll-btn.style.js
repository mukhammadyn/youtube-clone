import styled from "styled-components";

export const ScrollBtnWrapper = styled.button`
  width: 98px;
  height: 100%;
  position: absolute;
  z-index: 10;
  ${props => props.end ? "right: 0" : "left: 0" };
  top: 0;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.99) 63.02%, rgba(255, 255, 255, 0.5) 84.9%, rgba(255, 255, 255, 0.05) 100%);
  transform: ${props => props.end ? "rotate(0)" : "rotate(180deg)"};
  border: none;
  cursor: pointer;
`

export const ScrollBtnIcon = styled.span`
  position: absolute;
  z-index: 10;
  top: 50%;
  right: 29px;
  transform: translateY(-50%);
`
