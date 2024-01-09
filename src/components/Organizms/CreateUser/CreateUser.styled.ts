import styled from "styled-components";

const CreateUserWrapper = styled.div`
  gap: 5vh;
  width: 62%;
  height: auto;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .field {
    height: auto;
  }

  h2 {
    height: auto;
    font-weight: bold;
    text-align: right;
  }

  .create-user-btn {
    height: auto;
    display: flex;
    justify-content: flex-end;
  }
`;

export { CreateUserWrapper };
