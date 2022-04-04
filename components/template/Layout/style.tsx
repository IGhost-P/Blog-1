import styled from 'styled-components';
import { fontWhite } from 'utils';

export const Container = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.section`
  width: 50%;
  height: 100%;
  background: inherit;

  color: ${fontWhite};

  @media screen and (max-width: 1300px) {
    width: 80%;
  }

  @media screen and (min-width: 1600px) {
    width: 800px;
  }
`;

export const Footer = styled.footer`
  width: 50%;
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

  @media screen and (min-width: 1600px) {
    width: 800px;
  }
`;
