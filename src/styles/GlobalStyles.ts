import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './themes/default';


export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme['grey_100']};
    color: ${(props) => props.theme['grey_700']};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;

  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"]{
    -moz-appearance: textfield;
  }

`;

export const Sizes = {
    small: '(max-width: 768px)',
    medium: '(min-width: 768px) and (max-width: 1280px)',
};
