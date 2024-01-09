import styled from "styled-components";

const InputWrapper = styled.div`
  .field {
    width: 100%;
    height: auto;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  input {
    text-align: right;
    padding-right: 10px;
    &:active,
    &:focus {
      outline: none;
    }
  }

  .field-name {
    text-wrap: nowrap;
  }

  .input-value {
    border: 0;
    width: 100%;
    height: auto;
    height: 45px;
    font-size: 20px;
    padding-left: 10px;
    border-radius: 20px;
    background-color: #f4f6ff;

    grid-row: 1;
    grid-column: 1;

    border: 0px;
  }

  .input-wrapper {
    width: 75%;
    height: auto;
    display: grid;
    height: fit-content;
    border-bottom: 2.5px solid #5f42ff;
  }

  .input-value + .input-title {
    height: auto;
    padding: 0 10px;
    text-align: right;
    transition: 0.48s;
    background-color: #f4f6ff;
  }

  .input-value:focus + .input-title {
    transform: translate(7.5px, -20px);
  }

  .stay-if-value-exists + .input-title {
    transform: translate(7.5px, -20px);
  }

  .input-title {
    grid-row: 1;
    height: auto;
    cursor: text;
    grid-column: 1;
    color: #5f42ff;
    user-select: none;
    align-self: center;
    justify-self: right;
    padding-right: 17px;
    -webkit-user-drag: none;
    background-color: #f4f6ff;
  }
`;

export { InputWrapper };
