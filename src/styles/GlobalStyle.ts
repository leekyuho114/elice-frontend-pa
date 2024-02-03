import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
const styled = { createGlobalStyle };
export const GlobalStyle = styled.createGlobalStyle`
  ${normalize}
  html {
    font-size: 10px;
  }
`;
