import styled from 'styled-components';
import { titleWhite } from 'utils';

export const Container = styled.p`
  box-sizing: border-box;
  color: #222;
  font-family: Merriweather, Georgia, serif;
  line-height: 28px;
  margin: 0 1rem 3rem;
  max-width: 310px;
  padding: 0;
  word-wrap: break-word;

  & a {
    background-color: transparent;
    box-shadow: currentcolor 0 1px 0 0;
    box-sizing: inherit;
    color: ${titleWhite};
    cursor: pointer;
    font-family: Merriweather, Georgia, serif;
    line-height: 28px;
    text-decoration: none;
    word-wrap: break-word;
  }

  & a:active {
    box-shadow: none;
    outline: 0;
  }

  & a:hover {
    box-shadow: none;
    outline: 0;
  }
`;
