import styled from "styled-components";

export const FilterBadgesWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    width: 3px;
    height: 0px;
  }
  
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #606060;
    border-radius: 16px;
    border: 3px solid #606060;
  }
`;
