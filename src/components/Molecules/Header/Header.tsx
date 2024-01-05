import { FC } from "react";
import Button from "../../Atoms/Button/Button";
import { HeaderWrapper } from "./Header.styled";

interface HeaderProps {
  onClickLeave: () => void;
}

const Header: FC<HeaderProps> = ({ onClickLeave }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <div className="header-leave">
        <Button title="Leave" onClick={onClickLeave} />
      </div>
      <div className="header-title">My Room</div>
    </HeaderWrapper>
  );
};

export { Header };
