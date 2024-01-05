import { FC } from "react";
import { GroupsListWrapper } from "./GroupsList.styled";
import { IGroup } from "../../../entities/group.entity";

interface GroupsListProps {
  groups: IGroup[];
  onChooseGroupChat: (groupId: string) => void;
}

const GroupsList: FC<GroupsListProps> = ({
  groups,
  onChooseGroupChat,
}: GroupsListProps) => {
  const onClickGroup = (_id: string) => {
    onChooseGroupChat(_id);
  };

  return (
    <GroupsListWrapper>
      <div className="groups-title">Groups</div>
      <div className="groups-list">
        {groups.map(({ _id, name }: IGroup) => (
          <div className="group" onClick={() => onClickGroup(_id)}>
            {name}
          </div>
        ))}
      </div>
    </GroupsListWrapper>
  );
};

export { GroupsList };
