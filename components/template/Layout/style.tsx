import styled from 'styled-components';
import { fontWhite } from 'utils';
import { Post } from '../../molecules/Post/index';

export const Container = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.section`
  width: 700px;
  height: 100%;
  background: inherit;

  color: ${fontWhite};
`;

export const Footer = styled.footer`
  width: 700px;
  height: 100%;
  background: inherit;

  padding: 50px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: ${fontWhite};

  & div {
    margin: 10px 0;
  }
`;
