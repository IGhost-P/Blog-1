import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
