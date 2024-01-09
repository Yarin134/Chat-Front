import Input from "../../Atoms/Input/Input";
import { ChangeEvent, FC, useState } from "react";
import { IUser } from "../../../entities/user.entity";
import { CreateUserWrapper } from "./CreateUser.styled";
import { USER_DEFAULT_VALUE } from "../../../constants/userDefaultValue";
import Button from "../../Atoms/Button/Button";

interface CreateUserProps {}

const CreateUser: FC<CreateUserProps> = ({}: CreateUserProps) => {
  const [user, setUser] = useState<IUser>(USER_DEFAULT_VALUE);

  const onChangeUser = (event: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <CreateUserWrapper>
      <h2>יצירת משתמש</h2>
      <div className="field">
        <Input
          inputType="text"
          fieldName="email"
          field={user.email}
          placeholder="אימייל"
          changeValue={onChangeUser}
        />
      </div>

      <div className="field">
        <Input
          inputType="text"
          fieldName="firstName"
          placeholder="שם פרטי"
          field={user.firstName}
          changeValue={onChangeUser}
        />
      </div>
      <div className="field">
        <Input
          inputType="text"
          fieldName="lastName"
          field={user.lastName}
          placeholder="שם משפחה"
          changeValue={onChangeUser}
        />
      </div>

      <div className="create-user-btn">
        <Button title="צור" onClick={() => console.log("click")} />
      </div>
    </CreateUserWrapper>
  );
};

export { CreateUser };
