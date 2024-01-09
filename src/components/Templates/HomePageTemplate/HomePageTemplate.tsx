import { FC, ReactNode } from "react";
import { HomePageTemplateWrapper } from "./HomePageTemplate.styled";

interface HomePageTemplateProps {
  children: ReactNode;
}

const HomePageTemplate: FC<HomePageTemplateProps> = ({
  children,
}: HomePageTemplateProps) => {
  return <HomePageTemplateWrapper>{children}</HomePageTemplateWrapper>;
};

export { HomePageTemplate };
