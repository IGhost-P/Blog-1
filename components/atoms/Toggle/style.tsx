import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 45px;
  height: 25px;
  margin-left: 15px;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: absolute;
  top: 1.5px;
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 100%;
  transition: left 0.3s;
`;

export const Text = styled.div`
  display: flex;
  background-color: #3dbf87;
  border-radius: 20px;
  box-shadow: 2px 2px 5px 0 rgba(50, 50, 50, 0.75);
  transition: background-color 0.3s;
`;

export const On = styled.div`
  width: 50%;
  height: 23px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Off = styled(On)``;
