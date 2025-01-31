import { ChangeEvent } from 'react';
import styled from 'styled-components';

type Filter = {
  label: string;
  value: string;
  checked?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const StyledFilter = styled.li`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto;
  padding: 0.8rem 1.2rem;
  align-items: center;
  column-gap: 1.2rem;

  label {
    font-size: 1.4rem;
  }

  span {
    display: flex;
    justify-content: center;
    width: 1.6rem;
  }

  input {
    appearance: none;
    width: 2.4rem;
    height: 2.4rem;
    border: 1px solid #000;
    position: relative;

    &:before {
      content: url(/public/svg/Vector.svg);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1.6rem;
      height: 1.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:checked {
      background-color: #000;
    }
  }
`;

function Filter({ label, value, handleChange, checked = false }: Filter) {
  return (
    <StyledFilter>
      <input
        id={label}
        type="checkbox"
        value={value}
        onChange={handleChange}
        checked={checked}
      />
      <span>
        <b>{label.charAt(0).toUpperCase()}</b>
      </span>
      <label htmlFor={label}>{label}</label>
    </StyledFilter>
  );
}

export default Filter;
