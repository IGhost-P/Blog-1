import styled from 'styled-components';
import { navWhite } from 'utils';

interface IButtonProps {
  isTitle: boolean;
  size: string;
}

export const Container = styled.a<IButtonProps>`
  background-color: transparent;
  box-shadow: none;
  box-sizing: border-box;
  color: ${navWhite}px;
  cursor: pointer;
  font-family: Montserrat, sans-serif;
  font-size: ${(props) => `${props.size}px`};
  font-weight: 900;
  line-height: 42px;
  text-decoration: none;
  word-wrap: break-word;

  margin-left: ${(props) => !props.isTitle && '15px'};

  @media screen and (max-width: 620px) {
    font-size: ${(props) => `calc(${props.size}px - 5px)`};
  }

  @media screen and (max-width: 480px) {
    font-size: ${(props) => `calc(${props.size}px - 10px)`};
  }
`;
