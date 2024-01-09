import { FC } from "react";
import { UsersListWrapper } from "./UsersList.styled";
import { IUser } from "../../../entities/user.entity";
import { UserCard } from "../../Molecules/UserCard/UserCard";

interface UsersProps {
  users: IUser[];
  onChooseUserChat: (userId: string) => void;
}

const UsersList: FC<UsersProps> = ({ users, onChooseUserChat }: UsersProps) => {
  const onClickUser = (_id: string) => {
    onChooseUserChat(_id);
  };

  return (
    <UsersListWrapper>
      <div className="users-title">Users</div>
      <div className="users-list">
        {users.map((user: IUser) => (
          <UserCard
            user={user}
            key={user._id}
            onClick={() => onClickUser(user._id)}
          />
        ))}
      </div>
    </UsersListWrapper>
  );
};

export { UsersList };
