import styled from "styled-components";

const InputWrapper = styled.div`
  width: 60%;
  height: 40px;
  display: flex;
  position: relative;
  border-radius: 20px;
  background-color: white;

  .input-cutomization {
    font-size: 19px;
    text-align: right;
    padding-right: 20px;
    border-radius: 20px;
    background-color: transparent;

    &:focus {
      border: 0;
      outline: 0;
    }
  }

  .paper-plane {
    left: 0;
    top: 7px;
    width: 30px;
    height: 23px;
    cursor: pointer;
    margin-left: 11px;
    position: absolute;
  }
`;

export { InputWrapper };
