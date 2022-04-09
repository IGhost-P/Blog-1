import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 4rem;
  margin-bottom: auto;
  display: border-box;
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
  }

  & textarea {
    width: 90%;
    padding: 1.5rem 2rem;
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    color: #333;

    border: 1px solid #333;
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
