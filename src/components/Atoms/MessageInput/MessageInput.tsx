import { ChangeEvent, FC, useState } from "react";
import { MessageInputWrapper } from "./MessageInputWrapper.styled";

interface MessageInputProps {
  onClickSubmit: (value: string) => void;
}

const MessageInput: FC<MessageInputProps> = ({
  onClickSubmit,
}: MessageInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(() => e.target.value);
  };

  return (
    <MessageInputWrapper>
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
    </MessageInputWrapper>
  );
};

export { MessageInput };
