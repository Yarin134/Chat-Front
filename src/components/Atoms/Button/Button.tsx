import "./Button.css";
import { FC } from "react";
import { ButtonProps } from "./Button.props";

const Button: FC<ButtonProps> = ({ title, onClick }: ButtonProps) => {
  return (
    <>
      <button className="btn-style" onClick={onClick}>
        {title}
      </button>
    </>
  );
};

export default Button;
