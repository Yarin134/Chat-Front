import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 80%;
  height: 70px;
  padding: 15px;
  display: flex;
  border-radius: 15px;
  background-color: white;
  justify-content: space-between;

  .header-title {
    width: auto;
    display: flex;
    color: black;
    font-size: 27px;
    font-weight: 700;
    align-items: center;
    background-color: transparent;
  }

  .header-leave {
    width: auto;
    display: flex;
    align-items: center;
    background-color: transparent;
  }
`;

export { HeaderWrapper };
