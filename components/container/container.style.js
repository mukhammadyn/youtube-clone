import styled from "styled-components";
import isDark from "../../utils/isDark";

export const ContainerWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  overflow-x: hidden;
  background-color: ${(props) => isDark(props.themeColor, "#212121", "#fff")};
`;
