import { FC } from "react";
import { IUser } from "../../../entities/user.entity";
import { UserCardWrapper } from "./UserCard.styled";
import { ProfileCircle } from "../../Atoms/ProfileCircle/ProfileCircle";

interface UserCardProps {
  user: IUser;
  onClick: () => void;
}
const UserCard: FC<UserCardProps> = ({ user, onClick }: UserCardProps) => {
  const { firstName }: IUser = user;

  return (
    <UserCardWrapper onClick={onClick}>
      <div className="user-name">{firstName}</div>
      <div className="profile-circle">
        <ProfileCircle $color="#f4f6ff" {...user} />
      </div>
    </UserCardWrapper>
  );
};

export { UserCard };
