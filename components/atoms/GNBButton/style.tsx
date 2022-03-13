import styled from 'styled-components';
import { navDark, navWhite } from 'utils';

interface IButtonProps {
  isDark: boolean;
  size: string;
}

export const Container = styled.a<IButtonProps>`
  background-color: transparent;
  box-shadow: none;
  box-sizing: border-box;
  color: ${(props) => (props.isDark ? `${navDark}` : `${navWhite}`)};
  cursor: pointer;
  font-family: Montserrat, sans-serif;
  font-size: ${(props) => `${props.size}px`};
  font-weight: 900;
  line-height: 42px;
  text-decoration: none;
  word-wrap: break-word;

  margin-left: 15px;
`;
