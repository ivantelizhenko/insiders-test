import { ChangeEvent } from 'react';
import styled from 'styled-components';

type SelectType = {
  label: string;
  objs: { name: string; value?: string }[];
  handlerSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const StyledSelectBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 50rem;

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

function Select({ objs, label, handlerSelect }: SelectType) {
  return (
    <StyledSelectBox>
      <label htmlFor={label}>{label}</label>
      <StyledSelect onChange={handlerSelect}>
        {objs.map(el => {
          return (
            <option key={el.value || el.name} value={el.value || el.name}>
              {el.name}
            </option>
          );
        })}
      </StyledSelect>
    </StyledSelectBox>
  );
}

export default Select;
