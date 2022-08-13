import styled from "styled-components";
import isDark from "../../../utils/isDark";

export const FieldBtnWrapper = styled.button`
  display: inline-block;
  padding: 5px 20px;
  color: ${(props) => isDark(props.themeColor, "#909090", "#000000")};
  background: ${(props) => isDark(props.themeColor, "#424242", "#F8F8F8")};
  border: 1px solid ${(props) => isDark(props.themeColor, "#424242", "#CCCCCC")};
  border-left-color: transparent;
  border-radius: 0 1px 0 1px;
  cursor: pointer;

  ${
    (props) =>
    props.round &&
    "width: 32px; height: 32px; padding: 0; padding-top: 7px; text-align: center; border: none; border-radius: 50%;"
  }

  @media only screen and (max-width: 510px) {
    padding: 0 10px;
  }
`;
