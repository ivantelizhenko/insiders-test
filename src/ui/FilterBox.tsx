import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import Filter from './Filter';
import { Button } from './Button';

type FilterBoxProps = {
  disabled?: boolean;
  name: string;
  data: { name: string; value: string }[];
  availableFilters: string[];
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
  availableFilters,
}: FilterBoxProps) {
  const [showWindow, setShowWindow] = useState<boolean>(false);

  function handleClick() {
    setShowWindow(prevState => !prevState);
  }

  useEffect(() => {
    if (disabled) setShowWindow(false);
  }, [disabled]);

  return (
    <StyledFilterBox>
      <Button
        onClick={handleClick}
        $width="auto"
        $padding="1rem"
        $height="4.8rem"
        disabled={disabled}
      >
        Select {name}
      </Button>
      {showWindow && !disabled && (
        <ul>
          {data.map(({ name, value }: { name: string; value: string }) => (
            <Filter
              key={name}
              label={name}
              value={value || name}
              handleChange={handleChange}
              checked={availableFilters.includes(value)}
            />
          ))}
        </ul>
      )}
    </StyledFilterBox>
  );
}

export default FilterBox;
