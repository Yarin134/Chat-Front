import { FC } from "react";
import { CreateUser } from "../Organizms/CreateUser/CreateUser";
import { AuthTemplate } from "../Templates/AuthTemplate/AuthTemplate";

interface AuthPageProps {}

const AuthPage: FC<AuthPageProps> = ({}: AuthPageProps) => {
  return (
    <AuthTemplate>
      <CreateUser />
    </AuthTemplate>
  );
};

export { AuthPage };
