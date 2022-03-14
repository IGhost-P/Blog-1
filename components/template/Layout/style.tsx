import styled from 'styled-components';
import { fontWhite } from 'utils';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

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

  margin-top: 200px;
`;
