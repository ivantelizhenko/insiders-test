import { useState } from 'react';
import styled from 'styled-components';
import Filter from './Filter';

type FilterBox = { name: string; data: any };

const StyledFilterBox = styled.div`
  border: 1px #000 solid;
  width: 20rem;
  display: flex;
  flex-direction: column;
  height: fit-content;

  & ul {
    display: flex;
    flex-direction: column;
    height: 8rem;
    overflow: scroll;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: inherit;

  border: none;
  color: #000;
  border-bottom: none;
  padding: 0.8rem 1.2rem;
  &:disabled {
    border: 1px solid #c2c2c2;
    color: #c2c2c2;
  }
`;

function FilterBox({ name, data }: FilterBox) {
  const [showWindow, setShowWindow] = useState(false);

  function handleClick() {
    setShowWindow(!showWindow);
    console.log(showWindow);
  }

  return (
    <StyledFilterBox>
      <Button onClick={handleClick}>Select {name}</Button>
      <ul>
        {showWindow &&
          data.map((el: { name: string; value: string }) => (
            <Filter key={el.name} label={el.name} value={el.value || el.name} />
          ))}
      </ul>
    </StyledFilterBox>
  );
}

export default FilterBox;
