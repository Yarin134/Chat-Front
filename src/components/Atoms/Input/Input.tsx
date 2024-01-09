import { InputWrapper } from "./Input.styled";
import { FC, useRef, useState } from "react";

interface InputFieldProps {
  fieldName: string;
  inputType: string;
  placeholder: string;
  changeValue: Function;
  field: string | number;
}

const Input: FC<InputFieldProps> = ({
  field,
  fieldName,
  inputType,
  placeholder,
  changeValue,
}: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasFocused, setHasFocused] = useState(false);

  const handleFocus = (): void => {
    setHasFocused(() => true);
  };

  const handleBlur = (): void => {
    setHasFocused(() => false);
  };

  return (
    <InputWrapper>
      <div className="field">
        <div
          className="input-wrapper"
          onClick={() => {
            setHasFocused(() => true);
            inputRef.current?.focus();
          }}
        >
          <input
            value={field}
            ref={inputRef}
            name={fieldName}
            type={inputType}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className={`input-value ${
              !hasFocused && field === "" ? "" : "stay-if-value-exists"
            }`}
            onChange={(e) => changeValue(e)}
          />
          <div className="input-title">{placeholder}</div>
        </div>
      </div>
    </InputWrapper>
  );
};

export default Input;
