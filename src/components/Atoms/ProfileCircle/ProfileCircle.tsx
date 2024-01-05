import { FC } from "react";
import { ProfileCircleWrapper } from "./ProfileCircle.styled";

interface ProfileCircleProps {
  $color: string;
  lastName: string;
  firstName: string;
}

const ProfileCircle: FC<ProfileCircleProps> = ({
  $color,
  lastName,
  firstName,
}: ProfileCircleProps) => {
  return (
    <ProfileCircleWrapper $color={$color}>
      <div className="letter first">{lastName.charAt(0)}</div>
      <div className="letter second">{firstName.charAt(0)}</div>
    </ProfileCircleWrapper>
  );
};

export { ProfileCircle };
