import styled from "styled-components";

const ProfileCircleWrapper = styled.div<{ $color?: string }>`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 20px;
  align-items: center;
  background-color: ${(props) => (props?.$color ? props?.$color : "white")};

  .letter {
    display: flex;
    font-size: 18px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
  }

  .first {
    margin-right: 5.8px;
  }

  .second {
    margin-left: 5.8px;
  }
`;

export { ProfileCircleWrapper };
