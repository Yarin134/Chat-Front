import styled from "styled-components";

const HomePageTemplateWrapper = styled.div`
  padding: 27px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .lists {
    width: 100%;
    display: flex;
    margin-top: 10px;
    align-items: end;
    position: relative;
    flex-direction: column;
    justify-content: space-around;
  }

  .message-input {
    width: 100%;
    left: 101px;
    bottom: 42px;
    height: auto;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
  }
`;

export { HomePageTemplateWrapper };
