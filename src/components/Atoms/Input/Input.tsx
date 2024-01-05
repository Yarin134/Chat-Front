import { InputWrapper } from "./Input.styled";
import { ChangeEvent, FC, useState } from "react";

interface InputProps {
  onClickSubmit: (value: string) => void;
}

const Input: FC<InputProps> = ({ onClickSubmit }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(() => e.target.value);
  };

  return (
    <InputWrapper>
      <input
        value={inputValue}
        onChange={onChangeInput}
        className="input-cutomization"
        placeholder="הקלד הודעה ..."
      />
      <img
        className="paper-plane"
        onClick={() => onClickSubmit(inputValue)}
        src="/icons/paper-plane-regular.svg"
      />
    </InputWrapper>
  );
};

export { Input };
