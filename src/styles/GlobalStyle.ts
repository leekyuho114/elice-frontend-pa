import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
const styled = { createGlobalStyle };
export const GlobalStyle = styled.createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #f0f1f3;
    font-family: Pretendard;
  }
  input {
    appearance: none;
    border: none;
    outline: none;
  }
  button {
    border: none;
    outline: none;
  }
  /*custom scroll bar*/
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #c3c4c5; /* 스크롤바의 색상 */
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
`;
