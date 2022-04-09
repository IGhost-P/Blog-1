import styled from 'styled-components';
import { fontWhite } from 'utils';

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.section`
  width: 50%;
  min-height: 70%;
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
  align-self: flex-end;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: inherit;

  margin-top: 50px;

  padding: 50px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: ${fontWhite};

  & div {
    margin-top: 1rem;
  }

  @media screen and (min-width: 1600px) {
    width: 800px;
  }
`;
