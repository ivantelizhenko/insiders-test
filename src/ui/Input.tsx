import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

type InputProps = {
  label: string;
  type: string;
  name: string;
  required?: true | false;
  defaultValue?: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;

  color: #5e626b;
  font-size: 1.4rem;
  line-height: 2rem;
`;

const StyledInput = styled.input`
  padding: 1.6rem 4.8rem 1.6rem 2.4rem;
  color: #5e626b;
  font-size: 1.4rem;
  line-height: 2rem;
  border: 1px #e3e8ee solid;
`;

function Input({
  label,
  name,
  type,
  handleChange,
  required = false,
  defaultValue = '',
}: InputProps) {
  const [curValue, setCurValue] = useState(defaultValue);
  useEffect(() => setCurValue(defaultValue), [defaultValue]);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setCurValue(e.target.value);
    handleChange(e);
  }

  return (
    <StyledInputBox>
      <label htmlFor={label}>{label}</label>
      <StyledInput
        type={type}
        id={label}
        name={name}
        value={curValue}
        required={required}
        onChange={onChange}
      />
    </StyledInputBox>
  );
}

export default Input;
