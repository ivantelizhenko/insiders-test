import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

type SelectType = {
  label: string;
  name: 'name' | 'department' | 'country' | 'status';
  objs: { name: string; id: string; value?: string }[];
  handlerSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  required?: true | false;
  defaultValue?: string;
};

const StyledSelectBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;

  color: #5e626b;
  font-size: 1.4rem;
  line-height: 2rem;
`;

const StyledSelect = styled.select`
  padding: 1.6rem 10rem 1.6rem 2.4rem;
  color: #5e626b;
  font-size: 1.4rem;
  line-height: 2rem;
  background-color: #fff;
  border: 1px solid #e3e8ee;
  border-radius: 2px;
`;

function Select({
  objs,
  label,
  name,
  handlerSelect,
  required = false,
  defaultValue = '',
}: SelectType) {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => setValue(defaultValue), [defaultValue]);

  function onSelect(e: ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
    handlerSelect(e);
  }

  return (
    <StyledSelectBox>
      <label htmlFor={label}>{label}</label>
      <StyledSelect
        id={label}
        name={name}
        onChange={onSelect}
        required={required}
        value={value}
        data-selection_objs={JSON.stringify(objs)}
      >
        <option key={`default${Math.random()}`} value="">
          Select {label}
        </option>
        {objs.map(el => {
          return (
            <option key={el.id} value={el.value || el.id}>
              {el.name}
            </option>
          );
        })}
      </StyledSelect>
    </StyledSelectBox>
  );
}

export default Select;
