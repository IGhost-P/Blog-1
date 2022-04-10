import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 4rem;
  margin-bottom: auto;
  display: border-box;
  position: relative;
  & label {
    display: block;
    font-family: Montserrat, sans-serif;
    font-weight: bold;

    margin-bottom: 0.5rem;
  }

  & input,
  & textarea {
    font: inherit;
    border-radius: 4px;
    resize: none;
  }

  & input {
    font-family: 'Roboto', sans-serif;
    color: #333;
    font-size: 1.2rem;

    padding: 1.5rem 2rem;
    border-radius: 0.2rem;
    background-color: rgb(255, 255, 255);
    border: none;
    width: 80%;
    display: block;
    border-bottom: 0.3rem solid transparent;
    transition: all 0.3s;

    border: 1px solid #333;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  }

  & input:focus {
    border-color: #51a7e8;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(81, 167, 232, 0.5);
  }

  & textarea {
    width: 90%;
    padding: 1.5rem 2rem;
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    color: #333;

    border: 1px solid #333;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  }

  & textarea:focus {
    border-color: #51a7e8;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(81, 167, 232, 0.5);
  }
`;

export const Controls = styled.div`
  display: flex;
  column-gap: 2rem;
  flex-wrap: wrap;

  margin-bottom: 1rem;
`;

export const Control = styled.div`
  flex: 1;
  min-width: 10rem;
`;

export const Button = styled.button`
  position: absolute;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: 13.3333px;
  height: 48px;
  max-width: 100%;
  padding: 0 20px;
  text-align: center;
  transition-duration: 0.15s;
  transition-property: border-color, background, color, transform, box-shadow;
  transition-timing-function: ease;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  left: 40%;

  &.Submit {
    background-color: #eee;
  }
  &.Submit:hover {
    background-color: #dddddd;
  }

  &.Sending {
    background-color: #5ee6eb;
  }
  &.Sending:hover {
    background-color: #56bbf1;
  }

  &.Success {
    background-color: #3dbf87;
  }
  &.Success:hover {
    background-color: #48c285;
  }

  &.Error {
    background-color: #f44336;
  }
  &.Error:hover {
    background-color: #d64424;
  }
`;
