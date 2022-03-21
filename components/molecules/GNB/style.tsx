import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;

  width: 700px;

  background-color: #fff;

  padding: 10px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: top 0.3s;

  box-sizing: border-box;
  z-index: 9999999999;
`;

export const Wrapper = styled.nav`
  width: fit-content;

  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
