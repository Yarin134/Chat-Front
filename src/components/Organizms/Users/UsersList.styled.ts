import styled from "styled-components";

const UsersListWrapper = styled.div`
  width: 25%;
  height: 300px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  flex-direction: column;
  background-color: white;

  .users-title {
    width: auto;
    height: auto;
    color: black;
    font-size: 22px;
    font-weight: 700;
    margin-right: 125px;
    background-color: white;
  }

  .users-list {
    gap: 3.2vh;
    display: flex;
    overflow-y: auto;
    padding-top: 5px;
    margin-top: 18px;
    overflow-x: hidden;
    align-items: center;
    flex-direction: column;

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-button {
      height: 7px;
    }

    &::-webkit-scrollbar-track {
      background-color: white;
    }

    &::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 6px #f4f6ff;
    }
  }
`;

export { UsersListWrapper };
