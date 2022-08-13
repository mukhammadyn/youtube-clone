import styled from "styled-components";

export const SearchFormWrapper = styled.form`
  display: flex;
  flex-grow: 1;
  justify-content: center;

  @media only screen and (max-width: 500px) {
    ${props => !props.isVisible ? 'display: none;' : 'display: flex;'}
  }
`

export const SearchFormVoiceBtn = styled.div`
  margin-left: 8px;

  @media only screen and (max-width: 834px) {
    display: none;
  }
`
