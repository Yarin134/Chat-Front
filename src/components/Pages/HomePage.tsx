import { FC } from "react";
import { IUser } from "../../entities/user.entity";
import { Header } from "../Molecules/Header/Header";
import { IGroup } from "../../entities/group.entity";
import { UsersList } from "../Organizms/Users/UsersList";
import { GroupsList } from "../Organizms/GroupsList/GroupsList";
import { MessageInput } from "../Atoms/MessageInput/MessageInput";
import { HomePageTemplate } from "../Templates/HomePageTemplate/HomePageTemplate";

interface HomePageProps {
  users: IUser[];
  groups: IGroup[];
}

const HomePage: FC<HomePageProps> = ({ users, groups }: HomePageProps) => {
  return (
    <HomePageTemplate>
      <Header onClickLeave={() => console.log("leave")} />
      <div className="lists">
        <UsersList
          users={users}
          onChooseUserChat={(userId) => console.log(userId)}
        />
        <GroupsList
          groups={groups}
          onChooseGroupChat={(groupId) => console.log(groupId)}
        />
      </div>
      <div className="message-input">
        <MessageInput onClickSubmit={(val) => console.log(val)} />
      </div>
    </HomePageTemplate>
  );
};

export { HomePage };
