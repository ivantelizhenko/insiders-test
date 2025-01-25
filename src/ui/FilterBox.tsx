import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import Filter from './Filter';
import { Button } from './Button';

type FilterBoxProps = {
  disabled?: boolean;
  name: string;
  data: { name: string; value: string }[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const StyledFilterBox = styled.div`
  border: 1px #000 solid;
  width: 22rem;

  display: flex;
  flex-direction: column;
  height: min-content;

  ul {
    display: flex;
    flex-direction: column;
    height: 12rem;
    overflow: scroll;
  }
`;

function FilterBox({
  name,
  data,
  handleChange,
  disabled = false,
}: FilterBoxProps) {
  const [showWindow, setShowWindow] = useState<boolean>(false);

  function handleClick() {
    setShowWindow(prevState => !prevState);
  }

  return (
    <StyledFilterBox>
      <Button
        onClick={handleClick}
        width="auto"
        padding="1rem"
        height="4.8rem"
        disabled={disabled}
      >
        Select {name}
      </Button>
      {showWindow && !disabled && (
        <ul>
          {data.map((el: { name: string; value: string }) => (
            <Filter
              key={el.name}
              label={el.name}
              value={el.value || el.name}
              handleChange={handleChange}
            />
          ))}
        </ul>
      )}
    </StyledFilterBox>
  );
}

export default FilterBox;
