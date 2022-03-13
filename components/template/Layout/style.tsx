import styled from 'styled-components';
import { darkBackground } from 'utils';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${darkBackground};

  /* visibility: hidden; */
`;

export const Wrapper = styled.section`
  width: 700px;
  height: 100%;
  background: ${darkBackground};
`;
