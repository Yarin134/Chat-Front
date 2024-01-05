import styled from "styled-components";

const UserCardWrapper = styled.div`
  gap: 2.5vh;
  width: 80%;
  height: 30px;
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: row;
  justify-content: end;

  .profile-circle {
    width: auto;
    display: flex;
    align-items: center;
  }

  .user-name {
    width: auto;
    display: flex;
    font-weight: 700;
    align-items: center;
  }
`;

export { UserCardWrapper };
