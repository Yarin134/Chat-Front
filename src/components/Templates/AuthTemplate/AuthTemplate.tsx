import { FC, ReactNode } from "react";
import { AuthTemplateWrapper } from "./AuthTemplate.styled";

interface AuthWrapperProps {
  children: ReactNode;
}

const AuthTemplate: FC<AuthWrapperProps> = ({ children }: AuthWrapperProps) => {
  return <AuthTemplateWrapper>{children}</AuthTemplateWrapper>;
};

export { AuthTemplate };
